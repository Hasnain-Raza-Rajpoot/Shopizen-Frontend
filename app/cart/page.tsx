"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { ShoppingCart, Plus, Minus, X, Heart, ArrowLeft, Lock, Truck } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function CartPage() {
  const router = useRouter()
  const [couponCode, setCouponCode] = useState("")
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null)

  // Mock cart data
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "iPhone 15 Pro Max 256GB",
      price: 450000,
      originalPrice: 480000,
      image: "/iphone-15-pro-max.png",
      quantity: 1,
      inStock: true,
      maxQuantity: 5,
      category: "Mobile Phones",
      warranty: "1 Year Apple Warranty",
      deliveryTime: "2-3 days",
    },
    {
      id: 2,
      name: "MacBook Air M3 13-inch",
      price: 380000,
      originalPrice: 400000,
      image: "/macbook-air-m3.png",
      quantity: 1,
      inStock: true,
      maxQuantity: 3,
      category: "Laptops",
      warranty: "1 Year Apple Warranty",
      deliveryTime: "3-5 days",
    },
    {
      id: 3,
      name: "Sony WH-1000XM5 Headphones",
      price: 85000,
      originalPrice: 95000,
      image: "/sony-wh-1000xm5.jpg",
      quantity: 2,
      inStock: true,
      maxQuantity: 10,
      category: "Audio",
      warranty: "2 Year Sony Warranty",
      deliveryTime: "1-2 days",
    },
  ])

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter((item) => item.id !== id))
      return
    }

    setCartItems(
      cartItems.map((item) => (item.id === id ? { ...item, quantity: Math.min(newQuantity, item.maxQuantity) } : item)),
    )
  }

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const moveToWishlist = (id: number) => {
    // Mock move to wishlist functionality
    console.log("Moving to wishlist:", id)
    removeItem(id)
  }

  const applyCoupon = () => {
    if (couponCode.toLowerCase() === "save10") {
      setAppliedCoupon("SAVE10")
      setCouponCode("")
    } else if (couponCode.toLowerCase() === "newuser") {
      setAppliedCoupon("NEWUSER")
      setCouponCode("")
    } else {
      alert("Invalid coupon code")
    }
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const savings = cartItems.reduce((sum, item) => sum + (item.originalPrice - item.price) * item.quantity, 0)
  const couponDiscount = appliedCoupon === "SAVE10" ? subtotal * 0.1 : appliedCoupon === "NEWUSER" ? 5000 : 0
  const shipping = subtotal > 50000 ? 0 : 2000
  const tax = (subtotal - couponDiscount) * 0.17 // 17% GST
  const total = subtotal - couponDiscount + shipping + tax

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Card className="max-w-md mx-auto">
            <CardContent className="p-12 text-center">
              <ShoppingCart className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Your cart is empty</h3>
              <p className="text-muted-foreground mb-4">Add some products to your cart and they will appear here.</p>
              <Button asChild>
                <Link href="/products">Start Shopping</Link>
              </Button>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-2 mb-8">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/products">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Continue Shopping
            </Link>
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold">Shopping Cart</h1>
              <p className="text-muted-foreground">{cartItems.length} items</p>
            </div>

            <div className="space-y-4">
              {cartItems.map((item) => (
                <Card key={item.id}>
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <Link href={`/product/${item.id}`}>
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-24 h-24 object-cover rounded-lg"
                        />
                      </Link>

                      <div className="flex-1 space-y-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <Link href={`/product/${item.id}`}>
                              <h3 className="font-semibold hover:text-primary">{item.name}</h3>
                            </Link>
                            <p className="text-sm text-muted-foreground">{item.category}</p>
                            <p className="text-xs text-muted-foreground">{item.warranty}</p>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeItem(item.id)}
                            className="text-muted-foreground hover:text-destructive"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="font-bold text-primary">Rs. {item.price.toLocaleString()}</span>
                          {item.originalPrice > item.price && (
                            <span className="text-sm text-muted-foreground line-through">
                              Rs. {item.originalPrice.toLocaleString()}
                            </span>
                          )}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="w-12 text-center">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              disabled={item.quantity >= item.maxQuantity}
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>

                          <div className="flex gap-2">
                            <Button variant="ghost" size="sm" onClick={() => moveToWishlist(item.id)}>
                              <Heart className="h-4 w-4 mr-2" />
                              Save for Later
                            </Button>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-sm">
                          <Truck className="h-4 w-4 text-green-600" />
                          <span className="text-green-600">Delivery in {item.deliveryTime}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                  <span>Rs. {subtotal.toLocaleString()}</span>
                </div>

                {savings > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>You Save</span>
                    <span>-Rs. {savings.toLocaleString()}</span>
                  </div>
                )}

                {appliedCoupon && (
                  <div className="flex justify-between text-green-600">
                    <span>Coupon ({appliedCoupon})</span>
                    <span>-Rs. {couponDiscount.toLocaleString()}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? "Free" : `Rs. ${shipping.toLocaleString()}`}</span>
                </div>

                <div className="flex justify-between">
                  <span>Tax (GST 17%)</span>
                  <span>Rs. {tax.toLocaleString()}</span>
                </div>

                <Separator />

                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>Rs. {total.toLocaleString()}</span>
                </div>

                <Button className="w-full" size="lg" onClick={() => router.push("/checkout/shipping")}>
                  <Lock className="h-4 w-4 mr-2" />
                  Proceed to Checkout
                </Button>

                <p className="text-xs text-center text-muted-foreground">Secure checkout with 256-bit SSL encryption</p>
              </CardContent>
            </Card>

            {/* Coupon Code */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Apply Coupon</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="Enter coupon code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                  />
                  <Button onClick={applyCoupon} disabled={!couponCode}>
                    Apply
                  </Button>
                </div>
                <div className="text-sm text-muted-foreground">
                  <p>Available coupons:</p>
                  <ul className="list-disc list-inside mt-1 space-y-1">
                    <li>SAVE10 - 10% off your order</li>
                    <li>NEWUSER - Rs. 5,000 off for new users</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Free Shipping Banner */}
            {subtotal < 50000 && (
              <Card className="border-green-200 bg-green-50">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 text-green-700">
                    <Truck className="h-4 w-4" />
                    <span className="text-sm">
                      Add Rs. {(50000 - subtotal).toLocaleString()} more for free shipping!
                    </span>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
