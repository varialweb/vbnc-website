// import '../styles/global.css';
// 'use client'
import "../styles/globals.css"
import { Raleway } from '@next/font/google'
import Image from "next/image"
import Link from "next/link"
import Nav from "./nav"
// import { usePathname } from "next/navigation"


const raleway = Raleway({ subsets: ["latin"] })

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={raleway.className}>
      <head>
        <link rel="icon" href="/icon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="grid grid-rows-[auto_1fr_auto] min-h-screen max-w-screen w-screen overflow-x-hidden">
      {/* <body className="w-screen"> */}
        <Nav />
        <div>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}

// function Nav() {
//   const pathname = usePathname()

//   // // console.log('router', pathname)
//   // console.log('hello world')


//   return (
//     <nav className="px-[5vw] py-12 flex justify-between items-center">
//       <div className="flex gap-[3.33vw] items-center">
//         <Image src="/img/logo.svg" alt="home" width="286" height="80" className="w-[15vw]" />
//         <div className="flex gap-[1.66vw] font-semibold" style={{ fontSize: 'clamp(20px, calc(1rem + 0.2vw), 24px)'}}>
//           <Link href="/" style={{ color: pathname === '/' && '#EF7206' }}>Home</Link>
//           <Link href="/about" style={{ color: pathname === '/about' && '#EF7206' }}>About</Link>
//           <Link href="/vertigo" style={{ color: pathname === '/vertigo' && '#EF7206' }}>Vertigo</Link>
//           <Link href="/balance" style={{ color: pathname === '/balance' && '#EF7206' }}>Balance</Link>
//           <Link href="/core" style={{ color: pathname === '/core' && '#EF7206' }}>Core</Link>
//           <Link href="/blog" style={{ color: pathname === '/blog' && '#EF7206' }}>Blog</Link>
//           <Link href="/contact" style={{ color: pathname === '/contact' && '#EF7206' }}>Contact</Link>
//         </div>
//       </div>
//       <Link href="/contact" className="border border-[#EF7206] text-[#EF7206] hover:bg-[#EF7206] hover:text-white rounded-full px-[2.25em] py-[0.6em] text-[clamp(20px,_calc(1rem_+_0.2vw),_24px)] font-semibold">Book a consultation</Link>
//     </nav>
//   )
// }

function Footer() {
  const now = new Date()
  
  return (
    <footer className="bg-[#4E565F] text-white grid justify-center py-10 px-5 gap-10 lg:pt-9 lg:pb-[72px] lg:gap-16">
      <address className="text-center not-italic">
        <p>VBNC Physical Therapy</p>
        <Link href="tel:(360) 915-7369">(360) 915-7369</Link>
        <p>4770 Yelm Hwy SE</p>
        <p>Lacey, WA 98503</p>
      </address>
      <p>©{now.getFullYear()} VBNC Physical Therapy, LLC <span className="hidden lg:inline">|</span><br className="lg:hidden" /> Created by <Link href="https://www.varial.dev" className="text-[#7EB9EE]">Varial Web Development</Link></p>
    </footer>
  )
}
