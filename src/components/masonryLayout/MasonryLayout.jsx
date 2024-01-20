'use client'
import Masonry from "react-masonry-css"
import Image from "next/image";

const breakpointObj = {
  default: 4,
  3000: 6,
  2000: 5,
  1200: 3,
  1000: 2,
  500: 1,
};

const MasonryLayout = ({images}) => {
  return (
    <Masonry
    className="my-5 flex gap-10  md:mt-10"
    breakpointCols={breakpointObj}
    >
      {images.map((image,idx)=>(
        <div key={idx}>
          <p>{idx}</p>
          <Image src={image.url} width={1000} height={1000} alt="" className="object-contain rounded-md"/>
        </div>
      ))}
    </Masonry>
  )
}

export default MasonryLayout