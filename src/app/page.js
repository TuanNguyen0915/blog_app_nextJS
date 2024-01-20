import Menu from "@/components/Menu/Menu"
import CardPost from "@/components/Posts/CardPost/CardPost"
import RecentMostPosts from "@/components/Posts/Recent_Most/RecentMostPosts"
import Hero from "@/components/hero/Hero"

export default function Home() {
  return (
    <main className="w-full gap-10 mt-10">
      <Hero />
      {/* RECENT POST_MOST */}
      <div className="mt-[5rem] flex w-full gap-[4rem] md:flex-row flex-col ">
        <RecentMostPosts />
      </div>
    </main>
  )
}
