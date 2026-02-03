'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <nav className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <Image
            src="/folsetech-logo.png"
            alt="FolseTech Logo"
            width={40}
            height={40}
            className="w-10 h-auto"
          />
          <span
            className={`text-xl font-bold transition-colors ${
              scrolled ? 'text-brand-primary' : 'text-white'
            }`}
          >
            Folsetech
          </span>
        </motion.div>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <a
            href="#services"
            className={`font-medium transition-colors hover:scale-105 transform ${
              scrolled
                ? 'text-gray-700 hover:text-brand-primary'
                : 'text-white hover:text-brand-accent'
            }`}
          >
            Services
          </a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`font-semibold px-6 py-2 rounded-lg transition-all ${
              scrolled
                ? 'bg-brand-primary text-white hover:bg-blue-700'
                : 'bg-white text-brand-primary hover:bg-brand-light'
            }`}
          >
            Contact Us
          </motion.a>
        </div>
      </nav>
    </motion.header>
  )
}
