"use client";
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import { usePathname } from 'next/navigation'; // Import usePathname
import React, { useEffect, useState } from 'react';
import QuestionSection from './_components/QuestionSection';
import RecordAnswerSection from './_components/RecordAnswerSection';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function StartInterview() {
  const pathname = usePathname(); // Get the current pathname
  const segments = pathname.split('/'); // Split the pathname by '/'
  const interviewId = segments[segments.length - 2]; // Get the second last segment which is the interviewId

    const [interviewData,setInterviewData]=useState();
    const [mockInterviewQuestion,setMockInterviewQuestion] = useState();
    const [activeQuestionIndex,setActiveQuestionIndex]=useState(0);

  useEffect(() => {
    const fetchInterviewDetails = async () => {
      if (!interviewId) return; // Ensure interviewId is defined
      const result = await db
        .select()
        .from(MockInterview)
        .where(eq(MockInterview.mockId, interviewId));
    
        const jsonMockResp=JSON.parse(result[0].jsonMockResp);
        console.log(jsonMockResp);
        setMockInterviewQuestion(jsonMockResp);
        setInterviewData(result[0]);
    };

    fetchInterviewDetails();
  }, [interviewId]); // Depend on interviewId

  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        {/* Isolated QuestionSection */}
        <div className="question-section-container">
          <QuestionSection
            mockInterviewQuestion={mockInterviewQuestion}
            activeQuestionIndex={activeQuestionIndex}
          />
        </div>

        {/* Isolated RecordAnswerSection */}
        <div className="record-answer-section-container">
          <RecordAnswerSection 
            mockInterviewQuestion={mockInterviewQuestion}
            activeQuestionIndex={activeQuestionIndex}
            interviewData={interviewData}
          />
          <div className='flex justify-end gap-6'>
          {activeQuestionIndex>0&&
          <Button onClick={()=>setActiveQuestionIndex(activeQuestionIndex-1)}>Previous Question</Button>}
          {activeQuestionIndex!=mockInterviewQuestion?.length-1&&
          <Button onClick={()=>setActiveQuestionIndex(activeQuestionIndex+1)}>Next Question</Button>}
          {activeQuestionIndex==mockInterviewQuestion?.length-1&&
          <Link href={"/dashboard/interview/"+interviewData?.mockId+"/feedback"}>
          <Button>End Interview</Button>
          </Link>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartInterview;
