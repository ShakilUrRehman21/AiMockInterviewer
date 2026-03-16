"use client";
import { Button } from '@/components/ui/button';
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import { Lightbulb, WebcamIcon } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import { usePathname } from 'next/navigation'; // Import usePathname

function Interview() {
  const pathname = usePathname(); // Get the current pathname
  const interviewId = pathname.split('/').pop(); // Extract interviewId from the pathname
  const [webCamEnabled, setWebCamEnabled] = useState(false);
  const [interviewData, setInterviewData] = useState(null); // Initialize with null

  useEffect(() => {
    const fetchInterviewDetails = async () => {
      if (!interviewId) return; // Ensure interviewId is defined

      const result = await db
        .select()
        .from(MockInterview)
        .where(eq(MockInterview.mockId, interviewId));

      setInterviewData(result[0]);
    };

    fetchInterviewDetails();
  }, [interviewId]); // Depend on interviewId

  const toggleWebCam = () => {
    setWebCamEnabled((prev) => !prev); // Toggle webcam state
  };

  return (
    <div className='my-10 flex flex-col justify-center items-center'>
      <h2 className='font-bold text-2xl'>Let's Get Started</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        <div className='flex flex-col my-5 gap-5 '>
          <div className='flex flex-col p-5 rounded-lg border gap-5'>
            {interviewData ? ( // Check if interviewData is loaded
              <>
                <h2 className='text-lg'>
                  <strong>Job Role/Job Position:</strong> {interviewData.jobPosition}
                </h2>
                <h2 className='text-lg'>
                  <strong>Job Description/ Tech Stack:</strong> {interviewData.jobDesc}
                </h2>
                <h2 className='text-lg'>
                  <strong>Years of Experience:</strong> {interviewData.jobExperience}
                </h2>
              </>
            ) : (
              <p>Loading interview details...</p>
            )}
            <div className='p-5 border rounded-lg border-yellow-300 bg-yellow-100'>
              <h2 className='flex gap-2 items-center text-yellow-500'>
                <Lightbulb />
                <strong> Information</strong>
              </h2>
              <p className='mt-3 text-yellow-500'>Enable Video Web Cam and Microphone to start your AI Generated Mock Interview. It has 5-7 questions which you can answer, and at the last, you will get the report based on your answers. <br/><br/>Note: We never record your video. Webcam access can be disabled at any time if you want.</p>
            </div>
          </div>
          <Link href={`/dashboard/interview/${interviewId}/start`}>
            <Button disabled={!interviewId}>Start Interview</Button>
          </Link>
        </div>
        <div className='flex flex-col items-center'>
          {webCamEnabled ? (
            <div className='flex flex-col items-center'>
              <Webcam
                onUserMedia={() => setWebCamEnabled(true)}
                onUserMediaError={() => setWebCamEnabled(false)}
                mirrored={true}
                style={{
                  height: 300,
                  width: 300,
                }}
              />
              <Button onClick={toggleWebCam} className='mt-2'>
                Disable Webcam
              </Button>
            </div>
          ) : (
            <>
              <WebcamIcon className='h-48 w-48 my-7 p-10 bg-secondary rounded-lg border' />
              <Button onClick={toggleWebCam} className='mt-2'>
                Enable Web Cam and Microphone
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Interview;
