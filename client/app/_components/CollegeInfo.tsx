import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { registerCollegeTypes } from "../schemas/register-college";
import { FieldErrors, UseFormRegister, UseFormTrigger } from "react-hook-form";
import InputField from "./InputField";

const CollegeInfo=({register,trigger,errors,next}:{register:UseFormRegister<registerCollegeTypes>;trigger:UseFormTrigger<registerCollegeTypes>;errors:FieldErrors<registerCollegeTypes>;next:()=>void})=>{

    const isValid=async()=>{
        const isValid=await trigger(["collegeName","collegeEmail","website","phone","address","city","state"])
        console.log(isValid);
        if (!isValid) return ;
        next()
    }

    return (
      <section className="space-y-6 animate-fade-up">
        <div className="space-y-1.5">
          <h1 className="font-display text-display-lg">
            Tell us about your college
          </h1>
          <p className="text-body-md text-muted-foreground">
            This creates your college&rsquo;s public profile inside
            CampusConnect.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1.5 sm:col-span-2">
            <Label htmlFor="college-name">College name</Label>
            <InputField
              id="college-name"
              placeholder="Meridian State College"
              register={register}
              name="collegeName"
              errors={errors}
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="college-email">College email</Label>
            <InputField
              id="college-email"
              placeholder="admin@meridian.edu"
              register={register}
              name="collegeEmail"
              errors={errors}
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="website">Website</Label>
            <InputField
              id="website"
              placeholder="www.meridian.edu"
              register={register}
              name="website"
              errors={errors}
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="phone">Phone</Label>
            <InputField
              id="phone"
              placeholder="+91 (555) 000-0000"
              register={register}
              name="phone"
              errors={errors}
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="address">Address</Label>
            <InputField
              id="address"
              placeholder="500 Campus Drive"
              register={register}
              name="address"
              errors={errors}
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="city">City</Label>
            <InputField
              id="city"
              placeholder="Austin"
              register={register}
              name="city"
              errors={errors}
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="state">State</Label>
            <InputField
              id="state"
              placeholder="Texas"
              register={register}
              name="state"
              errors={errors}
            />
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <Link
            href="/signin"
            className="text-body-sm text-muted-foreground hover:text-foreground"
          >
            Already registered? Sign in
          </Link>
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
}

export default CollegeInfo