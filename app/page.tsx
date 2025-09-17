import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart, Heart, Truck, Shield, Headphones, RotateCcw } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const featuredProducts = [
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      price: 450000,
      originalPrice: 480000,
      image: "/iphone-15-pro-max.png",
      rating: 4.8,
      reviews: 124,
      badge: "Best Seller",
    },
    {
      id: 2,
      name: "Samsung Galaxy S24 Ultra",
      price: 420000,
      originalPrice: 450000,
      image: "/samsung-galaxy-s24-ultra.png",
      rating: 4.7,
      reviews: 89,
      badge: "New Arrival",
    },
    {
      id: 3,
      name: "MacBook Air M3",
      price: 380000,
      originalPrice: 400000,
      image: "/macbook-air-m3.png",
      rating: 4.9,
      reviews: 156,
      badge: "Editor's Choice",
    },
    {
      id: 4,
      name: "Sony WH-1000XM5",
      price: 85000,
      originalPrice: 95000,
      image: "/sony-wh-1000xm5.png",
      rating: 4.6,
      reviews: 203,
      badge: "Sale",
    },
  ]

  const categories = [
    {
      name: "Smartphones",
      image: "/electronics-category.png",
      count: "850+ items",
    },
    {
      name: "Laptops & Computers",
      image: "/modern-laptops-and-computers-collection.jpg",
      count: "420+ items",
    },
    {
      name: "Audio & Headphones",
      image: "/premium-headphones-and-audio-devices.jpg",
      count: "380+ items",
    },
    {
      name: "Gaming & Consoles",
      image: "/gaming-consoles-and-accessories.jpg",
      count: "290+ items",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary/10 to-secondary/10 py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge variant="secondary" className="w-fit">
                  New Year Sale - Up to 50% Off
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-balance">
                  Pakistan's Premier <span className="text-primary">Electronics</span> Store
                </h1>
                <p className="text-lg text-muted-foreground text-pretty">
                  Discover the latest smartphones, laptops, gaming gear, and audio devices. Authentic products with
                  warranty and free delivery across Pakistan on orders over Rs. 2000.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <Link href="/products">Shop Now</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/deals">View Deals</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img src="/modern-electronics-store-hero-image-with-smartphon.jpg" alt="Latest Electronics" className="rounded-lg shadow-2xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Truck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold">Free Shipping</h3>
                <p className="text-sm text-muted-foreground">Free delivery on orders over Rs. 2000</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold">Secure Payment</h3>
                <p className="text-sm text-muted-foreground">100% secure payment processing</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Headphones className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold">24/7 Support</h3>
                <p className="text-sm text-muted-foreground">Round the clock customer support</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <RotateCcw className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold">Easy Returns</h3>
                <p className="text-sm text-muted-foreground">30-day return policy</p>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Shop by Category</h2>
              <p className="text-muted-foreground">Explore our comprehensive range of electronic devices</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category) => (
                <Link key={category.name} href={`/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`}>
                  <Card className="group hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <img
                        src={category.image || "/placeholder.svg"}
                        alt={category.name}
                        className="w-24 h-24 mx-auto mb-4 rounded-lg group-hover:scale-105 transition-transform"
                      />
                      <h3 className="font-semibold mb-2">{category.name}</h3>
                      <p className="text-sm text-muted-foreground">{category.count}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
              <p className="text-muted-foreground">Discover our most popular items</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <Card key={product.id} className="group hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <Badge className="absolute top-2 left-2" variant="secondary">
                        {product.badge}
                      </Badge>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
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
            <div className="text-center mt-8">
              <Button variant="outline" size="lg" asChild>
                <Link href="/products">View All Products</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and be the first to know about new electronics launches, exclusive tech deals,
              and special offers on the latest gadgets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg text-foreground"
              />
              <Button variant="secondary">Subscribe</Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
