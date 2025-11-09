import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, Lightbulb } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function BlogPage() {
  const articles = [
    {
      id: 1,
      title: "How to Choose the Perfect Ceylon Sapphire",
      excerpt:
        "A comprehensive guide to selecting the ideal blue sapphire for your engagement ring or collection, covering color, clarity, cut, and certification.",
      category: "Buying Guide",
      readTime: "8 min read",
      date: "November 5, 2025",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 2,
      title: "Understanding Gemstone Certification: What You Need to Know",
      excerpt:
        "Learn about laboratory certificates, what information they provide, and why certification is essential for gemstone purchases.",
      category: "Education",
      readTime: "6 min read",
      date: "October 28, 2025",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 3,
      title: "Why Sri Lankan Sapphires Are Special",
      excerpt:
        "Discover what makes Ceylon sapphires unique compared to gems from other origins, from their distinctive color to geological formation.",
      category: "Heritage",
      readTime: "7 min read",
      date: "October 20, 2025",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 4,
      title: "Gemstones as Investment: A Practical Guide",
      excerpt:
        "Expert insights on investing in colored gemstones, including which varieties hold value, market trends, and storage considerations.",
      category: "Investment",
      readTime: "10 min read",
      date: "October 12, 2025",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 5,
      title: "The Rare Padparadscha: Sunset in a Stone",
      excerpt:
        "Explore the mystique of padparadscha sapphires, their unique pink-orange color, rarity, and what makes them highly sought after.",
      category: "Gem Species",
      readTime: "5 min read",
      date: "October 5, 2025",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 6,
      title: "Heat Treatment vs Unheated Gemstones",
      excerpt:
        "Understanding gemstone treatments, how they affect value, and the difference between heated and naturally colored stones.",
      category: "Education",
      readTime: "6 min read",
      date: "September 28, 2025",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  const categories = ["All", "Buying Guide", "Education", "Heritage", "Investment", "Gem Species"]

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="mt-20 border-b border-border bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-24 animate-fade-in">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center animate-fade-in-up">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 shadow-2xl animate-pulse-slow">
              <Lightbulb className="h-10 w-10 text-white" />
            </div>
            <Badge className="mb-6 border-0 bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2 text-base text-white shadow-lg transition-transform hover:scale-105">
              Knowledge Center
            </Badge>
            <h1 className="mb-6 font-serif text-5xl font-bold tracking-tight text-balance text-gray-900 sm:text-6xl">
              Your Guide to{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Ceylon Gemstones
              </span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed text-pretty">
              From understanding certifications to making informed investments, explore our educational resources
              designed to help you navigate the world of Sri Lankan gemstones.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-white py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 animate-fade-in">
            {categories.map((category, index) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="lg"
                className={
                  category === "All"
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
                    : "hover:border-blue-500 hover:text-blue-700 transition-all"
                }
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "both" }}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 animate-fade-in-up">
            <Badge className="border-0 bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-2 text-white shadow-lg">
              ⭐ Featured Article
            </Badge>
          </div>
          <Card className="overflow-hidden border-0 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-3xl animate-scale-in">
            <div className="grid lg:grid-cols-2">
              <div className="aspect-[4/3] overflow-hidden lg:aspect-auto">
                <Image
                  src={articles[0].image || "/placeholder.svg"}
                  alt={articles[0].title}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardContent className="flex flex-col justify-center bg-gradient-to-br from-white to-blue-50/30 p-8 lg:p-12">
                <Badge className="mb-4 w-fit border-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md">
                  {articles[0].category}
                </Badge>
                <h2 className="mb-6 font-serif text-4xl font-bold tracking-tight text-balance text-gray-900">
                  {articles[0].title}
                </h2>
                <p className="mb-8 text-lg text-gray-600 leading-relaxed">{articles[0].excerpt}</p>
                <div className="mb-8 flex flex-wrap items-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                      <Calendar className="h-4 w-4 text-blue-600" />
                    </div>
                    <span className="font-medium">{articles[0].date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100">
                      <Clock className="h-4 w-4 text-purple-600" />
                    </div>
                    <span className="font-medium">{articles[0].readTime}</span>
                  </div>
                </div>
                <Button
                  size="lg"
                  className="w-fit gap-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
                  asChild
                >
                  <Link href={`/blog/${articles[0].id}`}>
                    Read Full Article <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 animate-fade-in-up">
            <h2 className="mb-4 font-serif text-4xl font-bold text-gray-900">Recent Articles</h2>
            <p className="text-lg text-gray-600">Expand your knowledge of Ceylon gemstones with our expert guides</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.slice(1).map((article, index) => (
              <Card
                key={article.id}
                className="group overflow-hidden border-0 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "both" }}
              >
                <CardContent className="p-0">
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      width={600}
                      height={400}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <Badge className="mb-4 border-0 bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md">
                      {article.category}
                    </Badge>
                    <h3 className="mb-4 font-serif text-2xl font-bold leading-tight text-balance text-gray-900 group-hover:text-blue-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="mb-6 text-base text-gray-600 leading-relaxed">{article.excerpt}</p>
                    <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full gap-2 hover:bg-blue-50 hover:border-blue-500 hover:text-blue-700 transition-all bg-transparent"
                      asChild
                    >
                      <Link href={`/blog/${article.id}`}>
                        Read Article <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div
            className="mt-16 text-center animate-fade-in-up"
            style={{ animationDelay: "0.6s", animationFillMode: "both" }}
          >
            <Button
              size="lg"
              variant="outline"
              className="px-8 hover:bg-blue-50 hover:border-blue-500 hover:text-blue-700 transition-all bg-transparent"
            >
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
