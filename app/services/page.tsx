import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Sparkles, ArrowRight, CheckCircle2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      title: "Custom Ring Design",
      description: "Transform your chosen gemstone into a unique engagement or statement ring.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      title: "Pendant & Necklace",
      description: "Showcase your gem in an elegant pendant design that complements its beauty.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      title: "Earring Sets",
      description: "Matching gemstone earrings crafted to perfection with your selected stones.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      title: "Bracelet Design",
      description: "Elegant bracelets featuring your gemstones in contemporary or classic settings.",
      image: "/placeholder.svg?height=400&width=400",
    },
  ]

  const process = [
    {
      step: "1",
      title: "Choose Your Stone",
      description: "Browse our collection and select the perfect gemstone for your custom piece.",
    },
    {
      step: "2",
      title: "Design Consultation",
      description: "Share your vision and work with our designers to create a unique design.",
    },
    {
      step: "3",
      title: "Crafting",
      description: "Our master craftsmen bring your design to life with meticulous attention to detail.",
    },
    {
      step: "4",
      title: "Delivery",
      description: "Receive your custom piece with full certification and secure worldwide shipping.",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="relative overflow-hidden bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 py-24 animate-fade-in">
        <div className="absolute inset-0 bg-[url('/jewelry-pattern.jpg')] opacity-5" />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-3 shadow-lg transition-transform hover:scale-105">
                <Sparkles className="h-5 w-5 text-white" />
                <span className="text-base font-bold text-white">Custom Jewellery Services</span>
              </div>
              <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight text-balance text-gray-900 sm:text-6xl lg:text-7xl">
                Transform Your Vision Into{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Timeless Jewelry
                </span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed text-pretty">
                From selecting the perfect loose stone to creating your dream piece, our expert artisans bring your
                vision to life. We offer custom design, resizing, repairs, and complete jewellery creation services.
              </p>
              <Button
                size="lg"
                className="h-16 gap-3 bg-gradient-to-r from-amber-500 to-orange-500 px-8 text-lg font-bold text-white shadow-xl hover:from-amber-600 hover:to-orange-600 transition-all hover:scale-105"
                asChild
              >
                <Link href="#request-form">
                  <Sparkles className="h-5 w-5" />
                  Request a Design <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="relative animate-scale-in">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-3xl opacity-30 animate-pulse-slow" />
              <Image
                src="/luxury-custom-gemstone-jewelry-design.jpg"
                alt="Custom jewellery design"
                width={600}
                height={600}
                className="relative rounded-3xl shadow-2xl transition-transform hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              Custom Design Services
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
              From concept to completion, we create jewellery that tells your unique story.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-square overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      width={400}
                      height={400}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="mb-2 font-serif text-lg font-semibold">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-border bg-muted/30 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold tracking-tight text-balance sm:text-4xl">How It Works</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
              Our streamlined process ensures your custom jewellery exceeds expectations.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <div key={item.step} className="relative">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  {item.step}
                </div>
                <h3 className="mb-2 font-serif text-xl font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Resizing & Repairs */}
            <div className="space-y-4">
              <h3 className="font-serif text-2xl font-bold">Resizing & Repairs</h3>
              <p className="text-muted-foreground leading-relaxed">
                Professional jewellery repair and resizing services for your cherished pieces. Our skilled craftsmen
                restore and adjust your jewellery while preserving its original beauty.
              </p>
              <ul className="space-y-2">
                {["Ring resizing", "Stone replacement", "Prong repair", "Repolishing & cleaning"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Certification */}
            <div className="space-y-4">
              <h3 className="font-serif text-2xl font-bold">Certification Services</h3>
              <p className="text-muted-foreground leading-relaxed">
                All our custom pieces come with full gemstone certification from internationally recognized
                laboratories. We ensure authenticity and quality documentation for your investment.
              </p>
              <ul className="space-y-2">
                {[
                  "GIA certification available",
                  "Detailed gemstone reports",
                  "Valuation certificates",
                  "Export documentation",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Request Form */}
      <section id="request-form" className="bg-muted/30 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="mb-8 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                Request a Custom Design
              </h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Share your vision and we'll create a design quote tailored to your preferences.
              </p>
            </div>

            <Card>
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input id="name" placeholder="Your name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="your@email.com" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone / WhatsApp</Label>
                    <Input id="phone" type="tel" placeholder="+94 XXX XXX XXX" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Type *</Label>
                    <select
                      id="service"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="ring">Custom Ring</option>
                      <option value="pendant">Pendant/Necklace</option>
                      <option value="earrings">Earrings</option>
                      <option value="bracelet">Bracelet</option>
                      <option value="repair">Repair/Resizing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="gemstone">Gemstone Interest</Label>
                    <Input id="gemstone" placeholder="e.g., Blue Sapphire, 2-3 carats" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Design Description *</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe your vision, inspiration, or upload references..."
                      rows={5}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget Range (LKR)</Label>
                    <select
                      id="budget"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-1500k">Under 1,500,000</option>
                      <option value="1500k-3000k">1,500,000 - 3,000,000</option>
                      <option value="3000k-6000k">3,000,000 - 6,000,000</option>
                      <option value="over-6000k">Over 6,000,000</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timeline">Desired Timeline</Label>
                    <Input id="timeline" placeholder="e.g., 6-8 weeks, for anniversary" />
                  </div>

                  <Button type="submit" size="lg" className="w-full gap-2">
                    Submit Request <ArrowRight className="h-4 w-4" />
                  </Button>

                  <p className="text-center text-xs text-muted-foreground">
                    We'll respond within 24-48 hours with a design consultation and quote.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
