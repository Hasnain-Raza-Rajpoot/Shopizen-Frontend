"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { AccountSidebar } from "@/components/account/account-sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bell, Mail, MessageSquare, Smartphone, Settings } from "lucide-react"

export default function NotificationsPage() {
  const [emailNotifications, setEmailNotifications] = useState({
    orderUpdates: true,
    promotions: true,
    newsletter: false,
    priceDrops: true,
    backInStock: true,
    reviews: false,
  })

  const [pushNotifications, setPushNotifications] = useState({
    orderUpdates: true,
    promotions: false,
    priceDrops: true,
    backInStock: true,
  })

  const [smsNotifications, setSmsNotifications] = useState({
    orderUpdates: true,
    promotions: false,
    deliveryUpdates: true,
  })

  const recentNotifications = [
    {
      id: 1,
      type: "order",
      title: "Order Shipped",
      message: "Your order #ORD-2024-001 has been shipped and is on its way!",
      time: "2 hours ago",
      read: false,
    },
    {
      id: 2,
      type: "promotion",
      title: "Flash Sale Alert",
      message: "50% off on selected electronics. Limited time offer!",
      time: "1 day ago",
      read: true,
    },
    {
      id: 3,
      type: "price_drop",
      title: "Price Drop Alert",
      message: "MacBook Air M3 price dropped by Rs. 20,000 in your wishlist!",
      time: "2 days ago",
      read: false,
    },
    {
      id: 4,
      type: "stock",
      title: "Back in Stock",
      message: "Dell XPS 13 Plus is now available in your wishlist!",
      time: "3 days ago",
      read: true,
    },
    {
      id: 5,
      type: "review",
      title: "Review Reminder",
      message: "How was your recent purchase? Leave a review and earn 50 points!",
      time: "1 week ago",
      read: true,
    },
  ]

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "order":
        return "📦"
      case "promotion":
        return "🎉"
      case "price_drop":
        return "💰"
      case "stock":
        return "✅"
      case "review":
        return "⭐"
      default:
        return "🔔"
    }
  }

  const handleSavePreferences = () => {
    // Mock save functionality
    console.log("Saving notification preferences...")
  }

  return (
    <div className="min-h-screen">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          <AccountSidebar />

          <div className="flex-1 space-y-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Notification Settings</h1>
              <p className="text-muted-foreground">Manage how you receive updates and alerts</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Notification Preferences */}
              <div className="space-y-6">
                {/* Email Notifications */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Mail className="h-5 w-5" />
                      Email Notifications
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="email-orders" className="flex-1">
                        <div>
                          <p className="font-medium">Order Updates</p>
                          <p className="text-sm text-muted-foreground">Get notified about order status changes</p>
                        </div>
                      </Label>
                      <Switch
                        id="email-orders"
                        checked={emailNotifications.orderUpdates}
                        onCheckedChange={(checked) =>
                          setEmailNotifications({ ...emailNotifications, orderUpdates: checked })
                        }
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="email-promotions" className="flex-1">
                        <div>
                          <p className="font-medium">Promotions & Deals</p>
                          <p className="text-sm text-muted-foreground">Receive exclusive offers and discounts</p>
                        </div>
                      </Label>
                      <Switch
                        id="email-promotions"
                        checked={emailNotifications.promotions}
                        onCheckedChange={(checked) =>
                          setEmailNotifications({ ...emailNotifications, promotions: checked })
                        }
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="email-newsletter" className="flex-1">
                        <div>
                          <p className="font-medium">Newsletter</p>
                          <p className="text-sm text-muted-foreground">Weekly newsletter with latest products</p>
                        </div>
                      </Label>
                      <Switch
                        id="email-newsletter"
                        checked={emailNotifications.newsletter}
                        onCheckedChange={(checked) =>
                          setEmailNotifications({ ...emailNotifications, newsletter: checked })
                        }
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="email-price-drops" className="flex-1">
                        <div>
                          <p className="font-medium">Price Drop Alerts</p>
                          <p className="text-sm text-muted-foreground">Get notified when wishlist items go on sale</p>
                        </div>
                      </Label>
                      <Switch
                        id="email-price-drops"
                        checked={emailNotifications.priceDrops}
                        onCheckedChange={(checked) =>
                          setEmailNotifications({ ...emailNotifications, priceDrops: checked })
                        }
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="email-stock" className="flex-1">
                        <div>
                          <p className="font-medium">Back in Stock</p>
                          <p className="text-sm text-muted-foreground">Notify when out-of-stock items are available</p>
                        </div>
                      </Label>
                      <Switch
                        id="email-stock"
                        checked={emailNotifications.backInStock}
                        onCheckedChange={(checked) =>
                          setEmailNotifications({ ...emailNotifications, backInStock: checked })
                        }
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="email-reviews" className="flex-1">
                        <div>
                          <p className="font-medium">Review Reminders</p>
                          <p className="text-sm text-muted-foreground">Reminders to review your purchases</p>
                        </div>
                      </Label>
                      <Switch
                        id="email-reviews"
                        checked={emailNotifications.reviews}
                        onCheckedChange={(checked) =>
                          setEmailNotifications({ ...emailNotifications, reviews: checked })
                        }
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Push Notifications */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Bell className="h-5 w-5" />
                      Push Notifications
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="push-orders" className="flex-1">
                        <div>
                          <p className="font-medium">Order Updates</p>
                          <p className="text-sm text-muted-foreground">Real-time order status updates</p>
                        </div>
                      </Label>
                      <Switch
                        id="push-orders"
                        checked={pushNotifications.orderUpdates}
                        onCheckedChange={(checked) =>
                          setPushNotifications({ ...pushNotifications, orderUpdates: checked })
                        }
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="push-promotions" className="flex-1">
                        <div>
                          <p className="font-medium">Flash Sales</p>
                          <p className="text-sm text-muted-foreground">Instant alerts for limited-time offers</p>
                        </div>
                      </Label>
                      <Switch
                        id="push-promotions"
                        checked={pushNotifications.promotions}
                        onCheckedChange={(checked) =>
                          setPushNotifications({ ...pushNotifications, promotions: checked })
                        }
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="push-price-drops" className="flex-1">
                        <div>
                          <p className="font-medium">Price Drops</p>
                          <p className="text-sm text-muted-foreground">Instant price drop notifications</p>
                        </div>
                      </Label>
                      <Switch
                        id="push-price-drops"
                        checked={pushNotifications.priceDrops}
                        onCheckedChange={(checked) =>
                          setPushNotifications({ ...pushNotifications, priceDrops: checked })
                        }
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="push-stock" className="flex-1">
                        <div>
                          <p className="font-medium">Stock Alerts</p>
                          <p className="text-sm text-muted-foreground">When wishlist items are back in stock</p>
                        </div>
                      </Label>
                      <Switch
                        id="push-stock"
                        checked={pushNotifications.backInStock}
                        onCheckedChange={(checked) =>
                          setPushNotifications({ ...pushNotifications, backInStock: checked })
                        }
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* SMS Notifications */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Smartphone className="h-5 w-5" />
                      SMS Notifications
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="sms-orders" className="flex-1">
                        <div>
                          <p className="font-medium">Order Confirmations</p>
                          <p className="text-sm text-muted-foreground">SMS confirmation for new orders</p>
                        </div>
                      </Label>
                      <Switch
                        id="sms-orders"
                        checked={smsNotifications.orderUpdates}
                        onCheckedChange={(checked) =>
                          setSmsNotifications({ ...smsNotifications, orderUpdates: checked })
                        }
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="sms-promotions" className="flex-1">
                        <div>
                          <p className="font-medium">Promotional Offers</p>
                          <p className="text-sm text-muted-foreground">SMS alerts for special deals</p>
                        </div>
                      </Label>
                      <Switch
                        id="sms-promotions"
                        checked={smsNotifications.promotions}
                        onCheckedChange={(checked) => setSmsNotifications({ ...smsNotifications, promotions: checked })}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="sms-delivery" className="flex-1">
                        <div>
                          <p className="font-medium">Delivery Updates</p>
                          <p className="text-sm text-muted-foreground">SMS updates for delivery status</p>
                        </div>
                      </Label>
                      <Switch
                        id="sms-delivery"
                        checked={smsNotifications.deliveryUpdates}
                        onCheckedChange={(checked) =>
                          setSmsNotifications({ ...smsNotifications, deliveryUpdates: checked })
                        }
                      />
                    </div>
                  </CardContent>
                </Card>

                <Button onClick={handleSavePreferences} className="w-full">
                  <Settings className="h-4 w-4 mr-2" />
                  Save Preferences
                </Button>
              </div>

              {/* Recent Notifications */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" />
                    Recent Notifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentNotifications.map((notification) => (
                      <div
                        key={notification.id}
                        className={`p-4 rounded-lg border ${
                          !notification.read ? "bg-blue-50 border-blue-200" : "bg-gray-50 border-gray-200"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className="text-2xl">{getNotificationIcon(notification.type)}</div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <p className="font-medium">{notification.title}</p>
                              {!notification.read && (
                                <Badge variant="default" className="text-xs">
                                  New
                                </Badge>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">{notification.message}</p>
                            <p className="text-xs text-muted-foreground">{notification.time}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
