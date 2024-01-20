import Image from "next/image"
import Link from "next/link"
import React from "react"

const SignUpPage = () => {
  return (
    <div className="flexCenter gap-5">
      <form className="flex w-full flex-col items-center justify-center gap-5 rounded-lg bg-white/5 p-4 backdrop-blur-sm md:w-1/2">
        <h1 className="textTitle text-4xl mb-10">Sign Up</h1>
        <input
          type="text"
          placeholder="Name"
          className=" w-full rounded-md p-2 text-gray-800 md:w-3/4 opacity-80 transition duration-300 ease-linear focus:opacity-100 focus:outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          className=" w-full rounded-md p-2 text-gray-800 md:w-3/4 opacity-80 transition duration-300 ease-linear focus:opacity-100 focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className=" w-full rounded-md p-2 text-gray-800 md:w-3/4 opacity-80 transition duration-300 ease-linear focus:opacity-100 focus:outline-none"
        />
        <p className="w-full text-end md:w-3/4">
          Do you have an account?{" "}
          <span className="textLink ml-2">
            <Link href="/login">LogIn</Link>
          </span>
        </p>
        <button className="btn w-1/2 rounded-3xl border-[#4e46e5] bg-[#4e46e5] text-lg opacity-80 hover:opacity-100 ">
          LOGIN
        </button>
        <p className="mt-10 font-semibold text-slate-300">Or Sign Up Using</p>
        <div className="flexCenter w-full gap-5">
          <Image
            src="/google.png"
            width={50}
            height={50}
            alt=""
            className="transition duration-500 hover:scale-125"
          />
          <Image
            src="/linkedin.png"
            width={50}
            height={50}
            alt=""
            className="transition duration-500 hover:scale-125"
          />
          <Image
            src="/facebook.png"
            width={50}
            height={50}
            alt=""
            className="transition duration-500 hover:scale-125"
          />
          <Image
            src="/github.png"
            width={50}
            height={50}
            alt=""
            className="transition duration-500 hover:scale-125"
          />
        </div>
      </form>
    </div>
  )
}

export default SignUpPage
