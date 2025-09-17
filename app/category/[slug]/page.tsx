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
import { Star, ShoppingCart, Heart, Filter, Grid, List } from "lucide-react"
import Link from "next/link"

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [showFilters, setShowFilters] = useState(false)
  const [priceRange, setPriceRange] = useState([0, 500000])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])

  // Mock category data - in real app, fetch based on params.slug
  const categoryName = params.slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())

  const categoryInfo = {
    name: categoryName,
    description: `Discover the latest ${categoryName.toLowerCase()} with amazing deals and fast delivery across Pakistan.`,
    image: "/electronics-banner.png",
    totalProducts: 156,
  }

  const subcategories = ["Mobile Phones", "Laptops & Computers", "Audio & Headphones", "Gaming", "Accessories"]

  const products = [
    {
      id: 1,
      name: "iPhone 15 Pro Max 256GB",
      price: 450000,
      originalPrice: 480000,
      image: "/iphone-15-pro-max.png",
      rating: 4.8,
      reviews: 124,
      brand: "Apple",
      inStock: true,
    },
    {
      id: 2,
      name: "Samsung Galaxy S24 Ultra",
      price: 420000,
      originalPrice: 450000,
      image: "/samsung-galaxy-s24-ultra.png",
      rating: 4.7,
      reviews: 89,
      brand: "Samsung",
      inStock: true,
    },
    {
      id: 3,
      name: "MacBook Air M3 13-inch",
      price: 380000,
      originalPrice: 400000,
      image: "/macbook-air-m3.png",
      rating: 4.9,
      reviews: 156,
      brand: "Apple",
      inStock: true,
    },
    {
      id: 4,
      name: "Sony WH-1000XM5 Headphones",
      price: 85000,
      originalPrice: 95000,
      image: "/sony-wh-1000xm5.png",
      rating: 4.6,
      reviews: 203,
      brand: "Sony",
      inStock: true,
    },
  ]

  const brands = ["Apple", "Samsung", "Sony", "Dell", "HP", "Lenovo"]

  const filteredProducts = products.filter((product) => {
    const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(product.brand)
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1]
    return brandMatch && priceMatch
  })

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) => (prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]))
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
          <Link href="/products" className="hover:text-primary">
            Products
          </Link>
          <span>/</span>
          <span>{categoryInfo.name}</span>
        </nav>

        {/* Category Header */}
        <div className="mb-8">
          <div className="relative h-48 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg overflow-hidden mb-6">
            <img
              src={categoryInfo.image || "/placeholder.svg"}
              alt={categoryInfo.name}
              className="w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-4xl font-bold mb-2">{categoryInfo.name}</h1>
                <p className="text-lg text-muted-foreground">{categoryInfo.description}</p>
              </div>
            </div>
          </div>

          {/* Subcategories */}
          <div className="flex flex-wrap gap-2 mb-6">
            {subcategories.map((subcategory) => (
              <Link key={subcategory} href={`/category/${subcategory.toLowerCase().replace(/\s+/g, "-")}`}>
                <Badge variant="outline" className="hover:bg-primary hover:text-primary-foreground cursor-pointer">
                  {subcategory}
                </Badge>
              </Link>
            ))}
          </div>
        </div>

        {/* Page Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <p className="text-muted-foreground">
              Showing {filteredProducts.length} of {categoryInfo.totalProducts} products
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
              <h3 className="font-semibold mb-4">Filters</h3>

              {/* Price Range */}
              <div className="space-y-4 mb-6">
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
            ) : (
              <div className="space-y-4">
                {filteredProducts.map((product) => (
                  <Card key={product.id} className="group hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex gap-6">
                        <div className="w-32 h-32 flex-shrink-0">
                          <Link href={`/product/${product.id}`}>
                            <img
                              src={product.image || "/placeholder.svg"}
                              alt={product.name}
                              className="w-full h-full object-cover rounded-lg"
                            />
                          </Link>
                        </div>
                        <div className="flex-1 space-y-3">
                          <div className="flex justify-between items-start">
                            <Link href={`/product/${product.id}`}>
                              <h3 className="font-semibold text-lg hover:text-primary">{product.name}</h3>
                            </Link>
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
                            <Button>
                              <ShoppingCart className="h-4 w-4 mr-2" />
                              Add to Cart
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
