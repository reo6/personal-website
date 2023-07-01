import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'reo',
  description: 'reo\'s personal website.',
  // icons: {
  //   icon: "/favicon.png",
  // },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='dark'>
      <body className="flex flex-col justify-between h-screen container mx-auto">
        <nav className="align-top flex items-center justify-between bg-custom-sec text-white p-4">
          <ul className="flex space-x-4">
            <li><Link href="/blog" className="hover:text-custom-pri">Blog</Link></li>
            <li><Link href="https://github.com/reo6" target='_blank' className="hover:text-custom-pri">Projects</Link></li>
          </ul>
          <div className="flex items-center space-x-4 select-none">
            <span className="text-5xl font-bold font-pacifico"><Link href="/" className="hover:text-custom-pri">reo</Link></span>
          </div>
          <ul className="flex space-x-4">
            <li><Link href="/about" className="hover:text-custom-pri">About</Link></li>
            <li><Link href="/reach" className="hover:text-custom-pri">Reach Out</Link></li>
          </ul>
        </nav>
        {children}
        <nav className="align-bottom flex items-center justify-between text-center bg-custom-sec text-white p-4">
          Work in progress.
        </nav>
      </body>
    </html>
  )
}
