"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Star, ShoppingCart, Heart, Search } from "lucide-react"
import Link from "next/link"

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""
  const [searchQuery, setSearchQuery] = useState(query)

  // Mock search results - in real app, fetch based on query
  const searchResults = [
    {
      id: 1,
      name: "iPhone 15 Pro Max 256GB",
      price: 450000,
      originalPrice: 480000,
      image: "/iphone-15-pro-max.png",
      rating: 4.8,
      reviews: 124,
      category: "Mobile Phones",
      brand: "Apple",
      inStock: true,
      description: "Latest iPhone with titanium design and advanced camera system",
    },
    {
      id: 2,
      name: "Samsung Galaxy S24 Ultra",
      price: 420000,
      originalPrice: 450000,
      image: "/samsung-galaxy-s24-ultra.png",
      rating: 4.7,
      reviews: 89,
      category: "Mobile Phones",
      brand: "Samsung",
      inStock: true,
      description: "Flagship Android phone with S Pen and AI features",
    },
  ]

  const popularSearches = ["iPhone 15", "Samsung Galaxy", "MacBook", "AirPods", "Gaming Laptop", "Wireless Headphones"]

  const suggestions = [
    "Try different keywords",
    "Check your spelling",
    "Use more general terms",
    "Browse our categories instead",
  ]

  const hasResults = searchResults.length > 0

  return (
    <div className="min-h-screen">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Search Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex-1 max-w-2xl relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="search"
                placeholder="Search for products..."
                className="pl-10 pr-4 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button>Search</Button>
          </div>

          {query && (
            <div>
              <h1 className="text-2xl font-bold mb-2">Search Results for "{query}"</h1>
              <p className="text-muted-foreground">
                {hasResults ? `Found ${searchResults.length} products` : "No products found"}
              </p>
            </div>
          )}
        </div>

        {hasResults ? (
          /* Search Results */
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {searchResults.map((product) => (
                <Card key={product.id} className="group hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="relative">
                      <Link href={`/product/${product.id}`}>
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-full h-48 object-cover rounded-t-lg"
                        />
                      </Link>
                      {!product.inStock && (
                        <Badge className="absolute top-2 left-2" variant="destructive">
                          Out of Stock
                        </Badge>
                      )}
                      <Button
                        size="sm"
                        variant="ghost"
                        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="p-4 space-y-3">
                      <Link href={`/product/${product.id}`}>
                        <h3 className="font-semibold text-sm line-clamp-2 hover:text-primary">{product.name}</h3>
                      </Link>
                      <p className="text-xs text-muted-foreground line-clamp-2">{product.description}</p>
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
                          {product.originalPrice > product.price && (
                            <span className="text-sm text-muted-foreground line-through">
                              Rs. {product.originalPrice.toLocaleString()}
                            </span>
                          )}
                        </div>
                        <Button className="w-full" size="sm" disabled={!product.inStock}>
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          {product.inStock ? "Add to Cart" : "Out of Stock"}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ) : (
          /* No Results */
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <Search className="h-16 w-16 text-muted-foreground mx-auto mb-6" />
              <h2 className="text-2xl font-bold mb-4">No products found</h2>
              <p className="text-muted-foreground mb-8">
                We couldn't find any products matching your search. Try the suggestions below:
              </p>

              {/* Suggestions */}
              <div className="space-y-4 mb-8">
                <h3 className="font-semibold text-left">Suggestions:</h3>
                <ul className="text-left space-y-2 text-muted-foreground">
                  {suggestions.map((suggestion, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                      {suggestion}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Searches */}
              <div className="space-y-4">
                <h3 className="font-semibold">Popular Searches:</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {popularSearches.map((search) => (
                    <Link key={search} href={`/search?q=${encodeURIComponent(search)}`}>
                      <Badge
                        variant="outline"
                        className="hover:bg-primary hover:text-primary-foreground cursor-pointer"
                      >
                        {search}
                      </Badge>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <Button asChild>
                  <Link href="/products">Browse All Products</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
