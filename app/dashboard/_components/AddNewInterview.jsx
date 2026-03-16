"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { chatSession } from "@/utils/GeminiAIModel";
import { LoaderCircle } from "lucide-react";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { v4 as uuidv4 } from 'uuid';
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { useRouter } from "next/navigation";

function AddNewInterview() {
  
    const [openDialog, setOpenDialog] = useState(false);
    const [jobPosition,setJobPosition]=useState();
    const [jobDesc,setJobDesc]=useState();
    const [jobExperience,setJobExperience]=useState();
    const [loading,setLoading]=useState(false);
    const [jsonResponse,setJsonResponse] = useState([]);
    const {user}=useUser();
    const router=useRouter();

    const onSubmit=async(e)=>{
      setLoading(true);
        e.preventDefault();
        console.log(jobPosition,jobDesc,jobExperience);
        const InputPrompt="Job Position: "+jobPosition+", Job Description: "+jobDesc+", Years of Experience: "+jobExperience+", depends on this information please give me 5-7 interview questions along with answer in JSON format. Give Question and Answer (Question and answer only and no other ai comments or suggestions) as field in JSON";
       
        const result=await chatSession.sendMessage(InputPrompt);

        const interviewID=uuidv4()
        const responseText = result.response.text();
        const MockJsonResp = responseText
        .replace(/```json/g, '')  // Remove code block markers
        .replace(/```/g, '')      // Remove other code block markers
        .trim();                  // Trim whitespace
        
        console.log(JSON.parse(MockJsonResp));
        
        setJsonResponse(MockJsonResp);

        // Pushing data in the database
        if(MockJsonResp){
        const resp=await db.insert(MockInterview)
        .values({
          id:interviewID,
          jsonMockResp:MockJsonResp,
          jobPosition:jobPosition,
          jobDesc:jobDesc,
          jobExperience:jobExperience,
          createdBy:user?.primaryEmailAddress?.emailAddress,
          createdAt:moment().format('DD-MM-YYYY'),
          mockId:uuidv4()
        }).returning({mockId:MockInterview.mockId})
        
        console.log("Inserted ID: ",resp);
        if(resp){
          setOpenDialog(false);
          router.push('/dashboard/interview/'+resp[0].mockId)
        }
      }
      else{
        console.log("Eror");
      }
        setLoading(false);
    }

  return (
    <div>
      <div
        className="p-10 border rounded-lg bg-secondary
        hover:scale-105 hover:shadow-md cursor-pointer transition-all"
        onClick={() => setOpenDialog(true)}
      >
        <h2 className="text-lg text-center">+ Add New</h2>
      </div>
      <Dialog open={openDialog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              Tell us more about your job interview
            </DialogTitle>
            <div>
              <form onSubmit={onSubmit}>
                <div className="text-gray-500">
                  <p>
                    Add details about your job position/role, Job Description,
                    and years of experience
                  </p>
                  <div className="mt-7 my-2">
                    <label>Job Role/Job Position</label>
                    <Input placeholder="Ex. Full Stack Developer" required 
                        onChange={(event)=>setJobPosition(event.target.value)}
                    />
                  </div>
                  <div className="my-3">
                    <label>Job Description/Tech Stack</label>
                    <Textarea
                      placeholder="Ex. React, Angular, NodeJs, MySql etc"
                      required
                      onChange={(event)=>setJobDesc(event.target.value)}
                    />
                  </div>
                  <div className="my-3">
                    <label>Years of experience</label>
                    <Input
                      placeholder="Ex. 2"
                      type="number"
                      max="20"
                      required
                      onChange={(event)=>setJobExperience(event.target.value)}
                    />
                  </div>
                </div>
                <div className="flex gap-5 justify-end">
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => setOpenDialog(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit"
                    disabled={loading}>
                    {
                      loading?
                      <>
                      <LoaderCircle className="animate-spin"/>'Generating from AI'
                      </>:'Start Interview'
                    }</Button>
                </div>
              </form>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddNewInterview;
