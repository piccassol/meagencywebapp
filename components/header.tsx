"use client"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className="relative z-20 flex items-center justify-between p-6">
      <div className="flex items-center">
        <Link href="/" className="hover:opacity-90 transition-opacity">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-dsyNDELoB7alxoLZslkgZnr4lNSXQM.webp"
            alt="Me Creative Agency LLC"
            width={180}
            height={60}
            className="h-12 w-auto"
          />
        </Link>
      </div>

      <nav className="hidden md:flex items-center space-x-8">
        <Link href="/about" className="text-white/80 hover:text-white text-sm font-light transition-colors">
          About
        </Link>
        <Link href="/services" className="text-white/80 hover:text-white text-sm font-light transition-colors">
          Services
        </Link>
        <Link href="/oui-care" className="text-white/80 hover:text-white text-sm font-light transition-colors">
          Oui Care
        </Link>
        <Link href="/arts-entertainment" className="text-white/80 hover:text-white text-sm font-light transition-colors">
          Arts & Entertainment
        </Link>
        <Link href="/contact" className="text-white/80 hover:text-white text-sm font-light transition-colors">
          Contact
        </Link>
      </nav>

      {/* Mobile Navigation */}
      <nav className="flex md:hidden items-center space-x-4">
        <Link href="/contact" className="text-white/80 hover:text-white text-sm font-light transition-colors">
          Contact
        </Link>
      </nav>

      <div className="flex items-center">
        <Link href="/contact">
          <button className="px-4 py-2 md:px-6 md:py-2 rounded-full bg-white text-black font-medium text-xs md:text-sm transition-all duration-300 hover:bg-white/90 hover:scale-105">
            Get Started
          </button>
        </Link>
      </div>
    </header>
  )
}