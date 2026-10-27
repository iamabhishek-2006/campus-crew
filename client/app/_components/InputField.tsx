import { Input } from "@/components/ui/input"
import { FieldErrors, UseFormRegister } from "react-hook-form"
import { registerCollegeTypes } from "../schemas/register-college"

const InputField=({id,register ,name,errors,placeholder}:{
    id:string,
    register:UseFormRegister<registerCollegeTypes>,
    name:keyof registerCollegeTypes,
    errors:FieldErrors<registerCollegeTypes>,
    placeholder:string})=>{
    return <div>
        <Input id={id} placeholder={placeholder} {...register(name)} />
        {errors[name] && <p className="text-red-600 text-sm">{errors[name].message}</p>}
    </div>
}

export default InputField