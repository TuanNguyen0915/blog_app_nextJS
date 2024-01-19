import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavLink = ({link, setToggleMenuBar}) => {
  const pathName = usePathname()
  const isActive = "text-blue-500"

  const handleClick= () => {
    if(setToggleMenuBar) setToggleMenuBar(false)
  }
  return (
    <Link href={link.path}
    className={`${pathName === link.path?isActive: ''} font-semibold hover:text-blue-300 transition duration-500 ease-in`}
    onClick={handleClick}
    >
    {link.name}</Link>
  )
}

export default NavLink