import Link from "next/link"
import { Facebook, Instagram, Phone, MapPin, Mail, Clock, Gem, Shield, Award, Globe2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
    const quickLinks = [
        { href: "/shop", label: "Shop Collection" },
        { href: "/story", label: "Our Story" },
        { href: "/services", label: "Custom Services" },
        { href: "/blog", label: "Blog & News" },
        { href: "/contact", label: "Contact Us" },
    ]

    const gemstoneCategories = [
        { href: "/shop/sapphires", label: "Ceylon Sapphires" },
        { href: "/shop/rubies", label: "Natural Rubies" },
        { href: "/shop/moonstones", label: "Moonstones" },
        { href: "/shop/rare", label: "Rare Specimens" },
        { href: "/shop/jewelry", label: "Custom Jewelry" },
    ]

    const certifications = [
        "GIA Certified",
        "SSEF Certified",
        "Gübelin Certified",
        "AGL Certified",
        "Lotus Certified"
    ]

    return (
        <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
            <div className="container mx-auto px-4 py-16">
                {/* Main Footer Content */}
                <div className="grid gap-12 lg:grid-cols-4 md:grid-cols-2">

                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <div className="mb-6 flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center">
                                <svg width="48" height="48" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 2L6 12V28L20 38L34 28V12L20 2Z" stroke="#F59E0B" strokeWidth="2" fill="none" />
                                    <path d="M20 12L12 17V27L20 32L28 27V17L20 12Z" stroke="#F59E0B" strokeWidth="2" fill="none" />
                                </svg>
                            </div>
                            <span className="text-2xl font-bold text-white">CeyLex Gems</span>
                        </div>

                        <p className="mb-6 text-base leading-relaxed text-slate-300">
                            Authentic Sri Lankan certified gemstones from the legendary mines of Ratnapura.
                            Ethical sourcing, transparent pricing, and worldwide delivery since 1998.
                        </p>

                        {/* Trust Badges */}
                        <div className="mb-6 space-y-3">
                            <div className="flex items-center gap-3 text-sm text-slate-300">
                                <Shield className="h-4 w-4 text-green-400" />
                                <span>25+ Years Trusted Experience</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-slate-300">
                                <Award className="h-4 w-4 text-blue-400" />
                                <span>100% Certified Authentic</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-slate-300">
                                <Globe2 className="h-4 w-4 text-amber-400" />
                                <span>Shipped to 50+ Countries</span>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-3">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white transition-all duration-300 hover:bg-blue-600 hover:scale-110"
                            >
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white transition-all duration-300 hover:bg-pink-600 hover:scale-110"
                            >
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white transition-all duration-300 hover:bg-sky-600 hover:scale-110"
                            >
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                                <span className="sr-only">Twitter</span>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-6 text-lg font-bold text-white">Quick Links</h3>
                        <nav className="space-y-3">
                            {quickLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="block text-slate-300 transition-all duration-300 hover:text-amber-400 hover:translate-x-1"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Gemstone Categories */}
                    <div>
                        <h3 className="mb-6 text-lg font-bold text-white">Our Gemstones</h3>
                        <nav className="space-y-3">
                            {gemstoneCategories.map((category) => (
                                <Link
                                    key={category.href}
                                    href={category.href}
                                    className="block text-slate-300 transition-all duration-300 hover:text-amber-400 hover:translate-x-1"
                                >
                                    {category.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Contact & Certifications */}
                    <div>
                        <h3 className="mb-6 text-lg font-bold text-white">Contact Info</h3>

                        <div className="mb-6 space-y-4">
                            <div className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-amber-400 mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="text-sm text-slate-300">
                                        123 Galle Road<br />
                                        Hikkaduwa, Sri Lanka<br />
                                        80240
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                                <a href="tel:+94914383324" className="text-sm text-slate-300 hover:text-white transition-colors">
                                    +94 91 438 3324
                                </a>
                            </div>

                            <div className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-green-400 flex-shrink-0" />
                                <a href="mailto:info@ceylexgems.com" className="text-sm text-slate-300 hover:text-white transition-colors">
                                    info@ceylexgems.com
                                </a>
                            </div>

                            <div className="flex items-start gap-3">
                                <Clock className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                                <div className="text-sm text-slate-300">
                                    <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
                                    <p>Sunday: By Appointment</p>
                                </div>
                            </div>
                        </div>

                        {/* Certifications */}
                        <div>
                            <h4 className="mb-3 text-sm font-semibold text-white">Certifications</h4>
                            <div className="flex flex-wrap gap-2">
                                {certifications.map((cert) => (
                                    <span
                                        key={cert}
                                        className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-300 border border-white/20"
                                    >
                                        {cert}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Newsletter Section */}
                <div className="mt-12 border-t border-white/10 pt-8">
                    <div className="lg:flex lg:items-center lg:justify-between">
                        <div className="lg:w-0 lg:flex-1">
                            <h3 className="text-lg font-bold text-white mb-2">Stay Updated</h3>
                            <p className="text-slate-300 text-sm">
                                Get the latest news about new arrivals, exclusive collections, and gemstone insights.
                            </p>
                        </div>
                        <div className="mt-4 lg:mt-0 lg:ml-8">
                            <div className="flex gap-3">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 lg:w-64 px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                                <Button
                                    variant="accent"
                                    size="default"
                                    className="px-6"
                                >
                                    Subscribe
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 border-t border-white/10 pt-8">
                    <div className="lg:flex lg:items-center lg:justify-between">
                        <div className="flex flex-wrap gap-6 text-sm text-slate-400">
                            <Link href="/privacy" className="hover:text-white transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="hover:text-white transition-colors">
                                Terms of Service
                            </Link>
                            <Link href="/shipping" className="hover:text-white transition-colors">
                                Shipping Policy
                            </Link>
                            <Link href="/returns" className="hover:text-white transition-colors">
                                Returns & Exchanges
                            </Link>
                        </div>
                        <div className="mt-4 lg:mt-0">
                            <p className="text-sm text-slate-400">
                                © {new Date().getFullYear()} CeyLex Gems. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}