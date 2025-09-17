"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { AccountSidebar } from "@/components/account/account-sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Crown, Gift, Star, Trophy, Zap, Calendar } from "lucide-react"

export default function LoyaltyPage() {
  const currentPoints = 2450
  const nextTierPoints = 5000
  const progressPercentage = (currentPoints / nextTierPoints) * 100

  const tiers = [
    { name: "Bronze", min: 0, max: 999, color: "bg-amber-600", benefits: ["Free shipping on orders over Rs. 5,000"] },
    {
      name: "Silver",
      min: 1000,
      max: 2499,
      color: "bg-gray-400",
      benefits: ["Free shipping on all orders", "5% cashback"],
    },
    {
      name: "Gold",
      min: 2500,
      max: 4999,
      color: "bg-yellow-500",
      benefits: ["Free shipping", "10% cashback", "Priority support"],
    },
    {
      name: "Platinum",
      min: 5000,
      max: 9999,
      color: "bg-purple-600",
      benefits: ["Free shipping", "15% cashback", "Priority support", "Early access"],
    },
    {
      name: "Diamond",
      min: 10000,
      max: Number.POSITIVE_INFINITY,
      color: "bg-blue-600",
      benefits: ["Free shipping", "20% cashback", "VIP support", "Exclusive products"],
    },
  ]

  const currentTier = tiers.find((tier) => currentPoints >= tier.min && currentPoints <= tier.max)
  const nextTier = tiers.find((tier) => tier.min > currentPoints)

  const recentActivity = [
    { date: "2024-01-15", action: "Purchase", points: 450, description: "iPhone 15 Pro Max purchase" },
    { date: "2024-01-12", action: "Review", points: 50, description: "Product review bonus" },
    { date: "2024-01-10", action: "Purchase", points: 320, description: "MacBook Air purchase" },
    { date: "2024-01-08", action: "Referral", points: 500, description: "Friend referral bonus" },
    { date: "2024-01-05", action: "Purchase", points: 125, description: "AirPods Pro purchase" },
  ]

  const availableRewards = [
    { id: 1, name: "Rs. 500 Off", points: 1000, description: "Get Rs. 500 off your next purchase", type: "discount" },
    { id: 2, name: "Free Shipping", points: 200, description: "Free shipping on your next order", type: "shipping" },
    {
      id: 3,
      name: "Rs. 1,000 Off",
      points: 2000,
      description: "Get Rs. 1,000 off your next purchase",
      type: "discount",
    },
    {
      id: 4,
      name: "Premium Support",
      points: 1500,
      description: "30 days of premium customer support",
      type: "service",
    },
    {
      id: 5,
      name: "Rs. 2,000 Off",
      points: 4000,
      description: "Get Rs. 2,000 off your next purchase",
      type: "discount",
    },
    {
      id: 6,
      name: "VIP Access",
      points: 3000,
      description: "Early access to new products for 3 months",
      type: "access",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          <AccountSidebar />

          <div className="flex-1 space-y-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Loyalty Program</h1>
              <p className="text-muted-foreground">Earn points with every purchase and unlock exclusive rewards</p>
            </div>

            {/* Current Status */}
            <Card className="bg-gradient-to-r from-cyan-50 to-purple-50">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-full ${currentTier?.color} flex items-center justify-center`}>
                      <Crown className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{currentTier?.name} Member</CardTitle>
                      <p className="text-muted-foreground">Current tier status</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-primary">{currentPoints.toLocaleString()}</div>
                    <p className="text-sm text-muted-foreground">Total Points</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {nextTier && (
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Progress to {nextTier.name}</span>
                      <span>{nextTierPoints - currentPoints} points to go</span>
                    </div>
                    <Progress value={progressPercentage} className="h-2" />
                  </div>
                )}
                <div className="flex flex-wrap gap-2">
                  {currentTier?.benefits.map((benefit, index) => (
                    <Badge key={index} variant="secondary" className="bg-white/50">
                      {benefit}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Available Rewards */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Gift className="h-5 w-5" />
                    Available Rewards
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {availableRewards.map((reward) => (
                      <div key={reward.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                            {reward.type === "discount" && <Zap className="h-5 w-5 text-primary" />}
                            {reward.type === "shipping" && <Gift className="h-5 w-5 text-primary" />}
                            {reward.type === "service" && <Star className="h-5 w-5 text-primary" />}
                            {reward.type === "access" && <Trophy className="h-5 w-5 text-primary" />}
                          </div>
                          <div>
                            <p className="font-medium">{reward.name}</p>
                            <p className="text-sm text-muted-foreground">{reward.description}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-primary">{reward.points} pts</p>
                          <Button size="sm" disabled={currentPoints < reward.points} className="mt-1">
                            {currentPoints >= reward.points ? "Redeem" : "Need more"}
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{activity.action}</p>
                          <p className="text-sm text-muted-foreground">{activity.description}</p>
                          <p className="text-xs text-muted-foreground">{activity.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-green-600">+{activity.points} pts</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Tier Benefits */}
            <Card>
              <CardHeader>
                <CardTitle>Membership Tiers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {tiers.map((tier) => (
                    <div
                      key={tier.name}
                      className={`p-4 rounded-lg border-2 ${
                        tier.name === currentTier?.name ? "border-primary bg-primary/5" : "border-gray-200"
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-full ${tier.color} mb-3`}></div>
                      <h3 className="font-semibold">{tier.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {tier.min === 0 ? `0` : tier.min.toLocaleString()} -{" "}
                        {tier.max === Number.POSITIVE_INFINITY ? "∞" : tier.max.toLocaleString()} pts
                      </p>
                      <ul className="text-xs space-y-1">
                        {tier.benefits.map((benefit, index) => (
                          <li key={index} className="text-muted-foreground">
                            • {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
