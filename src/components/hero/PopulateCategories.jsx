"use state"
import React from "react"
import { motion } from "framer-motion"

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.5,
    },
  },
}

const categories = [
  { name: "fashion", color: "rgb(236,72, 153)" },
  { name: "food", color: "rgb(84, 197, 54)" },
  { name: "travel", color: "rgb(180, 83, 9)" },
  { name: "culture", color: "rgb(120, 53, 15)" },
  { name: "coding", color: "rgb(79, 70, 229)" },
  { name: "style", color: "rgb(8, 145,178)" },
]

const PopulateCategories = () => {
  return (
    <div className="mt-0 flex w-full flex-col gap-4 md:mt-[10rem]">
      <motion.h1
        className="mb-2 text-2xl"
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView={"animate"}
        viewport={{ once: true }}
      >
        Popular Categories
      </motion.h1>
      <motion.div
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView={"animate"}
        viewport={{ once: true }}
        className="flex w-full flex-wrap items-center justify-center gap-4 md:justify-between"
      >
        {categories.map((cate, index) => (
          <button
            type="button"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView={"animate"}
            key={index}
            className="flexCenter min-w-[150px] rounded-lg p-2 opacity-70 transition duration-300 ease-in hover:border-white hover:opacity-100"
            style={{
              backgroundColor: cate.color,
              border: `1px solid ${cate.color}`
            }}
          >
            {cate.name}
          </button>
        ))}
      </motion.div>
    </div>
  )
}

export default PopulateCategories
