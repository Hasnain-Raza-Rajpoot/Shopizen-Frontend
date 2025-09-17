import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, User, ArrowRight, Search, Tag } from "lucide-react"

export default function BlogPage() {
  const featuredPost = {
    title: "The Future of E-commerce in Pakistan: Trends to Watch in 2024",
    excerpt:
      "Explore the emerging trends shaping Pakistan's e-commerce landscape, from mobile commerce to AI-powered personalization.",
    author: "Sarah Ahmed",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "Industry Insights",
    image: "/futuristic-e-commerce-technology.jpg",
  }

  const blogPosts = [
    {
      title: "How to Choose the Perfect Smartphone in 2024",
      excerpt: "A comprehensive guide to selecting the right smartphone based on your needs, budget, and preferences.",
      author: "Ahmed Khan",
      date: "December 12, 2024",
      readTime: "6 min read",
      category: "Tech Guide",
      image: "/latest-smartphones-comparison.jpg",
    },
    {
      title: "Sustainable Shopping: Making Eco-Friendly Choices Online",
      excerpt: "Learn how to make environmentally conscious purchasing decisions while shopping online.",
      author: "Fatima Ali",
      date: "December 10, 2024",
      readTime: "5 min read",
      category: "Lifestyle",
      image: "/eco-friendly-sustainable-products.jpg",
    },
    {
      title: "Home Appliance Buying Guide: Winter Edition",
      excerpt: "Essential home appliances to keep your home comfortable during the winter season.",
      author: "Hassan Sheikh",
      date: "December 8, 2024",
      readTime: "7 min read",
      category: "Home & Living",
      image: "/winter-home-appliances-heaters.jpg",
    },
    {
      title: "Fashion Trends 2024: What's Hot This Season",
      excerpt: "Discover the latest fashion trends and how to incorporate them into your wardrobe.",
      author: "Ayesha Malik",
      date: "December 5, 2024",
      readTime: "4 min read",
      category: "Fashion",
      image: "/2024-fashion-trends-clothing.jpg",
    },
    {
      title: "Online Security: Protecting Yourself While Shopping",
      excerpt: "Essential tips to keep your personal and financial information safe during online shopping.",
      author: "Omar Rashid",
      date: "December 3, 2024",
      readTime: "6 min read",
      category: "Security",
      image: "/online-security-shopping-safety.jpg",
    },
    {
      title: "Gift Ideas for Every Budget: Holiday Shopping Made Easy",
      excerpt: "Find the perfect gifts for your loved ones without breaking the bank.",
      author: "Zara Khan",
      date: "December 1, 2024",
      readTime: "5 min read",
      category: "Gift Guide",
      image: "/holiday-gifts-presents-shopping.jpg",
    },
  ]

  const categories = [
    "All Posts",
    "Tech Guide",
    "Industry Insights",
    "Lifestyle",
    "Home & Living",
    "Fashion",
    "Security",
    "Gift Guide",
  ]

  return (
    <div className="min-h-screen">
      <Header />

      <main className="py-8">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              EcomPK Blog
            </Badge>
            <h1 className="text-4xl font-bold mb-4 text-balance">Latest News & Insights</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Stay updated with the latest trends, tips, and insights from the world of e-commerce and technology.
            </p>
          </div>

          {/* Search and Filter */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input placeholder="Search articles..." className="pl-10" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category, index) => (
                    <Button key={index} variant={index === 0 ? "default" : "outline"} size="sm" className="text-xs">
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Featured Post */}
          <Card className="mb-12">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative">
                  <img
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover rounded-l-lg"
                  />
                  <Badge className="absolute top-4 left-4">Featured</Badge>
                </div>
                <div className="p-8">
                  <Badge variant="outline" className="mb-4">
                    {featuredPost.category}
                  </Badge>
                  <h2 className="text-2xl font-bold mb-4 text-balance">{featuredPost.title}</h2>
                  <p className="text-muted-foreground mb-6 text-pretty">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {featuredPost.date}
                    </div>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <Button>
                    Read More
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge variant="secondary" className="absolute top-3 left-3">
                      {post.category}
                    </Badge>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold mb-3 text-balance group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 text-pretty">{post.excerpt}</p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="p-0 h-auto">
                      Read More
                      <ArrowRight className="h-3 w-3 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mb-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>

          {/* Newsletter Signup */}
          <Card>
            <CardContent className="p-8 text-center">
              <Tag className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Subscribe to our newsletter and never miss the latest articles, product updates, and exclusive offers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input type="email" placeholder="Enter your email address" className="flex-1" />
                <Button>Subscribe</Button>
              </div>
              <p className="text-xs text-muted-foreground mt-4">We respect your privacy. Unsubscribe at any time.</p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
