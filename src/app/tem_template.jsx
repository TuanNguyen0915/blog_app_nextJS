"use client"
import { motion } from "framer-motion"
const template = ({children}) => {
  return <motion.div
  initial={{y:200, opacity:0}}
  animate={{y:0, opacity:1}}
  transition={{ease:"easeIn", duration:0.75}}
  >{children}</motion.div>
}

export default template
