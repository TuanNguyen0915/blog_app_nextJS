import Image from "next/image"
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa"
const Footer = () => {
  return (
    <div className="mt-10 flex w-full justify-between flex-col md:flex-row gap-[4rem] border-t pt-4 border-slate-500">
      <div className="flex md:w-[40%] w-full flex-col gap-5">
        <div className="flex items-center gap-2">
          <div className="relative h-[80px] w-[80px] rounded-lg">
            <Image
              src="/my_pic.jpeg"
              alt="my-pic"
              fill
              className="rounded-full object-cover"
            />
          </div>
          <h1 className="textTitle">Tuan Nguyen</h1>
        </div>
        <p className="paraHover">
          I&#39;m a full-stack software engineer who enjoys building apps for
          accessible and intuitive design to give users the best and simplest
          way solutions.
        </p>
        <div className="flex gap-5">
          <FaFacebook
            size={25}
            className="transition duration-300 ease-in hover:scale-125"
          />
          <FaGithub
            size={25}
            className="transition duration-300 ease-in hover:scale-125"
          />
          <FaLinkedin
            size={25}
            className="transition duration-300 ease-in hover:scale-125"
          />
        </div>
      </div>
      <div className="flex md:w-1/3 w-full md:justify-end">
        <div className="flex w-full flex-col">
          <p className="text-lg font-bold">Links</p>
          <p className="textLink">HomePage</p>
          <p className="textLink">Blog</p>
          <p className="textLink">About</p>
          <p className="textLink">Contact</p>
        </div>
        <div className="flex w-full flex-col">
          <p className="text-lg font-bold">Social</p>
          <p className="textLink">Facebook</p>
          <p className="textLink">Youtube</p>
          <p className="textLink">Tiktok</p>
          <p className="textLink">Instagram</p>
        </div>
        <div className="flex w-full flex-col">
          <p className="text-lg font-bold">Tags</p>
          <p className="textLink">Coding</p>
          <p className="textLink">Travel</p>
          <p className="textLink">Style</p>
          <p className="textLink">Fashion</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
