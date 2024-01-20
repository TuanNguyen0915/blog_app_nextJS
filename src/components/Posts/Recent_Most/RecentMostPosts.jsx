"use client"
import Menu from "@/components/Menu/Menu"
import CardPost from "../CardPost/CardPost"
import { motion } from "framer-motion"
import Pagination from "@/components/pagination/Pagination"

const slideFromLeftVariants = {
  initial: { x: -200, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { ease: "easeIn", duration: 0.75 },
}

const slideFromRightVariants = {
  initial: { x: 200, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { ease: "easeIn", duration: 0.75 },
}
const RecentMostPosts = () => {
  return (
    <>
      <motion.div
        className="flex w-full flex-col gap-5 md:w-[70%] "
        variants={slideFromLeftVariants}
        initial="initial"
        transition="transition"
        whileInView={"animate"}
        viewport={{ once: true }}
      >
        <h1 className="textTitle">Recent Posts</h1>
        <CardPost />
        <CardPost />
        <CardPost />
        <Pagination />
      </motion.div>
      {/* MENU */}
      <motion.div
        className="w-full md:w-[30%]"
        variants={slideFromRightVariants}
        initial="initial"
        transition="transition"
        whileInView={"animate"}
        viewport={{ once: true }}
      >
        <Menu />
      </motion.div>
    </>
  )
}

export default RecentMostPosts
