"use client"
import AuthLink from "../authLink/AuthLink"

import NavLink from "./NavLink"

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  {
    name: "Contact",
    path: "/contact",
  },
]
const Links = ({ toggleMenuBar, setToggleMenuBar }) => {
  return (
    <div
      className={`${!toggleMenuBar ? "flex w-full items-center gap-10" : "flex w-full flex-col items-end justify-end gap-10"}`}
    >

      {links.map((link, idx) => (
        <NavLink key={idx} link={link} setToggleMenuBar={setToggleMenuBar} />
      ))}
      <AuthLink />
    </div>
  )
}

export default Links
