const AuthLink = () => {
  // testing
  const isAuth = true
  return (
    <>
      {isAuth ? (
        <div className="flex w-full items-center justify-between gap-4">
          <button className="btn min-w-[100px]">New Post</button>
          <button className="btn min-w-[100px]">Logout</button>
        </div>
      ) : (
        <div className="flex items-center justify-end gap-4">
          <button className="btn min-w-[100px]">LogIn</button>
        </div>
      )}
    </>
  )
}

export default AuthLink
