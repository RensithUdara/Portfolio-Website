import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"
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

      <section className="border-b border-border bg-gradient-to-br from-purple-50 via-blue-50 to-background py-20 animate-fade-in">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-4 border-amber-500 bg-amber-50 text-amber-700 transition-transform hover:scale-105">
              <span className="mr-1">💡</span> Knowledge Center
            </Badge>
            <h1 className="mb-4 font-serif text-4xl font-bold tracking-tight text-balance text-gray-900 sm:text-5xl">
              Learning Center
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed text-pretty">
              Educational articles about gemstones, certification, Sri Lankan gem heritage, and expert buying advice.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="border-b border-border bg-muted/30 py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button key={category} variant={category === "All" ? "default" : "outline"} size="sm">
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            Featured Article
          </Badge>
          <Card className="overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="aspect-[4/3] overflow-hidden lg:aspect-auto">
                <Image
                  src={articles[0].image || "/placeholder.svg"}
                  alt={articles[0].title}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="flex flex-col justify-center p-8 lg:p-12">
                <Badge variant="secondary" className="mb-3 w-fit">
                  {articles[0].category}
                </Badge>
                <h2 className="mb-4 font-serif text-3xl font-bold tracking-tight text-balance">{articles[0].title}</h2>
                <p className="mb-6 text-muted-foreground leading-relaxed">{articles[0].excerpt}</p>
                <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{articles[0].date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{articles[0].readTime}</span>
                  </div>
                </div>
                <Button className="w-fit gap-2" asChild>
                  <Link href={`/blog/${articles[0].id}`}>
                    Read Article <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="font-serif text-2xl font-bold">Recent Articles</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.slice(1).map((article) => (
              <Card key={article.id} className="group overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      width={600}
                      height={400}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <Badge variant="secondary" className="mb-3">
                      {article.category}
                    </Badge>
                    <h3 className="mb-3 font-serif text-xl font-semibold leading-tight text-balance">
                      {article.title}
                    </h3>
                    <p className="mb-4 text-sm text-muted-foreground leading-relaxed">{article.excerpt}</p>
                    <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="gap-2 bg-transparent" asChild>
                      <Link href={`/blog/${article.id}`}>
                        Read More <ArrowRight className="h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
