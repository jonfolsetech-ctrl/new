'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-brand-dark via-brand-primary to-brand-secondary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <Image
                src="/folsetech-logo.png"
                alt="FolseTech Logo"
                width={50}
                height={50}
                className="w-12 h-auto"
              />
              <span className="text-2xl font-bold">Folsetech</span>
            </motion.div>
            <p className="text-brand-light/80 leading-relaxed">
              Transforming businesses with cutting-edge artificial intelligence solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-brand-light/80 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-brand-light/80 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-brand-light/80">
              <li>Email: info@folsetech.org</li>
              <li>Website: folsetech.org</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-brand-light/70">
            © {currentYear} FolseTech AI Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
