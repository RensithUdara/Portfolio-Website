"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, SlidersHorizontal } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function ShopPage() {
  const [selectedType, setSelectedType] = useState("all")
  const [selectedCarat, setSelectedCarat] = useState("all")
  const [priceRange, setPriceRange] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const gemstones = [
    {
      id: 1,
      name: "Royal Blue Sapphire",
      type: "sapphire",
      carat: "3.45",
      cut: "Oval",
      origin: "Ratnapura",
      treatment: "Heated",
      price: 855000,
      certified: true,
      inStock: true,
      image: "/royal-blue-sapphire-oval-cut.jpg",
    },
    {
      id: 2,
      name: "Padparadscha Sapphire",
      type: "sapphire",
      carat: "2.18",
      cut: "Cushion",
      origin: "Eheliyagoda",
      treatment: "Unheated",
      price: 1260000,
      certified: true,
      inStock: true,
      image: "/padparadscha-sapphire-cushion-cut.jpg",
    },
    {
      id: 3,
      name: "Ceylon Moonstone",
      type: "moonstone",
      carat: "5.60",
      cut: "Cabochon",
      origin: "Meetiyagoda",
      treatment: "Untreated",
      price: 267000,
      certified: true,
      inStock: true,
      image: "/ceylon-blue-moonstone-cabochon.jpg",
    },
    {
      id: 4,
      name: "Star Ruby",
      type: "ruby",
      carat: "4.25",
      cut: "Cabochon",
      origin: "Ratnapura",
      treatment: "Heated",
      price: 585000,
      certified: true,
      inStock: true,
      image: "/red-star-ruby-gemstone-asterism.jpg",
    },
    {
      id: 5,
      name: "Yellow Sapphire",
      type: "sapphire",
      carat: "4.80",
      cut: "Cushion",
      origin: "Ratnapura",
      treatment: "Unheated",
      price: 960000,
      certified: true,
      inStock: true,
      image: "/yellow-sapphire-cushion-cut.jpg",
    },
    {
      id: 6,
      name: "Pink Spinel",
      type: "spinel",
      carat: "3.15",
      cut: "Oval",
      origin: "Eheliyagoda",
      treatment: "Untreated",
      price: 720000,
      certified: true,
      inStock: true,
      image: "/pink-spinel-oval-gemstone.jpg",
    },
    {
      id: 7,
      name: "Color Change Garnet",
      type: "garnet",
      carat: "2.90",
      cut: "Round",
      origin: "Ratnapura",
      treatment: "Untreated",
      price: 495000,
      certified: true,
      inStock: true,
      image: "/color-change-garnet-round.jpg",
    },
    {
      id: 8,
      name: "Cornflower Blue Sapphire",
      type: "sapphire",
      carat: "2.75",
      cut: "Round",
      origin: "Ratnapura",
      treatment: "Heated",
      price: 1140000,
      certified: true,
      inStock: false,
      image: "/cornflower-blue-sapphire-round.jpg",
    },
  ]

  const filteredGemstones = gemstones.filter((gem) => {
    if (searchQuery && !gem.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false
    }

    if (selectedType !== "all" && gem.type !== selectedType) return false

    if (selectedCarat !== "all") {
      const carat = Number.parseFloat(gem.carat)
      if (selectedCarat === "under-2" && carat >= 2) return false
      if (selectedCarat === "2-4" && (carat < 2 || carat > 4)) return false
      if (selectedCarat === "over-4" && carat <= 4) return false
    }

    if (priceRange !== "all") {
      if (priceRange === "under-300k" && gem.price >= 300000) return false
      if (priceRange === "300k-750k" && (gem.price < 300000 || gem.price > 750000)) return false
      if (priceRange === "750k-1200k" && (gem.price < 750000 || gem.price > 1200000)) return false
      if (priceRange === "over-1200k" && gem.price <= 1200000) return false
    }

    return true
  })

  const resetFilters = () => {
    setSelectedType("all")
    setSelectedCarat("all")
    setPriceRange("all")
    setSearchQuery("")
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="border-b border-border bg-gradient-to-br from-purple-50 via-blue-50 to-background py-16 animate-fade-in">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Badge className="mb-4 border-blue-600 bg-blue-50 text-blue-700 transition-transform hover:scale-105">
            Premium Collection
          </Badge>
          <h1 className="mb-4 font-serif text-4xl font-bold tracking-tight sm:text-5xl">Shop Gemstones</h1>
          <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Browse our curated collection of certified Sri Lankan gemstones, each hand-picked for exceptional quality
            and authenticity.
          </p>
        </div>
      </section>

      {/* Filters & Products */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[300px,1fr]">
            <aside
              className="space-y-6 animate-fade-in-up"
              style={{ animationDelay: "0.1s", animationFillMode: "both" }}
            >
              <div className="rounded-xl border-0 bg-white p-6 shadow-lg transition-all hover:shadow-xl">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600">
                    <SlidersHorizontal className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="font-serif text-xl font-bold">Filters</h2>
                </div>

                <div className="space-y-6">
                  {/* Search */}
                  <div className="space-y-2">
                    <Label htmlFor="search" className="text-sm font-semibold">
                      Search Gemstones
                    </Label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        id="search"
                        placeholder="e.g., Blue Sapphire"
                        className="pl-9 transition-all focus:ring-2 focus:ring-blue-500"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Gem Type */}
                  <div className="space-y-2">
                    <Label htmlFor="type" className="text-sm font-semibold">
                      Gem Type
                    </Label>
                    <Select value={selectedType} onValueChange={setSelectedType}>
                      <SelectTrigger id="type" className="bg-background transition-all hover:border-blue-500">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="sapphire">Sapphire</SelectItem>
                        <SelectItem value="ruby">Ruby</SelectItem>
                        <SelectItem value="moonstone">Moonstone</SelectItem>
                        <SelectItem value="spinel">Spinel</SelectItem>
                        <SelectItem value="garnet">Garnet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Carat Weight */}
                  <div className="space-y-2">
                    <Label htmlFor="carat" className="text-sm font-semibold">
                      Carat Weight
                    </Label>
                    <Select value={selectedCarat} onValueChange={setSelectedCarat}>
                      <SelectTrigger id="carat" className="bg-background transition-all hover:border-blue-500">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Sizes</SelectItem>
                        <SelectItem value="under-2">Under 2 ct</SelectItem>
                        <SelectItem value="2-4">2-4 ct</SelectItem>
                        <SelectItem value="over-4">Over 4 ct</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Price Range */}
                  <div className="space-y-2">
                    <Label htmlFor="price" className="text-sm font-semibold">
                      Price Range (LKR)
                    </Label>
                    <Select value={priceRange} onValueChange={setPriceRange}>
                      <SelectTrigger id="price" className="bg-background transition-all hover:border-blue-500">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Prices</SelectItem>
                        <SelectItem value="under-300k">Under 300,000</SelectItem>
                        <SelectItem value="300k-750k">300,000 - 750,000</SelectItem>
                        <SelectItem value="750k-1200k">750,000 - 1,200,000</SelectItem>
                        <SelectItem value="over-1200k">Over 1,200,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Certification */}
                  <div className="space-y-2">
                    <Label htmlFor="certified" className="text-sm font-semibold">
                      Certification
                    </Label>
                    <Select defaultValue="all">
                      <SelectTrigger id="certified" className="bg-background transition-all hover:border-blue-500">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All</SelectItem>
                        <SelectItem value="yes">Certified Only</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full bg-background hover:bg-blue-50 hover:border-blue-500 hover:text-blue-700 transition-all"
                    onClick={resetFilters}
                  >
                    Reset All Filters
                  </Button>
                </div>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
              <div className="mb-6 flex items-center justify-between flex-wrap gap-4">
                <p className="text-sm font-medium text-muted-foreground">
                  Showing <span className="font-bold text-foreground">{filteredGemstones.length}</span> of{" "}
                  {gemstones.length} gemstones
                </p>
                <Select defaultValue="featured">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="carat">Carat Weight</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredGemstones.map((gem, index) => (
                  <Card
                    key={gem.id}
                    className="group overflow-hidden border-0 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.05}s`, animationFillMode: "both" }}
                  >
                    <CardContent className="p-0">
                      <div className="relative aspect-square overflow-hidden">
                        <Image
                          src={gem.image || "/placeholder.svg"}
                          alt={gem.name}
                          width={400}
                          height={400}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        {gem.certified && (
                          <Badge className="absolute right-3 top-3 border-emerald-500 bg-emerald-500 text-white shadow-lg transition-transform group-hover:scale-110">
                            Certified
                          </Badge>
                        )}
                        {!gem.inStock && (
                          <Badge className="absolute left-3 top-3 bg-destructive text-white shadow-lg">Sold</Badge>
                        )}
                      </div>
                      <div className="p-5">
                        <h3 className="mb-2 font-serif text-xl font-bold text-gray-900">{gem.name}</h3>
                        <div className="mb-3 space-y-1 text-sm text-gray-600">
                          <p className="font-medium">
                            {gem.carat} ct • {gem.cut} • {gem.origin}
                          </p>
                          <p>Treatment: {gem.treatment}</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="font-serif text-xl font-bold text-blue-600">
                            LKR {gem.price.toLocaleString()}
                          </span>
                          <Button
                            size="sm"
                            variant={gem.inStock ? "default" : "outline"}
                            className={
                              gem.inStock
                                ? "bg-amber-500 text-black hover:bg-amber-600 transition-all hover:scale-105"
                                : ""
                            }
                            asChild
                          >
                            <Link href={`/shop/${gem.id}`}>{gem.inStock ? "View Details" : "View"}</Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredGemstones.length === 0 && (
                <div className="flex flex-col items-center justify-center rounded-xl bg-gray-50 py-16 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-200">
                    <Search className="h-8 w-8 text-gray-400" />
                  </div>
                  <p className="text-lg font-bold text-gray-900 mb-2">No gemstones found</p>
                  <p className="text-sm text-gray-600 mb-4">Try adjusting your search or filters</p>
                  <Button
                    variant="outline"
                    className="hover:bg-blue-50 hover:text-blue-700 bg-transparent"
                    onClick={resetFilters}
                  >
                    Clear All Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
