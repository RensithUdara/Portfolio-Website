import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mountain, Gem, Heart, Globe2 } from "lucide-react"
import Image from "next/image"

export default function StoryPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="relative overflow-hidden animate-fade-in">
        <div className="aspect-[21/9] w-full">
          <Image
            src="/sri-lanka-gem-mining-ratnapura-landscape.jpg"
            alt="Sri Lankan gem mining heritage"
            width={1400}
            height={600}
            className="h-full w-full object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent">
          <div className="container mx-auto flex h-full items-end px-4 pb-16 sm:px-6 lg:px-8">
            <div className="max-w-2xl animate-fade-in-up">
              <Badge
                variant="outline"
                className="mb-4 border-amber-500 bg-amber-50 text-amber-700 transition-transform hover:scale-105"
              >
                Island of Gems
              </Badge>
              <h1 className="mb-4 font-serif text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
                Our Heritage
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                Discover the timeless tradition of Sri Lankan gemstones and our commitment to ethical excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sri Lanka's Gem Legacy */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-6 animate-fade-in-up">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-balance text-gray-900 sm:text-4xl">
                Ratna-Dweepa: The Island of Gems
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  For over 2,500 years, Sri Lanka has been renowned as the "Island of Gems" – Ratna-Dweepa in Sanskrit.
                  Our island's geological treasures have adorned royal crowns, legendary collections, and inspired
                  countless tales of wonder.
                </p>
                <p>
                  The alluvial deposits of Ratnapura, known as the "City of Gems," contain an extraordinary variety of
                  precious stones. From the legendary blue sapphires of Ceylon to the rare padparadscha and star rubies,
                  our land produces some of the world's most coveted gemstones.
                </p>
                <p>
                  At CeyLex Gems, we honor this ancient heritage by sourcing directly from these historic mining
                  regions, ensuring each stone carries the authentic spirit of Sri Lankan craftsmanship.
                </p>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <Image
                src="/traditional-sri-lankan-gem-mining.jpg"
                alt="Traditional gem mining in Sri Lanka"
                width={600}
                height={600}
                className="rounded-2xl shadow-2xl transition-transform hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sourcing Regions */}
      <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center animate-fade-in-up">
            <h2 className="mb-4 font-serif text-3xl font-bold tracking-tight text-balance text-gray-900 sm:text-4xl">
              Our Sourcing Regions
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 text-pretty">
              We work directly with ethical mining operations in Sri Lanka's most renowned gemstone regions.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Mountain,
                title: "Ratnapura",
                desc: 'The legendary "City of Gems" produces our finest blue sapphires, star rubies, and cat\'s eye chrysoberyl. Rich alluvial deposits have been mined here for millennia.',
              },
              {
                icon: Gem,
                title: "Eheliyagoda",
                desc: "Known for exceptional padparadscha sapphires and pink spinels. This region's unique geological conditions create stones with unmatched color saturation.",
              },
              {
                icon: Heart,
                title: "Meetiyagoda",
                desc: "The primary source of Ceylon's famous blue-sheen moonstones. The feldspar deposits here produce moonstones with exceptional adularescence.",
              },
            ].map((region, index) => (
              <Card
                key={region.title}
                className="border-0 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "both" }}
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 transition-transform hover:scale-110">
                    <region.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-2 font-serif text-xl font-bold text-gray-900">{region.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{region.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative order-2 lg:order-1">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="CeyLex Gems showroom in Hikkaduwa"
                width={600}
                height={600}
                className="rounded-lg"
              />
            </div>

            <div className="order-1 space-y-6 lg:order-2">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                Ethical & Sustainable Practices
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We believe that beauty should never come at the cost of ethical responsibility. Every gemstone in our
                  collection is sourced through transparent, sustainable mining practices that prioritize the welfare of
                  local communities and environmental protection.
                </p>
                <p>
                  Our partnerships with family-run mining operations ensure fair wages, safe working conditions, and
                  minimal environmental impact. We maintain complete traceability from mine to market, documenting each
                  stone's journey.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Globe2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold">Transparent Sourcing</h4>
                    <p className="text-sm text-muted-foreground">Full traceability for every stone</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Heart className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold">Fair Trade</h4>
                    <p className="text-sm text-muted-foreground">Supporting local communities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hikkaduwa Showroom */}
      <section className="border-y border-border bg-muted/30 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              Visit Our Hikkaduwa Showroom
            </h2>
            <p className="mb-8 text-lg text-muted-foreground leading-relaxed text-pretty">
              Located in the heart of Sri Lanka's southern coast, our showroom welcomes collectors, jewelers, and
              travelers seeking authentic Ceylon gemstones. Experience our collection in person and discover the story
              behind each stone.
            </p>
            <div className="aspect-video overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=600&width=1000"
                alt="Hikkaduwa coastal location"
                width={1000}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
