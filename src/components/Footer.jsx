import React from 'react'
import Container from './Container'

import Image from 'next/image';
import Link from 'next/link';
import {
  EnvelopeIcon,
  HomeIcon,
  UserIcon,
  BookOpenIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/outline';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaKaggle,
  FaVoicemail,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer>
      <Container classname={"bg-black text-zinc-300 pt-10 pb-6 mt-16 border-t border-zinc-800 w-full px-10 py-4 flex justify-between items-center"} >
              <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Logo and Info */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Image
              src="/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="invert"
            />
            <h1 className="text-white text-xl font-poppins">Abdullah</h1>
          </div>
          <p className="text-sm leading-relaxed">
            Passionate about software, AI, and crafting solutions at the intersection of creativity and engineering.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-white flex items-center gap-2"><HomeIcon className="h-4 w-4" /> Home</Link></li>
            <li><Link href="/about" className="hover:text-white flex items-center gap-2"><UserIcon className="h-4 w-4" /> About</Link></li>
            <li><Link href="/projects" className="hover:text-white flex items-center gap-2"><Squares2X2Icon className="h-4 w-4" /> Work</Link></li>
            
            <li><Link href="/contact" className="hover:text-white flex items-center gap-2"><EnvelopeIcon className="h-4 w-4" /> Contact</Link></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Connect</h3>
          <div className="flex space-x-4">
            <Link href="https://github.com/AbdRicher" target="_blank" className="hover:text-white">
              <FaGithub className="w-5 h-5" />
            </Link>
            <Link href="https://www.linkedin.com/in/abdullah-amjad-3209b0285" target="_blank" className="hover:text-white">
              <FaLinkedin className="w-5 h-5" />
            </Link>
            <Link href="https://www.kaggle.com/abdullahamjad1234" target="_blank" className="hover:text-white">
              <FaKaggle className="w-5 h-5" />
            </Link>
            <Link href="mailto:Abdullah.Work123456@gmail.com" target="_blank" className="hover:text-white">
              <FaVoicemail className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      

      </Container>
      {/* Bottom Bar */}
      <div className="bg-black pb-5 pt-5 text-center text-md text-white border-t border-zinc-800">
        &copy; {new Date().getFullYear()} Abdullah. All rights reserved.
      </div>
    </footer>
  )
}
