"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/shop", label: "Shop" },
    { href: "/story", label: "Our Story" },
    { href: "/services", label: "Custom Jewellery & Services" },
    { href: "/blog", label: "Blog" },
  ]

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${isScrolled
        ? "bg-white/95 shadow-xl backdrop-blur-xl border-b border-gray-100"
        : "bg-white/10 backdrop-blur-lg"
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 transition-all duration-300 hover:scale-105">
            <div className="flex h-12 w-12 items-center justify-center">
              <svg width="48" height="48" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20 2L6 12V28L20 38L34 28V12L20 2Z"
                  stroke={isScrolled ? "#1e40af" : "#f59e0b"}
                  strokeWidth="2"
                  fill="none"
                  className="transition-colors duration-300"
                />
                <path
                  d="M20 12L12 17V27L20 32L28 27V17L20 12Z"
                  stroke={isScrolled ? "#1e40af" : "#f59e0b"}
                  strokeWidth="2"
                  fill="none"
                  className="transition-colors duration-300"
                />
              </svg>
            </div>
            <span
              className={`text-xl font-bold transition-colors duration-300 ${isScrolled ? "text-gray-900" : "text-white"
                }`}
            >
              CeyLex Gems
            </span>
          </Link>

          {/* Desktop Navigation - Modern styling */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-semibold transition-all duration-300 hover:scale-105 ${isScrolled
                  ? "text-gray-700 hover:text-blue-600"
                  : "text-white/90 hover:text-amber-400"
                  } group`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full ${isScrolled ? "bg-blue-600" : "bg-amber-400"
                  }`}></span>
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <Button
              className={`hidden sm:inline-flex rounded-lg px-6 py-2.5 text-sm font-semibold shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 ${isScrolled
                  ? "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
                  : "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black"
                }`}
              asChild
            >
              <Link href="/shop">Explore Collection</Link>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className={`md:hidden transition-colors duration-300 ${isScrolled
                  ? "text-gray-700 hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
                }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden transition-all duration-300 border-t backdrop-blur-xl ${isScrolled
              ? "bg-white/95 border-gray-200"
              : "bg-white/10 border-white/10"
            }`}>
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-3 text-base font-semibold transition-all duration-300 rounded-lg hover:scale-105 ${isScrolled
                        ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                        : "text-white hover:text-amber-400 hover:bg-white/10"
                      }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className={`mt-4 border-t pt-4 ${isScrolled ? "border-gray-200" : "border-white/10"
                  }`}>
                  <Button
                    className={`w-full py-3 text-base font-semibold shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 ${isScrolled
                        ? "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
                        : "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black"
                      }`}
                    asChild
                  >
                    <Link href="/shop" onClick={() => setMobileMenuOpen(false)}>
                      Explore Collection
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
