import MostCategories from "./MostCategories"
import MostPopular from "./MostPopular"

const Menu = () => {
  return (
    <div className="flex w-full flex-col gap-5">
      <p className="paraHover">What&#39;s hot</p>
      <h1 className="textTitle">Most Popular</h1>
      {/* POST INFO */}
      <div className="flex w-full flex-col gap-[3rem]">
        <MostPopular />
      </div>
      <p className="paraHover mt-[3rem]">Discover by Topic</p>
      <h1 className="textTitle">Most Popular</h1>
      <div className="flex w-full flex-col gap-[3rem]">
        <MostCategories />
      </div>
    </div>
  )
}

export default Menu
