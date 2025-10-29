"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
          : "bg-gradient-to-b from-cream/95 to-cream/90 backdrop-blur-sm border-b border-butter/30"
      }`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 md:px-8 py-4">
        <Link
          href="/"
          className="text-chocolate font-fraunces text-2xl md:text-3xl font-bold hover:text-cinnamon transition-all duration-300 flex-shrink-0"
        >
          Maple Hearth
        </Link>

        <nav className="hidden md:flex gap-2 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2.5 rounded-lg transition-all duration-300 font-medium text-sm relative group ${
                isActive(link.href)
                  ? "bg-butter text-chocolate"
                  : "text-chocolate hover:bg-warm-beige hover:text-cinnamon"
              }`}
            >
              {link.label}
              <span
                className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-cinnamon transition-all duration-300 ${
                  isActive(link.href) ? "w-1/2" : "w-0 group-hover:w-1/2"
                }`}
              />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden sm:inline-block bg-cinnamon text-cream px-6 py-2.5 rounded-lg font-medium hover:bg-chocolate hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 text-sm"
          >
            Order Now
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-warm-beige rounded-lg transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6 text-chocolate" /> : <Menu className="w-6 h-6 text-chocolate" />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-cream/98 backdrop-blur-md border-t border-butter/30">
          <nav className="flex flex-col p-4 gap-2 max-w-7xl mx-auto">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 rounded-lg transition-all duration-300 font-medium ${
                  isActive(link.href)
                    ? "bg-butter text-chocolate shadow-sm"
                    : "text-chocolate hover:bg-warm-beige hover:translate-x-1"
                }`}
                style={{
                  transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 rounded-lg bg-cinnamon text-cream font-medium hover:bg-chocolate hover:shadow-lg transition-all duration-300 mt-2"
            >
              Order Now
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
