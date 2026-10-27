"use client"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

import { FcGoogle } from "react-icons/fc";
import { AuthRegistryPanel } from "@/components/shared/auth-registery-panel";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInCollegeSchema, signInCollegeTypes } from "../schemas/signin-college";
import { useForm } from "react-hook-form";

export default function SignInPage() {

  const {register,trigger,formState,handleSubmit} =useForm<signInCollegeTypes>({mode:"all",resolver:zodResolver(signInCollegeSchema),defaultValues:{
    collegeEmail:"",
    password_hash:""
  }})

  const errors=formState.errors;

  const isValid=async()=>{
    const isValid=await trigger(["collegeEmail","password_hash"]);
    if (!isValid) return;
  }

  const onSubmit=(data:signInCollegeTypes)=>{
    console.log(data);
  }

  return (
    <div className="flex min-h-screen">
      <AuthRegistryPanel />

      <div className="flex flex-1 items-center justify-center px-6 py-12">
        <div className="w-full max-w-sm space-y-8">
          <div className="flex items-center gap-2 lg:hidden mb-8">
            <div className="h-7 w-7 rounded-md bg-primary flex items-center justify-center text-primary-foreground font-display font-semibold text-caption">
              CC
            </div>
            <span className="font-display font-semibold text-body-md">
              CampusConnect
            </span>
          </div>

          <Button variant="outline" size="lg" className="w-full gap-2.5">
            <FcGoogle className="h-5 w-5" />
            Continue with Google
          </Button>

          <div className="flex items-center gap-3">
            <Separator className="flex-1" />
            <span className="text-caption text-muted-foreground">
              or sign in with email
            </span>
            <Separator className="flex-1" />
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="email">College email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@college.edu"
                autoComplete="email"
                {...register("collegeEmail")}
              />
              {errors.collegeEmail && (
                <p className="text-red-600 text-sm">
                  {errors.collegeEmail.message}
                </p>
              )}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="**********"
                autoComplete="current-password"
                {...register("password_hash")}
              />
              {errors.password_hash && (
                <p className="text-red-600 text-sm">
                  {errors.password_hash.message}
                </p>
              )}
            </div>

            <div className="flex items-center justify-end">
              <Link
                href="#"
                className="text-caption text-primary hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label
                htmlFor="remember"
                className="font-normal text-muted-foreground"
              >
                Remember me for 30 days
              </Label>
            </div>

            <Button
              type="submit"
              size="lg"
              onClick={isValid}
              className="w-full text-primary-foreground"
            >
              <Link href="">signIn</Link>
              {/* <Link href="/about">about</Link> */}
            </Button>
          </form>

          <p className="text-center text-body-sm text-muted-foreground">
            New to CampusConnect?
            <Link
              href="/register-college"
              className="text-primary font-medium hover:underline"
            >
              Register your college
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}




