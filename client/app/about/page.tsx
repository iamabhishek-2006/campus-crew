import Link from 'next/link';
import React from 'react'

const page = () => {
  return (
    <div className='flex gap-5'>
      <Link href="/about" className="underline text-blue-600">
        About
      </Link>
      <Link href="/register-college" className="underline text-blue-600">
        register-college
      </Link>
      <Link href="/signin" className="underline text-blue-600">
        login
      </Link>
    </div>
  );
}

export default page