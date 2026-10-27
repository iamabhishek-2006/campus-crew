import {z} from "zod"

export const signInCollegeSchema=z.object({
    collegeEmail:z.string().email({message:"email is required"}),
    password_hash:z.string().min(1,{message:"Password is required"}).min(8,{message:"Password is too sort"})
})

export type signInCollegeTypes=z.infer<typeof signInCollegeSchema>