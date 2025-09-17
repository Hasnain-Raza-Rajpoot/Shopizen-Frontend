"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { Menu, X, Home, Search, ShoppingCart, User, Heart, Package } from "lucide-react"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { title: "Home", href: "/", icon: Home },
    { title: "Products", href: "/products", icon: Search },
    { title: "Categories", href: "/category/electronics", icon: Package },
    { title: "Cart", href: "/cart", icon: ShoppingCart, badge: "3" },
    { title: "Wishlist", href: "/account/wishlist", icon: Heart, badge: "5" },
    { title: "Account", href: "/account", icon: User },
  ]

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-80">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">Menu</h2>
          <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
            >
              <item.icon className="h-5 w-5 text-muted-foreground" />
              <span className="flex-1">{item.title}</span>
              {item.badge && (
                <Badge variant="secondary" className="text-xs">
                  {item.badge}
                </Badge>
              )}
            </Link>
          ))}
        </nav>

        <div className="mt-8 pt-6 border-t">
          <div className="space-y-2">
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="block p-3 text-center bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              onClick={() => setIsOpen(false)}
              className="block p-3 text-center border rounded-lg hover:bg-muted transition-colors"
            >
              Create Account
            </Link>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          <p>Need help?</p>
          <Link href="/contact" className="text-primary hover:underline">
            Contact Support
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}
