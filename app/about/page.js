import Link from "next/link"

export const metadata = {
  title: 'about - reo',
  description: 'reo\'s personal website.',
}

export default function AboutPage() {
    return (
      <main className="h-full m-10">
        <p className="text-xl">
          I&apos;m Emre, a programmer and more recently, a musician and artist.
          I create computer programs, make music, or <Link href="https://github.com/reo6/foss505" className="hover:text-custom-pri">both at the same time.</Link>
        </p>
        <p className="text-xl mt-5">
          Learn more about me in
           my <Link href="/reach" className="hover:text-custom-pri underline">reach out</Link> page.
        </p>
      </main>
    )
  }
  
  