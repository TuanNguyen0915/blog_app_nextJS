"use client"
import Link from "next/link";
import { RingLoader } from "react-spinners";

const NotFound = () => {
  return (
    <div className="mt-10 flex h-[600px] w-full flex-col items-center justify-center gap-10">
      <RingLoader color="#36d7b7" size={100} speedMultiplier={0.5}/>
      <h1 className="w-full text-center">
        Sorry, the page you are looking for doest not exists.
      </h1>
      <Link href="/" className="textLink">
        Back HomePage
      </Link>
    </div>
  );
};

export default NotFound;
