"use client"

import MasonryLayout from "@/components/masonryLayout/MasonryLayout"
import React from "react"

const BlogPage = () => {
  const data = [
    {
      url: "https://images.unsplash.com/photo-1682686581498-5e85c7228119?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      author: 'T1', desc: 'test1'
    },
    {
      url: "https://images.unsplash.com/photo-1705630547844-29adf8323f28?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      author: 't2', desc: 'test2'

    },
    {
      url: "https://images.unsplash.com/photo-1705648373513-4a886ddb7636?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      author: 't3', desc: 'test3'
    },
    {
      url: "https://images.unsplash.com/photo-1705607984977-9057bb5fa8e2?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      author: 't4', desc: 'test3'
    },
    {
      url: "https://images.unsplash.com/photo-1682687220305-ce8a9ab237b1?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      author: 't5', desc: 'test3'
    },
    {
      url: "https://images.unsplash.com/photo-1705321963943-de94bb3f0dd3?q=80&w=2844&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      author: 't6', desc: 'test3'
    },
    {
      url: "https://images.unsplash.com/photo-1705684989920-2ae5e583c0e7?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      author: 't34', desc: 'test3'
    },
  ]
  return <MasonryLayout images={data} />
}

export default BlogPage
