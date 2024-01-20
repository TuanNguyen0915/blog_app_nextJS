"use client"
import Image from "next/image"
import React from "react"
import { motion } from "framer-motion"
import PopulateCategories from "./PopulateCategories"
import HeroImage from "./HeroImage"
const Hero = () => {
  return (
    <header className="mt-[5rem] flex w-full flex-col items-center justify-center gap-4 md:mt-0">
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeIn", duration: 0.75 }}
      >
        <div className="flex w-full flex-col md:flex-row md:items-center">
          <h1 className="text-4xl">
            Hey, <span className="textLink text-7xl font-bold">Tuan</span> here!
          </h1>
          <p className="text-end text-3xl md:translate-y-16">
            My gateway to ideas, tips, and stories of everyday living.
          </p>
        </div>
      </motion.div>
      <div className="flex w-full flex-col md:mt-[5rem] md:w-3/4 md:flex-row md:items-center md:gap-5">
        <HeroImage />
      </div>
      {/* IMAGE */}
      {/* CATEGORY */}
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeIn", duration: 0.75 }}
        className="w-full flexCenter"
      >
        <PopulateCategories />
      </motion.div>
    </header>
  )
}

export default Hero
