"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation"

export default function Nav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="p-5 lg:px-[5vw] lg:py-12 flex justify-between items-center">
      <div className="flex items-center gap-[3.33vw]">
        <Link href="/">
          <Image 
            src="/img/logo.svg"
            alt="home"
            width="150"
            height="42"
            className="lg:w-[12.5vw]"
          />
        </Link>
        <div className="hidden lg:flex gap-[1.4583vw] font-semibold" style={{ fontSize: 'clamp(20px, calc(1rem + 0.2vw), 24px)'}}>
          <Link href="/" style={{ color: pathname === '/' && '#EF7206' }}>Home</Link>
          <Link href="/about" style={{ color: pathname === '/about' && '#EF7206' }}>About</Link>
          <Link href="/vertigo" style={{ color: pathname === '/vertigo' && '#EF7206' }}>Vertigo</Link>
          <Link href="/balance" style={{ color: pathname === '/balance' && '#EF7206' }}>Balance</Link>
          <Link href="/core" style={{ color: pathname === '/core' && '#EF7206' }}>Core</Link>
          <Link href="/blog" style={{ color: pathname === '/blog' && '#EF7206' }}>Blog</Link>
          <Link href="/contact" style={{ color: pathname === '/contact' && '#EF7206' }}>Contact</Link>
        </div>
      </div>
      <Link 
        href="/contact"
        className="hidden lg:inline border border-[#EF7206] text-[#EF7206] hover:bg-[#EF7206] hover:text-white rounded-full px-[1.5vw] py-[0.6em] text-[clamp(18px,_calc(1rem_+_0.15vw),_22px)] font-semibold text-center"
      >
        Book a consultation
      </Link>
      <button
        onClick={() => setOpen(!open)}
        className="lg:hidden"
      >
        <Image 
          src="/img/icon_hamburger.svg"
          alt="menu"
          width="36"
          height="24"
        />
      </button>
      {open && (
        <div className="absolute lg:hidden bg-white left-0 top-0 p-5 w-4/5 h-screen shadow flex flex-col gap-8 font-semibold text-xl">
          <Link href="/" onClick={() => setOpen(false)}>
            <Image 
              src="/img/logo.svg"
              alt="home"
              width="150"
              height="42"
            />
          </Link>
          <Link 
            href="/" 
            onClick={() => setOpen(false)}
            style={{ color: pathname === '/' && '#EF7206' }}
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setOpen(false)}
            style={{ color: pathname === '/about' && '#EF7206' }}
          >
            About
          </Link>
          <Link 
            href="/vertigo"
            onClick={() => setOpen(false)} 
            style={{ color: pathname === '/vertigo' && '#EF7206' }}
          >
            Vertigo
          </Link>
          <Link 
            href="/balance"
            onClick={() => setOpen(false)} 
            style={{ color: pathname === '/balance' && '#EF7206' }}
          >
            Balance
          </Link>
          <Link 
            href="/core"
            onClick={() => setOpen(false)} 
            style={{ color: pathname === '/core' && '#EF7206' }}
          >
            Core
          </Link>
          <Link 
            href="/blog"
            onClick={() => setOpen(false)} 
            style={{ color: pathname === '/blog' && '#EF7206' }}
          >
            Blog
          </Link>
          <Link 
            href="/contact"
            onClick={() => setOpen(false)} 
            style={{ color: pathname === '/contact' && '#EF7206' }}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  )
}
