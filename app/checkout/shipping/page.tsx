"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, MapPin, Plus, Truck, Clock } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function CheckoutShippingPage() {
  const router = useRouter()
  const [selectedAddress, setSelectedAddress] = useState("1")
  const [selectedShipping, setSelectedShipping] = useState("standard")
  const [showAddAddress, setShowAddAddress] = useState(false)

  // Mock saved addresses
  const savedAddresses = [
    {
      id: "1",
      name: "Ahmed Khan",
      phone: "+92 300 1234567",
      address: "House 123, Street 45, F-8/2, Islamabad",
      city: "Islamabad",
      postalCode: "44000",
      isDefault: true,
    },
    {
      id: "2",
      name: "Ahmed Khan (Office)",
      phone: "+92 300 1234567",
      address: "Office 456, Blue Area, G-7, Islamabad",
      city: "Islamabad",
      postalCode: "44000",
      isDefault: false,
    },
  ]

  const shippingOptions = [
    {
      id: "standard",
      name: "Standard Delivery",
      description: "5-7 business days",
      price: 0,
      icon: Truck,
    },
    {
      id: "express",
      name: "Express Delivery",
      description: "2-3 business days",
      price: 1500,
      icon: Clock,
    },
    {
      id: "overnight",
      name: "Overnight Delivery",
      description: "Next business day",
      price: 3000,
      icon: Clock,
    },
  ]

  // Mock cart summary
  const orderSummary = {
    subtotal: 915000,
    shipping: selectedShipping === "standard" ? 0 : selectedShipping === "express" ? 1500 : 3000,
    tax: 155550,
    total: 915000 + (selectedShipping === "standard" ? 0 : selectedShipping === "express" ? 1500 : 3000) + 155550,
  }

  const handleContinue = () => {
    router.push("/checkout/payment")
  }

  return (
    <div className="min-h-screen">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-2 mb-8">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/cart">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Cart
            </Link>
          </Button>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                1
              </div>
              <span className="font-medium">Shipping</span>
            </div>
            <div className="w-12 h-px bg-muted"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-muted text-muted-foreground rounded-full flex items-center justify-center text-sm">
                2
              </div>
              <span className="text-muted-foreground">Payment</span>
            </div>
            <div className="w-12 h-px bg-muted"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-muted text-muted-foreground rounded-full flex items-center justify-center text-sm">
                3
              </div>
              <span className="text-muted-foreground">Confirmation</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Shipping Form */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Delivery Address
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <RadioGroup value={selectedAddress} onValueChange={setSelectedAddress}>
                  {savedAddresses.map((address) => (
                    <div key={address.id} className="flex items-start space-x-2">
                      <RadioGroupItem value={address.id} id={address.id} className="mt-1" />
                      <div className="flex-1">
                        <Label htmlFor={address.id} className="cursor-pointer">
                          <div className="p-4 border rounded-lg hover:bg-muted/50">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="font-medium">{address.name}</span>
                              {address.isDefault && <Badge variant="secondary">Default</Badge>}
                            </div>
                            <p className="text-sm text-muted-foreground mb-1">{address.address}</p>
                            <p className="text-sm text-muted-foreground mb-1">
                              {address.city} - {address.postalCode}
                            </p>
                            <p className="text-sm text-muted-foreground">{address.phone}</p>
                          </div>
                        </Label>
                      </div>
                    </div>
                  ))}
                </RadioGroup>

                <Button variant="outline" onClick={() => setShowAddAddress(!showAddAddress)} className="w-full">
                  <Plus className="h-4 w-4 mr-2" />
                  Add New Address
                </Button>

                {showAddAddress && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Add New Address</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" placeholder="Ahmed" />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" placeholder="Khan" />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" placeholder="+92 300 1234567" />
                      </div>
                      <div>
                        <Label htmlFor="address">Street Address</Label>
                        <Textarea id="address" placeholder="House/Flat number, Street name, Area" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="city">City</Label>
                          <Input id="city" placeholder="Islamabad" />
                        </div>
                        <div>
                          <Label htmlFor="postalCode">Postal Code</Label>
                          <Input id="postalCode" placeholder="44000" />
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button>Save Address</Button>
                        <Button variant="outline" onClick={() => setShowAddAddress(false)}>
                          Cancel
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </CardContent>
            </Card>

            {/* Shipping Options */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Truck className="h-5 w-5" />
                  Delivery Options
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup value={selectedShipping} onValueChange={setSelectedShipping}>
                  {shippingOptions.map((option) => (
                    <div key={option.id} className="flex items-center space-x-2">
                      <RadioGroupItem value={option.id} id={option.id} />
                      <Label htmlFor={option.id} className="flex-1 cursor-pointer">
                        <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50">
                          <div className="flex items-center gap-3">
                            <option.icon className="h-5 w-5 text-muted-foreground" />
                            <div>
                              <p className="font-medium">{option.name}</p>
                              <p className="text-sm text-muted-foreground">{option.description}</p>
                            </div>
                          </div>
                          <span className="font-medium">
                            {option.price === 0 ? "Free" : `Rs. ${option.price.toLocaleString()}`}
                          </span>
                        </div>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Delivery Instructions */}
            <Card>
              <CardHeader>
                <CardTitle>Delivery Instructions (Optional)</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Any special instructions for delivery (e.g., gate code, preferred time, etc.)"
                  rows={3}
                />
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>Rs. {orderSummary.subtotal.toLocaleString()}</span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{orderSummary.shipping === 0 ? "Free" : `Rs. ${orderSummary.shipping.toLocaleString()}`}</span>
                </div>

                <div className="flex justify-between">
                  <span>Tax (GST 17%)</span>
                  <span>Rs. {orderSummary.tax.toLocaleString()}</span>
                </div>

                <Separator />

                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>Rs. {orderSummary.total.toLocaleString()}</span>
                </div>

                <Button className="w-full" size="lg" onClick={handleContinue}>
                  Continue to Payment
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  You can review your order before final payment
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
