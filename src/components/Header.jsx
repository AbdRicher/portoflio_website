"use client"

import React, { useState,useEffect } from 'react'
import Container from './Container'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


import {
  HomeIcon,
  UserIcon,
  Squares2X2Icon,
  PhoneIcon,
  SunIcon,
} from '@heroicons/react/24/outline';


export default function Header() {

  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

// bg-gradient-to-b from-black/80 to-transparent 

// bg-gradient-to-b from-black/80 to-transparent 

  return (
 <header
  className={`sticky top-0 z-50 transition-all duration-300 bg-black ${
    scrolled ? 'bg-transparent py-1 ' 
             : ' bg-black py-2'
  }`}
>

     <Container classname={`max-w-7xl mx-auto w-full px-10 py-4 bg-transparent text-white flex flex-row
      ${
    scrolled ? 'bg-black py-2 ' 
             : ' bg-transparent  py-4'
     }`}>
    
     <div className="max-w-7xl mx-auto w-full px-10 text-white flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <Image
            src="/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="invert"
          />
          <span className="font-poppins text-xl">Abdullah</span>
        </div>

        {/* Navigation */}
        <nav className="flex items-center bg-black rounded-full px-1 py-0.5 shadow-md border border-(--font_color)">
          {/* Home Icon */}
          <Link
            href="/"
            className={`p-2 rounded-full hover:bg-zinc-800 transition ${
              isActive('/') ? 'bg-zinc-800 text-white' : 'text-zinc-400'
            }`}
          >
            <HomeIcon className="h-5 w-5" />
          </Link>

          <div className="w-[1px] h-5 bg-zinc-700 mx-2" />

          {/* Nav Items */}
          {[
            { href: '/about', label: 'About', icon: <UserIcon className="h-5 w-5 mr-1" /> },
            { href: '/projects', label: 'Work', icon: <Squares2X2Icon className="h-5 w-5 mr-1" /> },
            { href: '/contact', label: 'Contact', icon: <PhoneIcon className="h-5 w-5 mr-1" /> },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center px-3 py-2 gap-2 rounded-full transition ${
                isActive(item.href)
                  ? 'bg-zinc-800 text-white'
                  : 'text-zinc-400 hover:bg-zinc-800'
              }`}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}

          {/* Theme Toggle Button (Placeholder) */}
          <button className="ml-2 p-2 border border-white rounded-full hover:bg-zinc-800 transition">
            <SunIcon className="h-5 w-5" />
          </button>
        </nav>
         <div></div>
      </div>
     
     </Container>
    </header>
  )
}
