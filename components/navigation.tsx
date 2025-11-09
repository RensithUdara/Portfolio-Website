"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: "/shop", label: "Shop" },
    { href: "/story", label: "Our Story" },
    { href: "/services", label: "Custom Jewellery & Services" },
    { href: "/blog", label: "Blog" },
  ]

  return (
    <nav className="absolute top-0 z-50 w-full bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 transition-transform hover:scale-105">
            <div className="flex h-12 w-12 items-center justify-center">
              <svg width="48" height="48" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 2L6 12V28L20 38L34 28V12L20 2Z" stroke="#F59E0B" strokeWidth="2" fill="none" />
                <path d="M20 12L12 17V27L20 32L28 27V17L20 12Z" stroke="#F59E0B" strokeWidth="2" fill="none" />
              </svg>
            </div>
          </Link>

          {/* Desktop Navigation - Centered navigation links */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white transition-all hover:text-amber-400"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            <Button
              className="hidden rounded-lg bg-amber-500 px-6 py-2.5 text-sm font-semibold text-gray-900 shadow-lg transition-all hover:bg-amber-400 hover:shadow-xl sm:inline-flex"
              asChild
            >
              <Link href="/shop">Explore Our Collection</Link>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10 hover:text-white md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="border-t border-white/10 bg-[#0f1729]/95 py-4 backdrop-blur md:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-white/90 transition-colors hover:text-amber-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/shop"
                className="rounded-lg bg-amber-500 px-4 py-2.5 text-center text-sm font-semibold text-gray-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                Explore Our Collection
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
