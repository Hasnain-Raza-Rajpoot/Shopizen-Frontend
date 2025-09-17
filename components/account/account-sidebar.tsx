"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { User, MapPin, ShoppingBag, Heart, Settings, LogOut, Menu, X, Gift, Bell, CreditCard } from "lucide-react"

export function AccountSidebar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Mock user data - in real app, get from auth context
  const user = {
    name: "Ahmed Khan",
    email: "ahmed.khan@example.com",
    avatar: "/user-avatar.jpg",
    loyaltyPoints: 1250,
    memberSince: "2023",
  }

  const menuItems = [
    {
      href: "/account",
      label: "Dashboard",
      icon: User,
      exact: true,
    },
    {
      href: "/account/profile",
      label: "Profile",
      icon: User,
    },
    {
      href: "/account/addresses",
      label: "Addresses",
      icon: MapPin,
    },
    {
      href: "/account/orders",
      label: "Orders",
      icon: ShoppingBag,
    },
    {
      href: "/account/wishlist",
      label: "Wishlist",
      icon: Heart,
    },
    {
      href: "/account/loyalty",
      label: "Loyalty Points",
      icon: Gift,
    },
    {
      href: "/account/notifications",
      label: "Notifications",
      icon: Bell,
    },
    {
      href: "/account/payment-methods",
      label: "Payment Methods",
      icon: CreditCard,
    },
    {
      href: "/account/settings",
      label: "Settings",
      icon: Settings,
    },
  ]

  const isActive = (href: string, exact = false) => {
    if (exact) {
      return pathname === href
    }
    return pathname.startsWith(href)
  }

  const SidebarContent = () => (
    <div className="space-y-6">
      {/* User Profile Card */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
              <AvatarFallback className="text-lg">
                {user.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-lg truncate">{user.name}</h3>
              <p className="text-sm text-muted-foreground truncate">{user.email}</p>
              <div className="flex items-center gap-2 mt-2">
                <Badge variant="secondary" className="text-xs">
                  Member since {user.memberSince}
                </Badge>
              </div>
            </div>
          </div>
          <div className="mt-4 p-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Loyalty Points</span>
              <span className="text-lg font-bold text-primary">{user.loyaltyPoints}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation Menu */}
      <Card>
        <CardContent className="p-0">
          <nav className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-3 px-6 py-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${
                    isActive(item.href, item.exact)
                      ? "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
                      : ""
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              )
            })}
            <button className="flex items-center space-x-3 px-6 py-3 text-sm font-medium text-destructive hover:bg-destructive/10 w-full text-left">
              <LogOut className="h-4 w-4" />
              <span>Sign Out</span>
            </button>
          </nav>
        </CardContent>
      </Card>
    </div>
  )

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="lg:hidden mb-6">
        <Button
          variant="outline"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="w-full justify-start"
        >
          {isMobileMenuOpen ? <X className="h-4 w-4 mr-2" /> : <Menu className="h-4 w-4 mr-2" />}
          Account Menu
        </Button>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block w-80">
        <SidebarContent />
      </div>

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mb-6">
          <SidebarContent />
        </div>
      )}
    </>
  )
}
