"use client"

import React, { useState,useEffect } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


import {
   HomeIcon, 
  UserIcon, 
  Squares2X2Icon, 
  PhoneIcon, 
  SunIcon,
  Bars3Icon,
  XMarkIcon 
} from '@heroicons/react/24/outline';


export default function Header() {

  const [scrolled, setScrolled] = useState(false);
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
  <header className={`flex justify-center items-center sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/90 backdrop-blur-sm py-2' : 'bg-black py-4'
    }`}>
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Image
              src="/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="invert"
            />
            <span className="font-poppins text-lg sm:text-xl">Abdullah</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center bg-black rounded-full px-1 py-0.5 shadow-md border border-gray-700">
            <Link
              href="/"
              className={`p-2 rounded-full hover:bg-zinc-800 transition ${
                isActive('/') ? 'bg-zinc-800 text-white' : 'text-zinc-400'
              }`}
            >
              <HomeIcon className="h-5 w-5" />
            </Link>

            <div className="w-[1px] h-5 bg-zinc-700 mx-2" />

            {[
              { href: '/about', label: 'About', icon: <UserIcon className="h-5 w-5" /> },
              { href: '/projects', label: 'Work', icon: <Squares2X2Icon className="h-5 w-5" /> },
              { href: '/contact', label: 'Contact', icon: <PhoneIcon className="h-5 w-5" /> },
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
                <span className="hidden sm:inline">{item.label}</span>
              </Link>
            ))}

          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-full hover:bg-zinc-800 transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6 text-white" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden mt-4 py-2 border-t border-gray-800 transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 py-0 border-t-0'
        }`}>
          <div className="flex flex-col space-y-2 pt-2">
            <Link
              href="/"
              className={`flex items-center px-4 py-3 rounded-lg ${
                isActive('/') ? 'bg-zinc-800 text-white' : 'text-zinc-400 hover:bg-zinc-800'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <HomeIcon className="h-5 w-5 mr-3" />
              Home
            </Link>
            {[
              { href: '/about', label: 'About', icon: <UserIcon className="h-5 w-5 mr-3" /> },
              { href: '/projects', label: 'Work', icon: <Squares2X2Icon className="h-5 w-5 mr-3" /> },
              { href: '/contact', label: 'Contact', icon: <PhoneIcon className="h-5 w-5 mr-3" /> },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center px-4 py-3 rounded-lg ${
                  isActive(item.href)
                    ? 'bg-zinc-800 text-white'
                    : 'text-zinc-400 hover:bg-zinc-800'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
            
           
          </div>
        </div>
      </div>
    </header>
  )
}
