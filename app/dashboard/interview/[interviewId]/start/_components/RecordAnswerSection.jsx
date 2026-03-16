"use client"
import useSpeechToText from 'react-hook-speech-to-text';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import { useUser } from "@clerk/nextjs";
import { Mic } from 'lucide-react';
import { toast } from 'sonner';
import { chatSession } from '@/utils/GeminiAIModel';
import { db } from '@/utils/db';
import { v4 as uuidv4 } from 'uuid';
import moment from "moment";
import { UseAnswer } from '@/utils/schema';



function RecordAnswerSection({ mockInterviewQuestion, activeQuestionIndex, interviewData }) {
    const [userAnswer,setUserAnswer]=useState('');
    const {user}=useUser();
    const [loading,setLoading]=useState(false);
    const {
        error,
        interimResult,
        isRecording,
        results,
        setResults,
        startSpeechToText,
        stopSpeechToText,
      } = useSpeechToText({
        continuous: true,
        useLegacyResults: false
      });

      useEffect(()=>{
        results.map((result)=>{
            setUserAnswer(prevAns=>prevAns+result?.transcript)
        })
      },[results])

      useEffect(()=>{
        if(!isRecording&&userAnswer.length>10){
            UpdateUserAnswer();
        }
      },[userAnswer])
    const [isWebcamActive, setIsWebcamActive] = useState(false);

      const SaveUserAnswer=async()=>{
        if(isRecording){
            stopSpeechToText();
            
        }
        else{
            startSpeechToText();
        }
      }
    

      const UpdateUserAnswer=async()=>{
        console.log(userAnswer);
        setLoading(true);
        const interviewID=uuidv4()
        const feedbackPrompt="Question: "+mockInterviewQuestion[activeQuestionIndex]?.Question+
        ", User Answer: "+userAnswer+", Depends on question ans user answer for given interview question "+
        " please give us rating for our answer and feedback as area of improvment if any"+
        " in just 3 to 5 lines to improve it in JSON format with rating field and feedback field";
        const result=await chatSession.sendMessage(feedbackPrompt);
        const responseText = result.response.text();
        const mockJsonResp=responseText
        .replace(/```json/g, '')  // Remove code block markers
        .replace(/```/g, '')      // Remove other code block markers
        .trim();                  // Trim whitespace
        console.log(mockJsonResp);
        const JsonFeedbackResp=JSON.parse(mockJsonResp)
        const resp = await db.insert(UseAnswer)
        .values({
            id:interviewID,
            mockIdRef:interviewData?.mockId,
            question:mockInterviewQuestion[activeQuestionIndex]?.Question,
            correctAns:mockInterviewQuestion[activeQuestionIndex]?.Answer,
            userAns:userAnswer,
            feedback:JsonFeedbackResp?.feedback,
            rating:JsonFeedbackResp?.rating,
            userEmail:user?.primaryEmailAddress?.emailAddress,
            createdAt:moment().format('DD-MM-YYYY')
        })

        if(resp){ 
            toast('User Answer recorded successfully');
            setUserAnswer('');
            setResults([]);
        }
        setResults([]);

        setLoading(false);
      }

      
  return (
    <div className='flex flex-col items-center justify-center'>
    <div className='flex flex-col mt-20 justify-center items-center bg-gray-900 rounded-lg p-5 relative'>
      {/* Conditionally render the overlayed image based on webcam state */}
      {!isWebcamActive && (
        <Image 
          src={'/webcam1.png'} 
          alt="webcam overlay" 
          width={200} 
          height={200} 
          className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20'
        />
      )}
      <Webcam
        mirrored={true}
        style={{
          height: 300,
          width: '100%',
          zIndex: 10,
        }}
        onUserMedia={() => setIsWebcamActive(true)} // Set webcam as active on media access
        onUserMediaError={() => setIsWebcamActive(false)} // Reset if there's an error
      />
    </div>
    <Button 
    disabled={loading}
    variant='outline' className='my-10'
    onClick={SaveUserAnswer}>
        {isRecording?
        <h2 className='text-red-600 flex gap-2'>
            <Mic/> 'Recording...'
        </h2>
        :
        'Record Answer'}</Button>
    </div>
  );
}

export default RecordAnswerSection;
