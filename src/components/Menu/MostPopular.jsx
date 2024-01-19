
const MostPopular = () => {
  return (
    <>
        <div className="flex w-full flex-col gap-5">
          <p className="flexCenter w-1/5 rounded-xl bg-purple-500 p-1">
            Coding
          </p>
          <p className="paraHover">
            Lorem, ipsum eos quod, nisi soluta dignissimos maxime repudiandae
            cupiditate vitae
          </p>
          <p>
            Author{" "}
            <span className="text-slate-500">
              {new Date(Date.now()).toLocaleDateString()}
            </span>
          </p>
        </div>
        <div className="flex w-full flex-col gap-5">
          <p className="flexCenter w-1/5 rounded-xl bg-orange-400 p-1">
            Travel
          </p>
          <p className="paraHover">
            Lorem, ipsum eos quod, nisi soluta dignissimos maxime repudiandae
            cupiditate vitae
          </p>
          <p>
            Author{" "}
            <span className="text-slate-500">
              {new Date(Date.now()).toLocaleDateString()}
            </span>
          </p>
        </div>
        <div className="flex w-full flex-col gap-5">
          <p className="flexCenter w-1/5 rounded-xl bg-pink-300 p-1">
            Fashion
          </p>
          <p className="paraHover">
            Lorem, ipsum eos quod, nisi soluta dignissimos maxime repudiandae
            cupiditate vitae
          </p>
          <p>
            Author{" "}
            <span className="text-slate-500">
              {new Date(Date.now()).toLocaleDateString()}
            </span>
          </p>
        </div>
      </>
  )
}

export default MostPopular