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

const PROJECTS = [
  {
    id: 1,
    title: "foss505",
    description: "A fully digital loop station built especially for live performing. A Boss rc505 alternative.",
    url: "https://github.com/reo6/foss505",
  },
  {
    id: 2,
    title: "rdmachine",
    description: "Experimental drum machine written in Rust, Gtk.",
    url: "https://github.com/reo6/rdmachine",
  },
  {
    id: 3,
    title: "haskellutions",
    description: " Haskell solutions for the problems of various platforms like Codewars, Project Euler etc. ",
    url: "https://github.com/reo6/haskellutions",
  },
  {
    id: 4,
    title: "steering-wheel",
    description: "A gaming steering wheel project built with Python and Arduino.",
    url: "https://github.com/reo6/steering-wheel",
  },
  {
    id: 5,
    title: "rpaste",
    description: "Simple pastebin application written in Flask.",
    url: "https://github.com/reo6/rpaste",
  },
  {
    id: 6,
    title: "Functional Programming, the Hard Way",
    description: "An introduction to the paradigm of functional programming for beginners.",
    url: "https://reoco.de/functional-programming-the-hard-way/",
  },

]


function ProjectCard({ title, description, url }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="block h-full">
      <div className="shadow-lg rounded-lg p-4 bg-custom-sec transition duration-200 text-white h-full flex flex-col">
        <div className="flex-grow">
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-gray-300">{description}</p>
        </div>
      </div>
    </a>
  );
};

function Projects() {
  return (
    <div className="container mx-auto p-4 h-full flex flex-col justify-center align-center mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {PROJECTS.map((card) => (
          <ProjectCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="h-full text-center flex flex-col">
      <div className="text-center text-6xl font-bold mt-8 font-pacifico justify-self-start">Hi, I&apos;m <a href="/about" className="text-custom-pri">Emre</a>.</div>
      
      <Projects/>
    </main>
  )
}

