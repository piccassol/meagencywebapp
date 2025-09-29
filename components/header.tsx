"use client"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className="relative z-20 flex items-center justify-between p-4 md:p-6">
      <div className="flex items-center">
        <Link href="/" className="hover:opacity-90 transition-opacity">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-dsyNDELoB7alxoLZslkgZnr4lNSXQM.webp"
            alt="Me Creative Agency LLC"
            width={180}
            height={60}
            className="h-8 md:h-12 w-auto drop-shadow-lg"
          />
        </Link>
      </div>

      {/* Navigation - visible on all screen sizes */}
      <nav className="flex items-center space-x-2 md:space-x-8 text-xs md:text-sm">
        <Link href="/about" className="text-white hover:text-white/90 font-semibold transition-colors drop-shadow-lg">
          About
        </Link>
        <Link href="/services" className="text-white hover:text-white/90 font-semibold transition-colors drop-shadow-lg">
          Services
        </Link>
        <Link href="/oui-care" className="text-white hover:text-white/90 font-semibold transition-colors drop-shadow-lg">
          Oui Care
        </Link>
        <Link href="/arts-entertainment" className="text-white hover:text-white/90 font-semibold transition-colors drop-shadow-lg hidden sm:inline">
          Arts & Entertainment
        </Link>
        <Link href="/arts-entertainment" className="text-white hover:text-white/90 font-semibold transition-colors drop-shadow-lg sm:hidden">
          Arts
        </Link>
        <Link href="/contact" className="text-white hover:text-white/90 font-semibold transition-colors drop-shadow-lg">
          Contact
        </Link>
      </nav>

      <div className="flex items-center">
        <Link href="/contact">
          <button className="px-3 py-1.5 md:px-6 md:py-2 rounded-full bg-white text-black font-bold text-xs md:text-sm transition-all duration-300 hover:bg-white/90 hover:scale-105 shadow-lg">
            Get Started
          </button>
        </Link>
      </div>
    </header>
  )
}