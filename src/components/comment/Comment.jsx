const Comment = () => {
  return (
    <div className="flex w-full flex-col gap-5">
      <h1 className="textTitle">Comments</h1>
      <form className="flexCenter w-full gap-4">
        <input
          type="text"
          className="w-full rounded-md px-4 py-2 text-black opacity-70 focus:opacity-100 focus:outline-none"
          placeholder="write a comment ..."
        />
        <button className=" rounded-md bg-indigo-600 py-2 px-4 ">Send</button>
      </form>
    </div>
  )
}

export default Comment
