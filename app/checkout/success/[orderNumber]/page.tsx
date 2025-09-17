"use client"

import { useEffect, useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { CheckCircle, Package, Truck, Download, Share2, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function OrderSuccessPage({ params }: { params: { orderNumber: string } }) {
  const [confetti, setConfetti] = useState(true)

  useEffect(() => {
    // Hide confetti after 3 seconds
    const timer = setTimeout(() => setConfetti(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  // Mock order data
  const orderData = {
    orderNumber: params.orderNumber,
    orderDate: new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    estimatedDelivery: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    items: [
      {
        id: 1,
        name: "iPhone 15 Pro Max 256GB",
        quantity: 1,
        price: 450000,
        image: "/iphone-15-pro-max.png",
      },
      {
        id: 2,
        name: "MacBook Air M3 13-inch",
        quantity: 1,
        price: 380000,
        image: "/macbook-air-m3.png",
      },
      {
        id: 3,
        name: "Sony WH-1000XM5 Headphones",
        quantity: 2,
        price: 85000,
        image: "/sony-wh-1000xm5.jpg",
      },
    ],
    subtotal: 915000,
    shipping: 0,
    tax: 155550,
    total: 1070550,
    paymentMethod: "Credit Card",
    shippingAddress: {
      name: "Ahmed Khan",
      address: "House 123, Street 45, F-8/2",
      city: "Islamabad",
      postalCode: "44000",
      phone: "+92 300 1234567",
    },
  }

  return (
    <div className="min-h-screen">
      <Header />

      {confetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          <div className="absolute inset-0 bg-gradient-to-b from-green-100/20 to-transparent"></div>
        </div>
      )}

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Success Header */}
          <Card className="text-center border-green-200 bg-green-50">
            <CardContent className="p-8">
              <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-green-800 mb-2">Order Confirmed!</h1>
              <p className="text-green-700 mb-4">
                Thank you for your purchase. Your order has been successfully placed.
              </p>
              <div className="flex items-center justify-center gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Order Number: </span>
                  <span className="font-mono font-bold">{orderData.orderNumber}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Order Date: </span>
                  <span className="font-medium">{orderData.orderDate}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-3 gap-4">
            <Button variant="outline" className="h-auto p-4 bg-transparent">
              <div className="text-center">
                <Download className="h-6 w-6 mx-auto mb-2" />
                <div className="font-medium">Download Invoice</div>
                <div className="text-xs text-muted-foreground">PDF receipt</div>
              </div>
            </Button>
            <Button variant="outline" className="h-auto p-4 bg-transparent" asChild>
              <Link href={`/account/orders/${orderData.orderNumber}`}>
                <div className="text-center">
                  <Package className="h-6 w-6 mx-auto mb-2" />
                  <div className="font-medium">Track Order</div>
                  <div className="text-xs text-muted-foreground">Real-time updates</div>
                </div>
              </Link>
            </Button>
            <Button variant="outline" className="h-auto p-4 bg-transparent">
              <div className="text-center">
                <Share2 className="h-6 w-6 mx-auto mb-2" />
                <div className="font-medium">Share Order</div>
                <div className="text-xs text-muted-foreground">With friends</div>
              </div>
            </Button>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Order Details */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Package className="h-5 w-5" />
                    Order Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {orderData.items.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium">{item.name}</h4>
                        <div className="flex justify-between items-center mt-1">
                          <span className="text-sm text-muted-foreground">Qty: {item.quantity}</span>
                          <span className="font-medium">Rs. {(item.price * item.quantity).toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  ))}

                  <Separator />

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>Rs. {orderData.subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>{orderData.shipping === 0 ? "Free" : `Rs. ${orderData.shipping.toLocaleString()}`}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax (GST 17%)</span>
                      <span>Rs. {orderData.tax.toLocaleString()}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>Rs. {orderData.total.toLocaleString()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Truck className="h-5 w-5" />
                    Delivery Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Shipping Address</h4>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p className="font-medium text-foreground">{orderData.shippingAddress.name}</p>
                      <p>{orderData.shippingAddress.address}</p>
                      <p>
                        {orderData.shippingAddress.city} - {orderData.shippingAddress.postalCode}
                      </p>
                      <p>{orderData.shippingAddress.phone}</p>
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Estimated Delivery</span>
                      <Badge variant="secondary">{orderData.estimatedDelivery}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">Standard delivery (5-7 business days)</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Next Steps */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>What happens next?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-medium">
                        ✓
                      </div>
                      <div>
                        <p className="font-medium">Order Confirmed</p>
                        <p className="text-sm text-muted-foreground">Your order has been received and confirmed</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">
                        2
                      </div>
                      <div>
                        <p className="font-medium">Processing</p>
                        <p className="text-sm text-muted-foreground">We're preparing your items for shipment</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-muted text-muted-foreground rounded-full flex items-center justify-center text-sm font-medium">
                        3
                      </div>
                      <div>
                        <p className="font-medium">Shipped</p>
                        <p className="text-sm text-muted-foreground">Your order is on its way to you</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-muted text-muted-foreground rounded-full flex items-center justify-center text-sm font-medium">
                        4
                      </div>
                      <div>
                        <p className="font-medium">Delivered</p>
                        <p className="text-sm text-muted-foreground">Enjoy your new products!</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Payment Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span>Payment Method</span>
                    <Badge variant="outline">{orderData.paymentMethod}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Payment has been successfully processed. You will receive a receipt via email shortly.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Need Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    If you have any questions about your order, feel free to contact us.
                  </p>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <span>📞 Call: +92 21 1234 5678</span>
                    </Button>
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <span>💬 WhatsApp: +92 300 1234567</span>
                    </Button>
                    <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                      <Link href="/contact">
                        <span>✉️ Email Support</span>
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Continue Shopping */}
          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="font-semibold mb-2">Continue Shopping</h3>
              <p className="text-muted-foreground mb-4">Discover more amazing products in our store</p>
              <div className="flex gap-4 justify-center">
                <Button asChild>
                  <Link href="/products">
                    Browse Products
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/account/orders">View All Orders</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
