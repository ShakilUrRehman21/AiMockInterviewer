"use client";
import { db } from "@/utils/db";
import { UseAnswer } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";

function Feedback({ params }) {
  const [feedbackList, setFeedbackList] = useState([]);

  const navigate = useRouter();

  useEffect(() => {
    GetFeedback();
  }, []);

  const pathname = usePathname();
  const segments = pathname.split("/");
  const interviewId = segments[segments.length - 2];

  const GetFeedback = async () => {
    const result = await db
      .select()
      .from(UseAnswer)
      .where(eq(UseAnswer.mockIdRef, interviewId))
      .orderBy(UseAnswer.id);
    
    setFeedbackList(result);
    
  };

  return (
    <div className="p-10">
      {feedbackList?.length == 0 ? (
        <h2 className="font-bold text-xl text-gray-500">No Interview Feedback Record Found</h2>
      ) : (
        <>
          <h2 className="text-3xl font-bold text-green-600">Congratulations!</h2>
          <h2 className="font-bold text-2xl">Here is your interview feedback</h2>
          
          {/* <h2 className="text-blue-700 text-lg my-3">
            Your total interview rating: <strong>{totalRating}</strong>
          </h2> */}

          <h2 className="text-sm text-gray-500">
            Find below interview question with correct answer, your answer and feedback for improvement.
          </h2>

          {feedbackList.map((item, index) => (
            <Collapsible key={index} className="mt-7">
              <CollapsibleTrigger className="flex justify-between gap-7 p-2 bg-gray-100 rounded-lg my-2 text-left w-full">
                {item.question} <ChevronsUpDown className="w-5 h-5" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="flex flex-col gap-2">
                  <h2 className="text-red-500 p-2 border rounded-lg"><strong>Rating: </strong>{item.rating}</h2>
                  <h2 className="p-2 border rounded-lg bg-red-50 text-sm text-red-900"><strong>Your Answer: </strong>{item.userAns}</h2>
                  <h2 className="p-2 border rounded-lg bg-green-50 text-sm text-green-900"><strong>Correct Answer: </strong>{item.correctAns}</h2>
                  <h2 className="p-2 border rounded-lg bg-blue-50 text-sm text-blue-900"><strong>Feedback: </strong>{item.feedback}</h2>
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </>
      )}
      <Button className="mt-5" onClick={() => navigate.replace('/dashboard')}>Go Home</Button>
    </div>
  );
}

export default Feedback;
