"use server"

import { parseWithZod } from "@conform-to/zod";
import { loginSchema } from "./lib/zodSchemas";
import { redirect } from "next/navigation";

export const createUser = async(prev, formData)=>{
    
    const submission = parseWithZod(formData, {
        schema:loginSchema
    })
    if(submission.status === "success"){
        redirect("/")
    }
}

