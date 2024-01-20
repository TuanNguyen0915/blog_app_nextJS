const Pagination = () => {
  return (
    <div className="flex w-full items-center justify-evenly">
      <button className="btn min-w-[150px] border-red-500 bg-red-500 text-white">
        Previous
      </button>
      <button className="btn min-w-[150px] border-red-500 bg-red-500 text-white">
        Next
      </button>
    </div>
  )
}

export default Pagination
