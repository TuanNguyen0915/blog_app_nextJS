import Image from "next/image"

const CardPost = () => {
  return (
    <div className="flex w-full flex-col items-center justify-between gap-10 md:flex-row">
      <div className="relative h-[400px] w-full">
        <Image
          src="https://images.unsplash.com/photo-1705612206536-6578da92c06c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          fill
          sizes="(max-height:500px)"
          className="object-contain"
        />
      </div>
      <div className="flex-rol w-full gap-10">
        <div className="flex items-center gap-5 md:mb-5 mb-2">
          <p>{new Date(Date.now()).toLocaleDateString()}</p>
          <p className="textLink uppercase">travel</p>
        </div>
        <p className="textTitle md:mb-5 mb-2">
          (Title) Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p className="paraHover hidden md:flex mb-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut dolore
          culpa sunt ipsum error magnam sint dolorem, voluptatem numquam
          distinctio, quia necessitatibus maiores nesciunt cupiditate alias nisi
          labore debitis? Reiciendis?
        </p>
        <button className="btn mb-10">Read More</button>
      </div>
    </div>
  )
}

export default CardPost
