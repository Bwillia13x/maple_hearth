"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    return pathname === href
  }

  const navLinks = [
    { href: "/menu", label: "Weekly Menu" },
    { href: "/custom-cakes", label: "Custom Cakes" },
    { href: "/schedule", label: "Schedule" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-cream/95 to-cream/90 backdrop-blur-sm border-b border-butter shadow-sm">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 md:px-8 py-4">
        <Link
          href="/"
          className="text-chocolate font-fraunces text-2xl md:text-3xl font-bold hover:text-cinnamon transition-colors duration-300 flex-shrink-0"
        >
          Maple Hearth
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-1 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium text-sm ${
                isActive(link.href) ? "bg-butter text-chocolate" : "text-chocolate hover:bg-butter/50"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden sm:inline-block bg-cinnamon text-cream px-6 py-2 rounded-lg font-medium hover:bg-chocolate transition-colors duration-300 text-sm"
          >
            Order Now
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-butter rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6 text-chocolate" /> : <Menu className="w-6 h-6 text-chocolate" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-cream border-t border-butter">
          <nav className="flex flex-col p-4 gap-2 max-w-7xl mx-auto">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 rounded-lg transition-all duration-300 font-medium ${
                  isActive(link.href) ? "bg-butter text-chocolate" : "text-chocolate hover:bg-butter/50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 rounded-lg bg-cinnamon text-cream font-medium hover:bg-chocolate transition-colors duration-300 mt-2"
            >
              Order Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
