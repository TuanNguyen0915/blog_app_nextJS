"use client"
import NavLink from "./NavLink"


const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  {
    name: "Contact",
    path: "/contact",
  },
]
const Links = ({toggleMenuBar, setToggleMenuBar}) => {
  return <div className={`${!toggleMenuBar?'flex items-center gap-10':'w-full flex flex-col items-end justify-end gap-10'}`}>
    {links.map((link,idx)=> (
      <NavLink key={idx} link={link} setToggleMenuBar={setToggleMenuBar}/>
    ))}
  </div>
}

export default Links
