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
                <span className="block gradient-accent bg-clip-text text-transparent">
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
                className="btn-primary text-lg px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                asChild
              >
                <Link href="/shop">
                  Explore Collection <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="btn-secondary text-lg px-8 py-4 border-2 border-white/20 text-white hover:bg-white/10 backdrop-blur-sm"
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
            {[
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
            ].map((feature, index) => (
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
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
          }}
        />

      <div className="absolute inset-0 bg-gradient-to-t from-[#1a2557] via-transparent to-transparent" />

      <div className="container relative mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6 text-white animate-fade-in-up">
            <Badge className="w-fit border-amber-400 bg-amber-500 text-black hover:bg-amber-500 transition-transform hover:scale-105">
              Certified & Ethically Sourced
            </Badge>
            <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Authentic Sri Lankan <span className="text-emerald-400">Certified Gems</span>
            </h1>
            <p className="text-lg leading-relaxed text-white/90 text-pretty">
              From the legendary mines of Ratnapura to your collection. Discover hand-picked Ceylon sapphires, rubies,
              moonstones, and rare gems with full lab certification and transparent pricing.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="gap-2 bg-amber-500 text-black hover:bg-amber-600 transition-all hover:scale-105 hover:shadow-xl"
                asChild
              >
                <Link href="/shop">
                  <Gem className="h-5 w-5" />
                  Browse Collection <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-white/30 bg-white/10 text-white hover:bg-white/20 transition-all hover:scale-105"
                asChild
              >
                <Link href="/contact">
                  <MessageCircle className="h-5 w-5" />
                  Request Consultation
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div
                className="flex items-center gap-2 animate-fade-in"
                style={{ animationDelay: "0.2s", animationFillMode: "both" }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 transition-transform hover:scale-110">
                  <Check className="h-5 w-5 text-emerald-400" />
                </div>
                <span className="text-sm font-medium">Lab Certified</span>
              </div>
              <div
                className="flex items-center gap-2 animate-fade-in"
                style={{ animationDelay: "0.4s", animationFillMode: "both" }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 transition-transform hover:scale-110">
                  <Globe2 className="h-5 w-5 text-emerald-400" />
                </div>
                <span className="text-sm font-medium">Worldwide Shipping</span>
              </div>
              <div
                className="flex items-center gap-2 animate-fade-in"
                style={{ animationDelay: "0.6s", animationFillMode: "both" }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 transition-transform hover:scale-110">
                  <Leaf className="h-5 w-5 text-emerald-400" />
                </div>
                <span className="text-sm font-medium">Ethical Sourcing</span>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="aspect-square overflow-hidden rounded-2xl bg-white/10 p-8 backdrop-blur-sm transition-transform hover:scale-105">
              <Image
                src="/collection-of-vibrant-colorful-gemstones-sapphire-.jpg"
                alt="Premium Ceylon gemstones collection"
                width={600}
                height={600}
                className="h-full w-full object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Why Choose CEYLEX GEMS - Light Background */ }
  <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-28">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-16 text-center animate-fade-in-up">
        <h2 className="mb-6 font-serif text-5xl font-bold tracking-tight text-balance text-gray-900 sm:text-6xl">
          Why Choose CEYLEX GEMS?
        </h2>
        <p className="mx-auto max-w-3xl text-xl text-gray-600 text-pretty">
          Experience the heritage of Sri Lanka's gem industry with modern transparency, certification, and worldwide
          delivery.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="border-0 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
          <CardContent className="p-8">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 transition-transform hover:scale-110">
              <Award className="h-8 w-8 text-white" />
            </div>
            <h3 className="mb-3 text-2xl font-bold text-gray-900">Lab Certified</h3>
            <p className="text-base leading-relaxed text-gray-600">
              Every gemstone comes with authentic laboratory certification, ensuring quality and authenticity you
              can trust.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
          <CardContent className="p-8">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 transition-transform hover:scale-110">
              <Leaf className="h-8 w-8 text-white" />
            </div>
            <h3 className="mb-3 text-2xl font-bold text-gray-900">Ethical Sourcing</h3>
            <p className="text-base leading-relaxed text-gray-600">
              Responsibly sourced from Sri Lanka's renowned mines in Ratnapura and Eheliyagoda with sustainable
              practices.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
          <CardContent className="p-8">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 transition-transform hover:scale-110">
              <Tag className="h-8 w-8 text-white" />
            </div>
            <h3 className="mb-3 text-2xl font-bold text-gray-900">Transparent Pricing</h3>
            <p className="text-base leading-relaxed text-gray-600">
              Fair, honest pricing with no hidden costs. Direct from source to you, eliminating unnecessary markups.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
          <CardContent className="p-8">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 transition-transform hover:scale-110">
              <Globe2 className="h-8 w-8 text-white" />
            </div>
            <h3 className="mb-3 text-2xl font-bold text-gray-900">Worldwide Delivery</h3>
            <p className="text-base leading-relaxed text-gray-600">
              Secure, export-ready shipping to collectors and jewelers worldwide with full documentation and
              tracking.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Statistics Banner */}
      <div className="mt-16 overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700 p-12 shadow-2xl relative">
        <div className="absolute inset-0 animate-shimmer" />
        <div className="relative grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="text-center text-white">
            <div className="mb-3 font-serif text-6xl font-bold">20+</div>
            <div className="text-lg text-white/90">Years Experience</div>
          </div>
          <div className="text-center text-white">
            <div className="mb-3 font-serif text-6xl font-bold">100%</div>
            <div className="text-lg text-white/90">Certified Gems</div>
          </div>
          <div className="text-center text-white">
            <div className="mb-3 font-serif text-6xl font-bold">50+</div>
            <div className="text-lg text-white/90">Countries Served</div>
          </div>
          <div className="text-center text-white">
            <div className="mb-3 font-serif text-6xl font-bold">5000+</div>
            <div className="text-lg text-white/90">Happy Customers</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Gemstone Categories */ }
  <section className="bg-white py-20">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-12 text-center animate-fade-in-up">
        <h2 className="mb-4 font-serif text-3xl font-bold tracking-tight text-balance text-gray-900 sm:text-4xl">
          Discover Our Exquisite Gemstones
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 text-pretty animate-fade-in-up">
          Each stone is hand-selected from Sri Lanka's legendary mines, certified for authenticity, and ready to
          become part of your collection or custom jewelry piece.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {gemstoneCategories.map((category, index) => (
          <Card
            key={category.id}
            /* Added staggered animation and enhanced hover effect */
            className="group overflow-hidden border-0 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "both" }}
          >
            <CardContent className="p-0">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  width={400}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {category.certified && (
                  <Badge className="absolute right-4 top-4 border-emerald-500 bg-emerald-500 text-white transition-transform group-hover:scale-110">
                    <Check className="mr-1 h-3 w-3" />
                    Certified
                  </Badge>
                )}
              </div>
              <div className="p-6">
                <h3 className="mb-3 font-serif text-2xl font-bold text-gray-900">{category.name}</h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-600">{category.description}</p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-900">{category.price}</span>
                  <Button
                    className="gap-2 bg-amber-500 text-black hover:bg-amber-600 transition-all hover:scale-105"
                    asChild
                  >
                    <Link href="/shop">
                      View Collection <ArrowRight className="h-4 w-4" />
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

  {/* Certification Section - White Background */ }
  <section className="bg-gradient-to-br from-gray-50 to-white py-20">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="order-2 lg:order-1 animate-fade-in">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xvx305sftECaZ8eftAVBBGgdnJJAK1.png"
            alt="Gemstone certification documentation"
            width={600}
            height={600}
            className="rounded-2xl shadow-2xl transition-transform hover:scale-105"
          />
        </div>
        <div className="order-1 space-y-6 lg:order-2 animate-fade-in-up">
          <Badge className="w-fit border-blue-500 bg-blue-50 text-blue-700">
            <Shield className="mr-1 h-3 w-3" />
            Certification & Trust
          </Badge>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-balance text-gray-900 sm:text-4xl">
            Every Stone Tells a Story of <span className="text-blue-600">Authenticity & Quality</span>
          </h2>
          <p className="text-lg leading-relaxed text-gray-600 text-pretty animate-fade-in-up">
            At CEYLEX GEMS, transparency is at the heart of everything we do. Every gemstone in our collection comes
            with complete laboratory certification, detailed specifications, and a commitment to ethical sourcing
            from Sri Lanka's most renowned mining regions.
          </p>

          <div className="space-y-4">
            <div
              className="flex gap-4 animate-fade-in"
              style={{ animationDelay: "0.2s", animationFillMode: "both" }}
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 transition-transform hover:scale-110">
                <Check className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="mb-1 text-lg font-bold text-gray-900">Laboratory Certified Authentication</h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  Each gem comes with independent laboratory certification verifying origin, treatment status, and
                  quality characteristics.
                </p>
              </div>
            </div>

            <div
              className="flex gap-4 animate-fade-in"
              style={{ animationDelay: "0.4s", animationFillMode: "both" }}
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 transition-transform hover:scale-110">
                <Check className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="mb-1 text-lg font-bold text-gray-900">Direct from Sri Lankan Mines</h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  Sourced directly from Ratnapura and Eheliyagoda, the legendary "City of Gems" and surrounding
                  mining regions.
                </p>
              </div>
            </div>

            <div
              className="flex gap-4 animate-fade-in"
              style={{ animationDelay: "0.6s", animationFillMode: "both" }}
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 transition-transform hover:scale-110">
                <Check className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="mb-1 text-lg font-bold text-gray-900">Export Documentation Included</h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  All necessary export paperwork, customs documentation, and secure packaging for international
                  delivery.
                </p>
              </div>
            </div>
          </div>

          <Button
            size="lg"
            variant="outline"
            className="gap-2 border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent transition-all hover:scale-105"
            asChild
          >
            <Link href="/story">
              Learn About Our Heritage <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  </section>

  {/* CTA Section - Enhanced blue gradient background */ }
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1e3a8a] via-[#3b82f6] to-[#60a5fa] py-24">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url(/placeholder.svg?height=1080&width=1920&query=luxury+gemstones+pattern)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-cyan-500/30 to-blue-500/30 animate-shimmer" />

        <div className="container relative mx-auto px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 via-blue-400 to-cyan-500 shadow-2xl animate-scale-in animate-pulse-slow">
            <Mail className="h-14 w-14 text-white drop-shadow-lg" />
          </div>

          <h2
            className="mb-6 font-serif text-4xl font-bold tracking-tight text-balance text-white drop-shadow-lg sm:text-5xl lg:text-6xl animate-fade-in-up"
            style={{ animationDelay: "0.1s", animationFillMode: "both" }}
          >
            Ready to Discover Your Perfect Gemstone?
          </h2>
          <p
            className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-white/95 text-pretty animate-fade-in-up"
            style={{ animationDelay: "0.2s", animationFillMode: "both" }}
          >
            Whether you're a collector seeking rare specimens, a jeweler looking for certified stones, or someone
            wanting to create custom jewelry, we're here to help you find exactly what you need.
          </p>

          <div
            className="mb-12 flex flex-wrap justify-center gap-5 animate-fade-in-up"
            style={{ animationDelay: "0.3s", animationFillMode: "both" }}
          >
            <Button
              size="lg"
              className="h-16 gap-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 px-10 text-lg font-bold text-white shadow-2xl hover:from-amber-600 hover:to-orange-700 transition-all hover:scale-105 hover:shadow-[0_20px_50px_rgba(251,191,36,0.5)]"
              asChild
            >
              <Link href="/shop">
                <Gem className="h-6 w-6" />
                Browse Our Collection <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-16 gap-3 rounded-2xl border-2 border-white bg-white px-10 text-lg font-bold text-blue-900 shadow-2xl hover:bg-white/95 transition-all hover:scale-105"
              asChild
            >
              <Link href="/contact">
                <MessageCircle className="h-6 w-6" />
                Get in Touch
              </Link>
            </Button>
          </div>

          <div
            className="mb-12 flex flex-wrap justify-center gap-5 animate-fade-in-up"
            style={{ animationDelay: "0.4s", animationFillMode: "both" }}
          >
            <Button
              variant="ghost"
              className="h-14 gap-3 rounded-xl border-2 border-white/20 bg-white/10 px-8 text-base font-semibold text-white backdrop-blur-md hover:bg-white/20 hover:border-white/30 transition-all hover:scale-105"
              asChild
            >
              <a href="tel:+94123456789">
                <Phone className="h-5 w-5" />
                Call Us
              </a>
            </Button>
            <Button
              variant="ghost"
              className="h-14 gap-3 rounded-xl border-2 border-white/20 bg-white/10 px-8 text-base font-semibold text-white backdrop-blur-md hover:bg-white/20 hover:border-white/30 transition-all hover:scale-105"
              asChild
            >
              <a href="https://wa.me/94123456789" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
            </Button>
            <Button
              variant="ghost"
              className="h-14 gap-3 rounded-xl border-2 border-white/20 bg-white/10 px-8 text-base font-semibold text-white backdrop-blur-md hover:bg-white/20 hover:border-white/30 transition-all hover:scale-105"
              asChild
            >
              <a href="mailto:info@ceylexgems.com">
                <Mail className="h-5 w-5" />
                Email Us
              </a>
            </Button>
          </div>

          <div
            className="mx-auto w-fit animate-fade-in-up"
            style={{ animationDelay: "0.5s", animationFillMode: "both" }}
          >
            <div className="flex items-center gap-3 rounded-full border-2 border-white/30 bg-white/20 px-8 py-4 backdrop-blur-md transition-all hover:scale-105 hover:bg-white/25 hover:border-white/40">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 shadow-lg">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <span className="text-base font-semibold text-white drop-shadow">
                Secure transactions • 100% Certified • Worldwide shipping
              </span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div >
  )
}
