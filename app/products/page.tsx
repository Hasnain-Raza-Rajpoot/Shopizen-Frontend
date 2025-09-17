"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, ShoppingCart, Heart, Filter, Grid, List, X } from "lucide-react"
import Link from "next/link"

export default function ProductsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [showFilters, setShowFilters] = useState(false)
  const [priceRange, setPriceRange] = useState([0, 500000])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])

  const products = [
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
    {
      id: 3,
      name: "MacBook Air M3 13-inch",
      price: 380000,
      originalPrice: 400000,
      image: "/macbook-air-m3.png",
      rating: 4.9,
      reviews: 156,
      category: "Laptops",
      brand: "Apple",
      inStock: true,
      description: "Ultra-thin laptop with M3 chip and all-day battery life",
    },
    {
      id: 4,
      name: "Sony WH-1000XM5 Headphones",
      price: 85000,
      originalPrice: 95000,
      image: "/sony-wh-1000xm5.png",
      rating: 4.6,
      reviews: 203,
      category: "Audio",
      brand: "Sony",
      inStock: true,
      description: "Premium noise-canceling wireless headphones",
    },
    {
      id: 5,
      name: "Dell XPS 13 Plus",
      price: 320000,
      originalPrice: 350000,
      image: "/dell-xps-13-laptop.jpg",
      rating: 4.5,
      reviews: 78,
      category: "Laptops",
      brand: "Dell",
      inStock: false,
      description: "Premium ultrabook with InfinityEdge display",
    },
    {
      id: 6,
      name: "AirPods Pro 2nd Gen",
      price: 65000,
      originalPrice: 70000,
      image: "/airpods-pro-wireless-earbuds.jpg",
      rating: 4.7,
      reviews: 312,
      category: "Audio",
      brand: "Apple",
      inStock: true,
      description: "Advanced noise cancellation and spatial audio",
    },
  ]

  const categories = ["Mobile Phones", "Laptops", "Audio", "Gaming", "Accessories"]
  const brands = ["Apple", "Samsung", "Sony", "Dell", "HP", "Lenovo"]

  const filteredProducts = products.filter((product) => {
    const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category)
    const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(product.brand)
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1]
    return categoryMatch && brandMatch && priceMatch
  })

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) => (prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]))
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setSelectedBrands([])
    setPriceRange([0, 500000])
  }

  return (
    <div className="min-h-screen">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <span>/</span>
          <span>Products</span>
        </nav>

        {/* Page Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">All Products</h1>
            <p className="text-muted-foreground">
              Showing {filteredProducts.length} of {products.length} products
            </p>
          </div>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Button variant="outline" size="sm" onClick={() => setShowFilters(!showFilters)} className="md:hidden">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
            <Select defaultValue="featured">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <aside className={`w-64 space-y-6 ${showFilters ? "block" : "hidden md:block"}`}>
            <div className="bg-card p-6 rounded-lg border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Filters</h3>
                <Button variant="ghost" size="sm" onClick={clearFilters}>
                  Clear All
                </Button>
              </div>

              {/* Applied Filters */}
              {(selectedCategories.length > 0 || selectedBrands.length > 0) && (
                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-2">Applied Filters:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCategories.map((category) => (
                      <Badge key={category} variant="secondary" className="text-xs">
                        {category}
                        <X className="h-3 w-3 ml-1 cursor-pointer" onClick={() => toggleCategory(category)} />
                      </Badge>
                    ))}
                    {selectedBrands.map((brand) => (
                      <Badge key={brand} variant="secondary" className="text-xs">
                        {brand}
                        <X className="h-3 w-3 ml-1 cursor-pointer" onClick={() => toggleBrand(brand)} />
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Price Range */}
              <div className="space-y-4">
                <h4 className="font-medium">Price Range</h4>
                <div className="px-2">
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={500000}
                    step={10000}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground mt-2">
                    <span>Rs. {priceRange[0].toLocaleString()}</span>
                    <span>Rs. {priceRange[1].toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Categories */}
              <div className="space-y-4">
                <h4 className="font-medium">Categories</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox
                        id={category}
                        checked={selectedCategories.includes(category)}
                        onCheckedChange={() => toggleCategory(category)}
                      />
                      <label htmlFor={category} className="text-sm cursor-pointer">
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Brands */}
              <div className="space-y-4">
                <h4 className="font-medium">Brands</h4>
                <div className="space-y-2">
                  {brands.map((brand) => (
                    <div key={brand} className="flex items-center space-x-2">
                      <Checkbox
                        id={brand}
                        checked={selectedBrands.includes(brand)}
                        onCheckedChange={() => toggleBrand(brand)}
                      />
                      <label htmlFor={brand} className="text-sm cursor-pointer">
                        {brand}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid/List */}
          <div className="flex-1">
            {viewMode === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
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
            ) : (
              <div className="space-y-4">
                {filteredProducts.map((product) => (
                  <Card key={product.id} className="group hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex gap-6">
                        <div className="relative w-32 h-32 flex-shrink-0">
                          <Link href={`/product/${product.id}`}>
                            <img
                              src={product.image || "/placeholder.svg"}
                              alt={product.name}
                              className="w-full h-full object-cover rounded-lg"
                            />
                          </Link>
                          {!product.inStock && (
                            <Badge className="absolute top-2 left-2" variant="destructive">
                              Out of Stock
                            </Badge>
                          )}
                        </div>
                        <div className="flex-1 space-y-3">
                          <div className="flex justify-between items-start">
                            <div>
                              <Link href={`/product/${product.id}`}>
                                <h3 className="font-semibold text-lg hover:text-primary">{product.name}</h3>
                              </Link>
                              <p className="text-sm text-muted-foreground mt-1">{product.description}</p>
                            </div>
                            <Button size="sm" variant="ghost">
                              <Heart className="h-4 w-4" />
                            </Button>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-lg text-primary">
                                Rs. {product.price.toLocaleString()}
                              </span>
                              {product.originalPrice > product.price && (
                                <span className="text-sm text-muted-foreground line-through">
                                  Rs. {product.originalPrice.toLocaleString()}
                                </span>
                              )}
                            </div>
                            <Button disabled={!product.inStock}>
                              <ShoppingCart className="h-4 w-4 mr-2" />
                              {product.inStock ? "Add to Cart" : "Out of Stock"}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-lg font-semibold mb-2">No products found</h3>
                <p className="text-muted-foreground mb-4">Try adjusting your filters or search terms</p>
                <Button onClick={clearFilters}>Clear Filters</Button>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
