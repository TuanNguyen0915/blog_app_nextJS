import Link from "next/link"

const AuthLink = ({ setToggleMenuBar }) => {
  // testing
  const isAuth = false
  const handleClick = () => {
    if (setToggleMenuBar) setToggleMenuBar(false)
  }
  return (
    <>
      {isAuth ? (
        <div className="flex w-full items-center justify-between gap-4">
          <button className="btn min-w-[100px]" onClick={handleClick}>
            New Post
          </button>
          <button className="btn min-w-[100px]" onClick={handleClick}>
            Logout
          </button>
        </div>
      ) : (
        <div className="flex items-center justify-end gap-4">
          <Link href="/login">
            <button className="btn min-w-[100px]" onClick={handleClick}>
              LogIn
            </button>
          </Link>
        </div>
      )}
    </>
  )
}

export default AuthLink
