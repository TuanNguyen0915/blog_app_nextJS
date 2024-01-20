"use client"

import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa"
import { CiMenuFries } from "react-icons/ci"
import { IoIosCloseCircleOutline } from "react-icons/io"

import Links from "./Links"
import { useState } from "react"

const Navbar = () => {
  const [toggleMenuBar, setToggleMenuBar] = useState(false)

  return (
    <div className="flexCenter mb-10 h-[50px] w-full justify-between border-b border-slate-500 pb-4">
      {/* DESKTOP VIEW */}
      <div className="hidden w-full items-center gap-4 md:flex">
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
      <div
        className={`${toggleMenuBar ? "hidden" : "flex"} w-full items-center text-3xl font-bold text-blue-400 md:justify-center`}
      >
        TuanNG
      </div>
      <div className="hidden w-full items-center justify-end gap-2 md:flex">
        <Links />
      </div>

      <div className={`flex items-center justify-end md:hidden`}>
        <CiMenuFries
          size={40}
          className={`${toggleMenuBar ? "hidden" : ""}`}
          onClick={() => setToggleMenuBar(true)}
        />
      </div>
      {/* MOBILE VIEW */}
      {toggleMenuBar && (
        <div className="fixed right-0 top-0 z-50 h-screen w-2/3 animate-slide-in overflow-y-auto rounded-s-lg bg-[#4D516D]">
          <div className="paraHover p-4">
            <IoIosCloseCircleOutline
              size={40}
              onClick={() => setToggleMenuBar(false)}
            />
          </div>
          <div className="flex flex-col justify-end gap-10 pl-5 pr-10">
            <div className="flex w-full items-center justify-between">
              <p className=" text-end text-3xl font-bold text-blue-500">
                TuanNG
              </p>
            </div>
            <div className="flex-end flex items-center justify-end gap-10">
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
            <div className="w-full">
              <Links
                toggleMenuBar={toggleMenuBar}
                setToggleMenuBar={setToggleMenuBar}
              />
            </div>
          </div>
          {/* NavLink */}
        </div>
      )}
    </div>
  )
}

export default Navbar
