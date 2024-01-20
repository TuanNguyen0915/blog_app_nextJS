import Image from "next/image"
import Link from "next/link"
import React from "react"

const LoginPage = () => {
  return (
    <div className="flexCenter gap-5">
      <form className="flex w-full flex-col items-center justify-center gap-5 rounded-lg bg-white/5 p-4 backdrop-blur-sm md:w-1/2">
        <h1 className="textTitle text-4xl mb-10">Login</h1>
        <input
          type="email"
          placeholder="Email"
          className=" w-full rounded-md p-2 text-gray-800 opacity-80 transition duration-300 ease-linear md:w-3/4 focus:opacity-100 focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className=" w-full rounded-md p-2 text-gray-800 opacity-80 transition duration-300 ease-linear md:w-3/4 focus:opacity-100 focus:outline-none"
        />
        <p className="textLink w-full text-end md:w-3/4">Forgot password?</p>
        <button className="btn w-1/2 rounded-3xl border-[#4e46e5] bg-[#4e46e5] text-lg opacity-80 hover:opacity-100 ">
          LOGIN
        </button>
        <p className="mt-10 text-slate-300 font-semibold">Or Sign Up Using</p>
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
        <p className="mt-10 text-slate-300 font-semibold">Or Sign Up Using</p>
        <Link href='/signup'><p className="w-full text-center text-xl textLink">SIGN UP</p></Link>
      </form>
    </div>
  )
}

export default LoginPage
