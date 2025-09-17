"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Search, X, Clock, TrendingUp } from "lucide-react"
import Link from "next/link"

export function MobileSearch() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const recentSearches = ["iPhone 15 Pro Max", "MacBook Air M3", "Samsung Galaxy S24", "Sony Headphones"]

  const trendingSearches = ["Gaming Laptop", "Wireless Earbuds", "Smart Watch", "Camera"]

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="md:hidden">
          <Search className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="top" className="h-full">
        <div className="space-y-6">
          {/* Search Header */}
          <div className="flex items-center gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4"
                autoFocus
              />
            </div>
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Search Results or Suggestions */}
          {searchQuery ? (
            <div className="space-y-4">
              <h3 className="font-medium">Search Results</h3>
              <div className="text-center py-8 text-muted-foreground">
                <Search className="h-8 w-8 mx-auto mb-2" />
                <p>Start typing to search products...</p>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Recent Searches */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <h3 className="font-medium">Recent Searches</h3>
                </div>
                <div className="space-y-2">
                  {recentSearches.map((search) => (
                    <Link
                      key={search}
                      href={`/search?q=${encodeURIComponent(search)}`}
                      onClick={() => setIsOpen(false)}
                      className="block p-3 rounded-lg hover:bg-muted transition-colors"
                    >
                      {search}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Trending Searches */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                  <h3 className="font-medium">Trending</h3>
                </div>
                <div className="space-y-2">
                  {trendingSearches.map((search) => (
                    <Link
                      key={search}
                      href={`/search?q=${encodeURIComponent(search)}`}
                      onClick={() => setIsOpen(false)}
                      className="block p-3 rounded-lg hover:bg-muted transition-colors"
                    >
                      {search}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}
