"use client"
import Image from "next/image"
import React from "react"
import { motion } from "framer-motion"
const HeroImage = () => {
  return (
    <>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeIn", duration: 0.75 }}
        className="relative flex h-[500px] w-full items-center justify-end"
      >
        <Image
          src="https://images.unsplash.com/photo-1543958892-44b098374a87?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          fill
          sizes="(max-height:500px)"
          alt=""
          className="object-contain"
        />
      </motion.div>
      {/* IMAGE INFO */}
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeIn", duration: 0.75 }}
        className="flex w-3/4 flex-col gap-5"
      >
        <p className="textTitle">person holding ball</p>
        {/* AUTHOR */}
        <div className="flex w-full items-center gap-5">
          <div className="relative w-[50px] h-[50px] rounded-full">
            <Image
              alt=""
              fill
              sizes="(max-height:500px)"
              src="https://images.unsplash.com/photo-1663893364107-a6ecd06cf615?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="rounded-full object-cover"
            />
          </div>

          <div className="flex flex-col">
            <p className="textLink">TuanNG</p>
            <p className="textPara">{new Date(Date.now()).toDateString()}</p>
          </div>
        </div>
        <p className="paraHover">
          She patiently waited for his number to be called. She had no desire to
          be there, but her mom had insisted that she go. She&#39;s resisted at
          first, but over time she realized it was simply easier to appease her
          and go. Mom tended to be that way. She would keep insisting until you
          wore down and did what she wanted. So, here she sat, patiently waiting
          for her number to be called.
        </p>
        <button type="button" className="btn btn-read-more w-1/2">
          Read More
        </button>
      </motion.div>
    </>
  )
}

export default HeroImage
