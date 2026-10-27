"use client"
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="text-2xl">Welcome to Next.js </h1>
      <h1>Welcome to the Next.js</h1>
      <Link href="/about" className="underline text-blue-600">
        About
      </Link>
      <Link href="/register-college" className="underline text-blue-600">
        register
      </Link>
      <Link href="/signin" className="underline text-blue-600">
        register
      </Link>
    </div>
  );
};

export default page;
