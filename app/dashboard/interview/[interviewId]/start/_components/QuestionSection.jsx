import { Lightbulb, Volume2 } from "lucide-react";
import React from "react";

function QuestionSection({ mockInterviewQuestion, activeQuestionIndex }) {
  
  const textToSpeach=(text)=>{
    if('speechSynthesis' in window){
      const speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech)
    }
    else{
      alert("Sorry, Your browser does not support text to speech")
    }
  }
  
  return (
    mockInterviewQuestion && (
      <div className="p-5 border rounded-lg my-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {mockInterviewQuestion &&
            mockInterviewQuestion.map((question, index) => (
              <div key={index} className="mb-4">
                {" "}
                {/* Added a div for each question */}
                <h2
                  className={`p-2 bg-secondary rounded-full text-xs md:text-sm text-center cursor-pointer
            ${activeQuestionIndex == index && "font-bold"}`}
                >
                  Question #{index + 1}
                </h2>
              </div>
            ))}
        </div>
        <h2 className="my-5 text-md md:text-lg">
          {mockInterviewQuestion[activeQuestionIndex]?.Question}
        </h2>
        <Volume2 className="cursor-pointer" onClick={()=>textToSpeach(mockInterviewQuestion[activeQuestionIndex]?.Question)}/>
        <div className="border rounded-lg p-5 bg-gray-900 mt-20">
          <h2 className="flex gap-2 items-center text-white">
            <Lightbulb/>
            <strong>Note:</strong>
          </h2>
          <h2 className="text-sm my-2 text-white">
            Click on "Record Answer" when you want to answer the question. At the end of the interview we will give you the feedback along with correct answer for each question and your answer to compare it.
          </h2>
        </div>
      </div>
    )
  );
}

export default QuestionSection;
