import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, Globe2, Award, Check, Phone, Mail, MessageCircle, Gem, Leaf, Tag } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
    const gemstoneCategories = [
        {
            id: 1,
            name: "Ceylon Sapphires",
            description: "World-renowned blue sapphires from Ratnapura, showcasing exceptional clarity and brilliance with full GIA certification.",
            price: "From LKR 150,000",
            image: "/collection-of-colorful-ceylon-sapphires-blue-yello.jpg",
            certified: true,
            features: ["GIA Certified", "Natural Origin", "Heat Treatment Only"],
        },
        {
            id: 2,
            name: "Natural Rubies",
            description: "Exquisite red rubies sourced ethically from Ratnapura mines, each stone meticulously selected for superior quality.",
            price: "From LKR 240,000",
            image: "/brilliant-red-ruby-gemstone-close-up.jpg",
            certified: true,
            features: ["Unheated", "Premium Quality", "Certificate Included"],
        },
        {
            id: 3,
            name: "Rare Specimens",
            description: "Exclusive collection of moonstones, padparadschas, and spinels - perfect for discerning collectors and investors.",
            price: "From LKR 105,000",
            image: "/blue-and-green-agate-geode-crystal-formation.jpg",
            certified: true,
            features: ["Investment Grade", "Rare Varieties", "Museum Quality"],
        },
    ]

    const trustIndicators = [
        { icon: Shield, title: "Certified Authentic", description: "All gems certified by international gemological institutes" },
        { icon: Globe2, title: "Worldwide Shipping", description: "Secure international delivery to over 50 countries" },
        { icon: Award, title: "25+ Years Experience", description: "Trusted by collectors and jewelers globally since 1998" },
    ]

    const features = [
        {
            icon: Shield,
            title: "Guaranteed Authenticity",
            description: "Every gemstone comes with detailed certification from internationally recognized gemological institutes, ensuring complete authenticity and peace of mind."
        },
        {
            icon: Globe2,
            title: "Global Reach",
            description: "Secure worldwide shipping to over 50 countries with full insurance coverage and tracking. Your precious gems are protected every step of the way."
        },
        {
            icon: Award,
            title: "Master Craftsmanship",
            description: "Our master gemologists and cutters have decades of experience, ensuring each stone is cut to maximize its natural beauty and brilliance."
        },
        {
            icon: Gem,
            title: "Ethical Sourcing",
            description: "Direct partnerships with mining communities ensure fair trade practices while maintaining the highest environmental and social responsibility standards."
        },
        {
            icon: Leaf,
            title: "Sustainable Practices",
            description: "We're committed to responsible mining practices that protect Sri Lanka's natural heritage while supporting local communities and ecosystems."
        },
        {
            icon: Tag,
            title: "Competitive Pricing",
            description: "Direct sourcing eliminates middlemen, allowing us to offer exceptional value on premium gemstones without compromising on quality or authenticity."
        }
    ]

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
            <Navigation />

            {/* Modern Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Gradient background */}
                <div className="absolute inset-0 gradient-hero"></div>

                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                </div>

                {/* Hero content */}
                <div className="relative z-10 container mx-auto px-4 py-20 text-center">
                    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
                        <div className="space-y-4">
                            <Badge className="mb-4 bg-blue-600/10 text-blue-600 border-blue-600/20 hover:bg-blue-600/20">
                                Authentic Sri Lankan Gemstones Since 1998
                            </Badge>

                            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                                Discover the World's Most
                                <span className="block text-amber-400">
                                    Exquisite Gemstones
                                </span>
                            </h1>

                            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                                Premium Ceylon sapphires, rubies, and rare gemstones. Each stone ethically sourced,
                                expertly cut, and certified for authenticity by our master gemologists.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                            <Button
                                size="lg"
                                className="text-lg px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                                asChild
                            >
                                <Link href="/shop">
                                    Explore Collection <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>

                            <Button
                                size="lg"
                                variant="outline"
                                className="text-lg px-8 py-4 border-2 border-white/20 text-white hover:bg-white/10 backdrop-blur-sm"
                                asChild
                            >
                                <Link href="/story">Our Heritage</Link>
                            </Button>
                        </div>

                        {/* Trust indicators */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-4xl mx-auto">
                            {trustIndicators.map((indicator, index) => (
                                <div key={index} className="glass-dark p-6 rounded-2xl text-center space-y-3 hover:bg-white/20 transition-all duration-300">
                                    <div className="mx-auto w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mb-4">
                                        <indicator.icon className="h-6 w-6 text-blue-400" />
                                    </div>
                                    <h3 className="font-semibold text-white text-lg">{indicator.title}</h3>
                                    <p className="text-slate-300 text-sm">{indicator.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="animate-bounce">
                        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Collection Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16 animate-fade-in-up">
                        <Badge className="mb-4 bg-blue-50 text-blue-600 border-blue-200">
                            Premium Collection
                        </Badge>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Exceptional Ceylon Gemstones
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Each gemstone in our collection represents centuries of geological artistry,
                            handpicked for its exceptional beauty and authenticated quality.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {gemstoneCategories.map((category, index) => (
                            <Card
                                key={category.id}
                                className="group card-enhanced border-0 shadow-lg hover:shadow-2xl overflow-hidden bg-white"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="relative overflow-hidden aspect-square">
                                    <Image
                                        src={category.image}
                                        alt={category.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    {category.certified && (
                                        <Badge className="absolute top-4 right-4 bg-green-500 text-white border-0">
                                            <Shield className="h-3 w-3 mr-1" />
                                            Certified
                                        </Badge>
                                    )}
                                </div>

                                <CardContent className="p-8">
                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-3">{category.name}</h3>
                                            <p className="text-gray-600 leading-relaxed">{category.description}</p>
                                        </div>

                                        <div className="flex flex-wrap gap-2">
                                            {category.features.map((feature, idx) => (
                                                <Badge key={idx} variant="secondary" className="text-xs">
                                                    {feature}
                                                </Badge>
                                            ))}
                                        </div>

                                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                            <div>
                                                <p className="text-sm text-gray-500">Starting at</p>
                                                <p className="text-2xl font-bold text-blue-600">{category.price}</p>
                                            </div>

                                            <Button
                                                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                                                asChild
                                            >
                                                <Link href="/shop">
                                                    View Collection <ArrowRight className="ml-2 h-4 w-4" />
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Why Choose CeyLex Gems?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Over 25 years of expertise in sourcing and certifying the finest Sri Lankan gemstones,
                            trusted by collectors and jewelers worldwide.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="text-center space-y-4 p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 card-enhanced"
                            >
                                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-6">
                                    <feature.icon className="h-8 w-8 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-4xl mx-auto space-y-8">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Ready to Find Your Perfect Gemstone?
                        </h2>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                            Our expert gemologists are here to help you discover the perfect Ceylon gemstone for your collection or custom jewelry project.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                                asChild
                            >
                                <Link href="/shop">
                                    Browse Our Collection <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>

                            <Button
                                size="lg"
                                variant="outline"
                                className="border-2 border-white/20 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg"
                                asChild
                            >
                                <Link href="/contact">
                                    <MessageCircle className="mr-2 h-5 w-5" />
                                    Get Expert Advice
                                </Link>
                            </Button>
                        </div>

                        {/* Contact Information */}
                        <div className="pt-12 border-t border-white/10">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
                                <div className="space-y-2">
                                    <div className="flex items-center justify-center">
                                        <Phone className="h-6 w-6 text-blue-400 mr-3" />
                                        <span className="text-white font-medium">Call Us</span>
                                    </div>
                                    <p className="text-slate-300">+94 91 438 3324</p>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-center justify-center">
                                        <Mail className="h-6 w-6 text-blue-400 mr-3" />
                                        <span className="text-white font-medium">Email Us</span>
                                    </div>
                                    <p className="text-slate-300">info@ceylexgems.com</p>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-center justify-center">
                                        <MessageCircle className="h-6 w-6 text-blue-400 mr-3" />
                                        <span className="text-white font-medium">WhatsApp</span>
                                    </div>
                                    <p className="text-slate-300">+94 77 123 4567</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}