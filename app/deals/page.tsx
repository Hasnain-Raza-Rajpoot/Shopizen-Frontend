import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ShoppingCart, Heart, Clock, Zap, Gift, Percent, Tag } from "lucide-react"
import Link from "next/link"

export default function DealsPage() {
  const flashDeals = [
    {
      id: 1,
      name: "iPhone 15 Pro Max 256GB",
      price: 420000,
      originalPrice: 480000,
      image: "/iphone-15-pro-max.png",
      rating: 4.8,
      reviews: 124,
      discount: 13,
      timeLeft: "2h 45m",
      sold: 85,
      total: 100,
    },
    {
      id: 2,
      name: "Samsung Galaxy S24 Ultra",
      price: 380000,
      originalPrice: 450000,
      image: "/samsung-galaxy-s24-ultra.png",
      rating: 4.7,
      reviews: 89,
      discount: 16,
      timeLeft: "1h 20m",
      sold: 67,
      total: 80,
    },
    {
      id: 3,
      name: "MacBook Air M3 13-inch",
      price: 350000,
      originalPrice: 400000,
      image: "/macbook-air-m3.png",
      rating: 4.9,
      reviews: 156,
      discount: 13,
      timeLeft: "3h 15m",
      sold: 42,
      total: 50,
    },
    {
      id: 4,
      name: "Sony WH-1000XM5 Headphones",
      price: 75000,
      originalPrice: 95000,
      image: "/sony-wh-1000xm5.png",
      rating: 4.6,
      reviews: 203,
      discount: 21,
      timeLeft: "4h 30m",
      sold: 156,
      total: 200,
    },
  ]

  const dailyDeals = [
    {
      id: 5,
      name: "Dell XPS 13 Laptop",
      price: 280000,
      originalPrice: 320000,
      image: "/placeholder.svg?key=laptop1",
      rating: 4.5,
      reviews: 78,
      discount: 13,
      badge: "Today Only",
    },
    {
      id: 6,
      name: "iPad Air 5th Gen",
      price: 180000,
      originalPrice: 220000,
      image: "/placeholder.svg?key=ipad1",
      rating: 4.7,
      reviews: 92,
      discount: 18,
      badge: "Limited Stock",
    },
    {
      id: 7,
      name: "AirPods Pro 2nd Gen",
      price: 65000,
      originalPrice: 75000,
      image: "/placeholder.svg?key=airpods1",
      rating: 4.8,
      reviews: 145,
      discount: 13,
      badge: "Best Seller",
    },
    {
      id: 8,
      name: 'Samsung 55" 4K Smart TV',
      price: 150000,
      originalPrice: 180000,
      image: "/placeholder.svg?key=tv1",
      rating: 4.4,
      reviews: 67,
      discount: 17,
      badge: "Free Delivery",
    },
    {
      id: 9,
      name: "Nintendo Switch OLED",
      price: 85000,
      originalPrice: 95000,
      image: "/placeholder.svg?key=switch1",
      rating: 4.6,
      reviews: 134,
      discount: 11,
      badge: "Gaming Deal",
    },
    {
      id: 10,
      name: "Dyson V15 Vacuum Cleaner",
      price: 120000,
      originalPrice: 140000,
      image: "/placeholder.svg?key=dyson1",
      rating: 4.7,
      reviews: 89,
      discount: 14,
      badge: "Home Essential",
    },
  ]

  const categories = [
    { name: "Smartphones", discount: "Up to 50%", icon: Zap },
    { name: "Laptops & Computers", discount: "Up to 40%", icon: Tag },
    { name: "Audio & Headphones", discount: "Up to 35%", icon: Gift },
    { name: "Gaming & Consoles", discount: "Up to 30%", icon: Percent },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      <main className="py-8">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Special Offers
            </Badge>
            <h1 className="text-4xl font-bold mb-4 text-balance">Amazing Electronics Deals</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Discover incredible savings on the latest smartphones, laptops, gaming gear, and audio devices. Limited
              time offers you don't want to miss!
            </p>
          </div>

          {/* Deal Categories */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {categories.map((category, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <category.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{category.name}</h3>
                  <p className="text-sm text-primary font-medium">{category.discount}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Flash Deals */}
          <Card className="mb-12">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <Zap className="h-5 w-5 text-red-500" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Flash Deals</h2>
                    <p className="text-sm text-muted-foreground">Limited time offers - Hurry up!</p>
                  </div>
                </div>
                <Button variant="outline" asChild>
                  <Link href="/products?filter=flash-deals">View All</Link>
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {flashDeals.map((product) => (
                  <Card key={product.id} className="group hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <div className="relative">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <Badge className="absolute top-2 left-2 bg-red-500">-{product.discount}%</Badge>
                        <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {product.timeLeft}
                        </div>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 hover:bg-white"
                        >
                          <Heart className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="p-4 space-y-3">
                        <h3 className="font-semibold text-sm line-clamp-2">{product.name}</h3>
                        <div className="flex items-center gap-1">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-3 w-3 ${
                                  i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-xs text-muted-foreground">({product.reviews})</span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-primary">Rs. {product.price.toLocaleString()}</span>
                            <span className="text-sm text-muted-foreground line-through">
                              Rs. {product.originalPrice.toLocaleString()}
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-red-500 h-2 rounded-full"
                              style={{ width: `${(product.sold / product.total) * 100}%` }}
                            />
                          </div>
                          <p className="text-xs text-muted-foreground">
                            {product.sold} sold / {product.total} total
                          </p>
                          <Button className="w-full" size="sm">
                            <ShoppingCart className="h-4 w-4 mr-2" />
                            Add to Cart
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Daily Deals */}
          <Card className="mb-12">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Gift className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Daily Deals</h2>
                    <p className="text-sm text-muted-foreground">Fresh deals every day</p>
                  </div>
                </div>
                <Button variant="outline" asChild>
                  <Link href="/products?filter=daily-deals">View All</Link>
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {dailyDeals.map((product) => (
                  <Card key={product.id} className="group hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <div className="relative">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <Badge className="absolute top-2 left-2 bg-green-500">-{product.discount}%</Badge>
                        <Badge variant="secondary" className="absolute top-2 right-2">
                          {product.badge}
                        </Badge>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 hover:bg-white"
                        >
                          <Heart className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="p-4 space-y-3">
                        <h3 className="font-semibold text-sm line-clamp-2">{product.name}</h3>
                        <div className="flex items-center gap-1">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-3 w-3 ${
                                  i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-xs text-muted-foreground">({product.reviews})</span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-primary">Rs. {product.price.toLocaleString()}</span>
                            <span className="text-sm text-muted-foreground line-through">
                              Rs. {product.originalPrice.toLocaleString()}
                            </span>
                          </div>
                          <Button className="w-full" size="sm">
                            <ShoppingCart className="h-4 w-4 mr-2" />
                            Add to Cart
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Deal of the Day */}
          <Card className="mb-12">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge className="mb-4 bg-gradient-to-r from-purple-500 to-pink-500">Deal of the Day</Badge>
                  <h2 className="text-3xl font-bold mb-4">PlayStation 5 Console</h2>
                  <p className="text-muted-foreground mb-6">
                    Experience lightning-fast loading with an ultra-high speed SSD, deeper immersion with support for
                    haptic feedback, adaptive triggers and 3D Audio.
                  </p>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">(4.8) 256 reviews</span>
                  </div>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-3xl font-bold text-primary">Rs. 135,000</span>
                    <span className="text-xl text-muted-foreground line-through">Rs. 150,000</span>
                    <Badge className="bg-red-500">-10%</Badge>
                  </div>
                  <div className="flex items-center gap-2 mb-6">
                    <Clock className="h-4 w-4 text-red-500" />
                    <span className="text-sm font-medium text-red-500">Offer ends in 18h 42m</span>
                  </div>
                  <div className="flex gap-4">
                    <Button size="lg" className="flex-1">
                      <ShoppingCart className="h-5 w-5 mr-2" />
                      Add to Cart
                    </Button>
                    <Button variant="outline" size="lg">
                      <Heart className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <img src="/playstation-5-console-gaming-setup.jpg" alt="PlayStation 5" className="rounded-lg shadow-lg" />
                  <Badge className="absolute top-4 right-4 bg-red-500 text-lg px-3 py-2">-10%</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Newsletter Signup */}
          <Card>
            <CardContent className="p-8 text-center">
              <Tag className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Never Miss a Tech Deal</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Subscribe to our newsletter and be the first to know about flash sales on electronics, exclusive tech
                discounts, and special offers on the latest gadgets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
                <Button>Subscribe Now</Button>
              </div>
              <p className="text-xs text-muted-foreground mt-4">Join 50,000+ tech enthusiasts. Unsubscribe anytime.</p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
