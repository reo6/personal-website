function Boxes() {
  return <>
    <div className="text-center grid grid-cols-1 gap-4 sm:grid-cols-2 mt-10 mx-10">
      <div className="p-20 border-custom-pri border rounded-md hover:bg-custom-pri transition duration-200 text-xl cursor-pointer">Blog</div>
      <div className="p-20 border-custom-pri border rounded-md hover:bg-custom-pri transition duration-200 text-xl cursor-pointer">Projects</div>
      <div className="p-20 border-custom-pri border rounded-md hover:bg-custom-pri transition duration-200 text-xl cursor-pointer">About</div>
      <div className="p-20 border-custom-pri border rounded-md hover:bg-custom-pri transition duration-200 text-xl cursor-pointer">Reach Out</div>
    </div>
  </>
}

function LatestPosts() {
  return <div className="h-full flex flex-col items-center justify-center">
    <i>No latest blog posts were found.</i>
  </div>
}

export default function Home() {
  return (
    <main className="h-full text-center flex flex-col">
      <div className="text-center text-6xl font-bold mt-8 font-pacifico justify-self-start">Hi, I&apos;m <a href="/about" className="text-custom-pri">Emre</a>.</div>
      
      <LatestPosts/>
    </main>
  )
}

