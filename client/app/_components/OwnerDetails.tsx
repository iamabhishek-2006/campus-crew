import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { FieldErrors, UseFormRegister, UseFormTrigger } from "react-hook-form";
import { registerCollegeTypes } from "../schemas/register-college";
import InputField from "./InputField";

const OwnerDetails = ({register,trigger,errors,next,back}:{
  register:UseFormRegister<registerCollegeTypes>;
  trigger:UseFormTrigger<registerCollegeTypes>;
  errors:FieldErrors<registerCollegeTypes>,
  next:()=>void;
  back:()=>void
 }) => {
  const isValid=async()=>{
    const isValid=await trigger(["ownerName","ownerEmail","password","confirmPassword"])
    if (!isValid) return;
    next();
  }
  return (
    <section className="space-y-6 animate-fade-up">
      <div className="space-y-1.5">
        <h1 className="font-display text-display-lg">
          You&rsquo;ll be the College Owner
        </h1>
        <p className="text-body-md text-muted-foreground">
          This account manages departments, teachers, and students.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5 sm:col-span-2">
          <Label htmlFor="full-name">Full name</Label>
          <InputField
            id="full-name"
            placeholder="Dr. Elena Marsh"
            register={register}
            errors={errors}
            name="ownerName"
          />
        </div>
        <div className="space-y-1.5 sm:col-span-2">
          <Label htmlFor="owner-email">Email</Label>
          <InputField
            id="owner-email"
            placeholder="elena.marsh@meridian.edu"
            register={register}
            errors={errors}
            name="ownerEmail"
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="password">Password</Label>
          <InputField
            id="password"
            placeholder="**********"
            register={register}
            errors={errors}
            name="password"
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="confirm-password">Confirm password</Label>
          <InputField
            id="confirm-password"
            placeholder="**********"
            register={register}
            errors={errors}
            name="confirmPassword"
          />
        </div>
      </div>

      <div className="flex items-center justify-between pt-2">
        <Button variant="ghost" onClick={back} className="gap-1.5">
          <ArrowLeft className="size-4" /> Back
        </Button>
        <Button
          size="lg"
          onClick={isValid}
          className="gap-1.5 text-primary-foreground"
        >
          Continue <ArrowRight className="size-4" />
        </Button>
      </div>
    </section>
  );
};

export default OwnerDetails;
