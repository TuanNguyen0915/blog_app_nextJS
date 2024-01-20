"use client"

import Menu from "@/components/Menu/Menu"
import Comment from "@/components/comment/Comment"
import Image from "next/image"
import { useParams } from "next/navigation"

const PostDetails = () => {
  const params = useParams()

  return (
    <div className="flex w-full flex-col gap-10">
      <div className="flex w-full justify-between gap-10">
        <div className="w-full flex flex-col gap-[2rem]">
          <p className="text-4xl">person holding ball. This is {params.postId}</p>
          <p>
            Desc ==&gt; Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Adipisci autem eum, quaerat fuga, sed sapiente deserunt dolores
            aspernatur ullam nemo ducimus beatae earum sunt? Mollitia
            reprehenderit dolorem deleniti fuga dignissimos.
          </p>
          <div className="flex w-full items-center gap-5">
            <div className="relative h-[50px] w-[50px] rounded-full">
              <Image
                alt=""
                fill
                sizes="(max-height:500px)"
                src="https://images.unsplash.com/photo-1663893364107-a6ecd06cf615?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="rounded-full object-cover"
              />
            </div>

            <div className="flex flex-col">
              <p className="textLink">TuanNG</p>
              <p className="textPara">{new Date(Date.now()).toDateString()}</p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <Image
            src="https://images.unsplash.com/photo-1543958892-44b098374a87?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={1000}
            height={1000}
            alt=""
            className="rounded-lg object-contain"
          />
        </div>
      </div>
      <div className="flex w-full justify-between gap-[2rem]">
        <div className="w-[60%] flex flex-col gap-5">
        <Comment />

        </div>
        <div className="w-1/3">
          <Menu />
        </div>
      </div>
    </div>
  )
}

export default PostDetails
