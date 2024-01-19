"use state"
import React from "react"
import { animate, motion } from "framer-motion"

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  transition: {
    duration: 0.75, ease: "easeIn"
  }
}
const PopulateCategories = () => {
  return (
    <motion.div
    variants={fadeInAnimationVariants}
    initial="initial"
    transition="transition"
    whileInView={"animate"}
    className="mt-0 flex w-full flex-col gap-4 md:mt-[10rem]">
      <h1 className="mb-2 text-2xl">Popular Categories</h1>
      <div className="flex w-full flex-wrap items-center md:justify-between justify-center gap-4">
        <div className=" btn bg-style border-style flexCenter md:w-[150px] w-4/5 ">
          Style
        </div>
        <div className=" btn bg-fashion border-fashion flexCenter md:w-[150px] w-4/5 ">
          Fashion
        </div>
        <div className=" btn bg-food border-food flexCenter md:w-[150px] w-4/5 ">
          Food
        </div>
        <div className=" btn bg-travel border-travel flexCenter md:w-[150px] w-4/5 ">
          Travel
        </div>
        <div className=" btn bg-culture border-culture flexCenter md:w-[150px] w-4/5 ">
          Culture
        </div>
        <div className=" btn bg-coding border-coding flexCenter md:w-[150px] w-4/5 ">
          Coding
        </div>
      </div>
    </motion.div>
  )
}

export default PopulateCategories
