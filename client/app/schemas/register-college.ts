import {z} from "zod"

const MAX_FILE_SIZE=5*1024*1024

const logoSchema=z.instanceof(File,{message:"File is required"}).refine((file) => file.size <= MAX_FILE_SIZE,{message:"Max file size is 5MB"}).refine((file)=>["image/png","image/svg+xml","image/jpeg"].includes(file.type),{message:"File type must be PNG , SVG or JPEG"});

const idProofSchema=z.instanceof(File,{message:"File is required"}).refine((file)=>file.size <= MAX_FILE_SIZE,{message:"Max file size is 5MB"}).refine((file)=>["application/pdf","application/msword","image/png","image/jpeg","image/jpeg"].includes(file.type),{message:"File type must be PDF, Word, PNG, or JPEG"});

export const registerCollegeSchema=z.object({
    collegeName:z.string().min(3,{message:"College Name is required"}).min(3,{message:"College name is too sort"}),
    collegeEmail:z.string().email({message:"Invalid email"}),
    website:z.string().url({message:"Website is Invalid"}),
    phone:z.string().min(1,{message:"Phone is required"}).min(10,{message:"Phone is too sort"}),
    address:z.string().min(1,{message:"Address is required"}).min(10,{message:"Address is too sort"}),
    city:z.string().min(1,{message:"City is required"}).min(2,{message:"city is too sort"}),
    state:z.string().min(1,{message:"State is required"}).min(2,{message:"State is too sort"}),

    ownerName:z.string().min(1,{message:"Owner name is required"}).min(3,{message:"Owner name is too sort"}),
    ownerEmail:z.string().email({message:"Invalid email"}),
    password:z.string().min(1,{message:"Password is required"}).min(8,{message:"Password is too sort"}),
    confirmPassword:z.string().min(1,{message:"Password is required"}),

    collegeLogo:logoSchema,
    collegeIDProof:idProofSchema
});

export type registerCollegeTypes=z.infer<typeof registerCollegeSchema>