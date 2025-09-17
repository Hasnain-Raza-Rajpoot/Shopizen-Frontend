"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { AccountSidebar } from "@/components/account/account-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Heart, ShoppingCart, X, Star, Share2 } from "lucide-react"
import Link from "next/link"

export default function WishlistPage() {
  const [selectedItems, setSelectedItems] = useState<number[]>([])
  const [sortBy, setSortBy] = useState("date-added")
  const [filterBy, setFilterBy] = useState("all")

  // Mock wishlist data
  const wishlistItems = [
    {
      id: 1,
      name: "MacBook Air M3 13-inch",
      price: 380000,
      originalPrice: 400000,
      image: "/macbook-air-m3.png",
      rating: 4.9,
      reviews: 156,
      inStock: true,
      category: "Laptops",
      dateAdded: "2024-01-15",
      priceDropped: true,
      discount: 5,
    },
    {
      id: 2,
      name: "Samsung Galaxy S24 Ultra",
      price: 420000,
      originalPrice: 450000,
      image: "/samsung-galaxy-s24-ultra.png",
      rating: 4.7,
      reviews: 89,
      inStock: true,
      category: "Mobile Phones",
      dateAdded: "2024-01-12",
      priceDropped: false,
      discount: 7,
    },
    {
      id: 3,
      name: "Dell XPS 13 Plus",
      price: 320000,
      originalPrice: 350000,
      image: "/dell-xps-13-laptop.jpg",
      rating: 4.5,
      reviews: 78,
      inStock: false,
      category: "Laptops",
      dateAdded: "2024-01-08",
      priceDropped: false,
      discount: 9,
    },
    {
      id: 4,
      name: "AirPods Pro 2nd Gen",
      price: 65000,
      originalPrice: 70000,
      image: "/airpods-pro-wireless-earbuds.jpg",
      rating: 4.7,
      reviews: 312,
      inStock: true,
      category: "Audio",
      dateAdded: "2024-01-05",
      priceDropped: true,
      discount: 7,
    },
    {
      id: 5,
      name: "Gaming Mechanical Keyboard",
      price: 25000,
      originalPrice: 30000,
      image: "/gaming-keyboard.jpg",
      rating: 4.4,
      reviews: 145,
      inStock: true,
      category: "Gaming",
      dateAdded: "2024-01-02",
      priceDropped: false,
      discount: 17,
    },
  ]

  const handleSelectItem = (itemId: number) => {
    setSelectedItems((prev) => (prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]))
  }

  const handleSelectAll = () => {
    if (selectedItems.length === wishlistItems.length) {
      setSelectedItems([])
    } else {
      setSelectedItems(wishlistItems.map((item) => item.id))
    }
  }

  const handleRemoveSelected = () => {
    // Mock remove functionality
    console.log("Removing items:", selectedItems)
    setSelectedItems([])
  }

  const handleAddSelectedToCart = () => {
    const availableItems = selectedItems.filter((id) => {
      const item = wishlistItems.find((item) => item.id === id)
      return item?.inStock
    })
    console.log("Adding to cart:", availableItems)
    setSelectedItems([])
  }

  const filteredItems = wishlistItems.filter((item) => {
    if (filterBy === "all") return true
    if (filterBy === "in-stock") return item.inStock
    if (filterBy === "out-of-stock") return !item.inStock
    if (filterBy === "price-dropped") return item.priceDropped
    return true
  })

  const sortedItems = [...filteredItems].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "name":
        return a.name.localeCompare(b.name)
      case "rating":
        return b.rating - a.rating
      case "date-added":
      default:
        return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
    }
  })

  return (
    <div className="min-h-screen">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          <AccountSidebar />

          <div className="flex-1 space-y-8">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold mb-2">My Wishlist</h1>
                <p className="text-muted-foreground">
                  {wishlistItems.length} items saved • {wishlistItems.filter((item) => item.inStock).length} in stock
                </p>
              </div>
              <Button variant="outline" asChild>
                <Link href="/products">
                  <Heart className="h-4 w-4 mr-2" />
                  Continue Shopping
                </Link>
              </Button>
            </div>

            {wishlistItems.length === 0 ? (
              <Card>
                <CardContent className="p-12 text-center">
                  <Heart className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Your wishlist is empty</h3>
                  <p className="text-muted-foreground mb-4">
                    Save items you love to your wishlist and never lose track of them.
                  </p>
                  <Button asChild>
                    <Link href="/products">Start Shopping</Link>
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <>
                {/* Controls */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                      <div className="flex items-center gap-4">
                        <Checkbox
                          checked={selectedItems.length === wishlistItems.length}
                          onCheckedChange={handleSelectAll}
                        />
                        <span className="text-sm">
                          {selectedItems.length > 0 ? `${selectedItems.length} selected` : "Select all"}
                        </span>
                        {selectedItems.length > 0 && (
                          <div className="flex gap-2">
                            <Button size="sm" onClick={handleAddSelectedToCart}>
                              <ShoppingCart className="h-4 w-4 mr-2" />
                              Add to Cart
                            </Button>
                            <Button size="sm" variant="outline" onClick={handleRemoveSelected}>
                              <X className="h-4 w-4 mr-2" />
                              Remove
                            </Button>
                          </div>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <Select value={filterBy} onValueChange={setFilterBy}>
                          <SelectTrigger className="w-[150px]">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Items</SelectItem>
                            <SelectItem value="in-stock">In Stock</SelectItem>
                            <SelectItem value="out-of-stock">Out of Stock</SelectItem>
                            <SelectItem value="price-dropped">Price Dropped</SelectItem>
                          </SelectContent>
                        </Select>
                        <Select value={sortBy} onValueChange={setSortBy}>
                          <SelectTrigger className="w-[150px]">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="date-added">Date Added</SelectItem>
                            <SelectItem value="price-low">Price: Low to High</SelectItem>
                            <SelectItem value="price-high">Price: High to Low</SelectItem>
                            <SelectItem value="name">Name</SelectItem>
                            <SelectItem value="rating">Rating</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Wishlist Items */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sortedItems.map((item) => (
                    <Card key={item.id} className="group relative">
                      <CardContent className="p-0">
                        <div className="absolute top-4 left-4 z-10">
                          <Checkbox
                            checked={selectedItems.includes(item.id)}
                            onCheckedChange={() => handleSelectItem(item.id)}
                            className="bg-background"
                          />
                        </div>
                        <div className="absolute top-4 right-4 z-10 flex gap-2">
                          {item.priceDropped && (
                            <Badge variant="destructive" className="text-xs">
                              Price Drop!
                            </Badge>
                          )}
                          <Button size="sm" variant="ghost" className="h-8 w-8 p-0 bg-background/80">
                            <Share2 className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="ghost" className="h-8 w-8 p-0 bg-background/80">
                            <X className="h-4 w-4" />
                          </Button>
                        </div>

                        <div className="relative">
                          <Link href={`/product/${item.id}`}>
                            <img
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              className="w-full h-48 object-cover rounded-t-lg"
                            />
                          </Link>
                          {!item.inStock && (
                            <div className="absolute inset-0 bg-black/50 rounded-t-lg flex items-center justify-center">
                              <Badge variant="destructive">Out of Stock</Badge>
                            </div>
                          )}
                        </div>

                        <div className="p-4 space-y-3">
                          <Link href={`/product/${item.id}`}>
                            <h3 className="font-semibold text-sm line-clamp-2 hover:text-primary">{item.name}</h3>
                          </Link>

                          <div className="flex items-center gap-1">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-3 w-3 ${
                                    i < Math.floor(item.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-xs text-muted-foreground">({item.reviews})</span>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-primary">Rs. {item.price.toLocaleString()}</span>
                              {item.originalPrice > item.price && (
                                <>
                                  <span className="text-sm text-muted-foreground line-through">
                                    Rs. {item.originalPrice.toLocaleString()}
                                  </span>
                                  <Badge variant="secondary" className="text-xs">
                                    {item.discount}% off
                                  </Badge>
                                </>
                              )}
                            </div>

                            <div className="flex gap-2">
                              <Button className="flex-1" size="sm" disabled={!item.inStock}>
                                <ShoppingCart className="h-4 w-4 mr-2" />
                                {item.inStock ? "Add to Cart" : "Out of Stock"}
                              </Button>
                            </div>

                            <p className="text-xs text-muted-foreground">Added on {item.dateAdded}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Share Wishlist */}
                <Card>
                  <CardHeader>
                    <CardTitle>Share Your Wishlist</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Share your wishlist with friends and family so they know what you'd love to receive.
                    </p>
                    <div className="flex gap-2">
                      <Button variant="outline">
                        <Share2 className="h-4 w-4 mr-2" />
                        Share Wishlist
                      </Button>
                      <Button variant="outline">Copy Link</Button>
                    </div>
                  </CardContent>
                </Card>
              </>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
