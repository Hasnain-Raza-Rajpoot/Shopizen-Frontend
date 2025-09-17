"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, CreditCard, Smartphone, Building, Shield, Lock } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function CheckoutPaymentPage() {
  const router = useRouter()
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)

  const paymentMethods = [
    {
      id: "card",
      name: "Credit/Debit Card",
      description: "Visa, Mastercard, American Express",
      icon: CreditCard,
      popular: true,
    },
    {
      id: "jazzcash",
      name: "JazzCash",
      description: "Pay with your JazzCash wallet",
      icon: Smartphone,
      popular: true,
    },
    {
      id: "easypaisa",
      name: "EasyPaisa",
      description: "Pay with your EasyPaisa wallet",
      icon: Smartphone,
      popular: true,
    },
    {
      id: "bank",
      name: "Bank Transfer",
      description: "Direct bank transfer",
      icon: Building,
      popular: false,
    },
    {
      id: "cod",
      name: "Cash on Delivery",
      description: "Pay when you receive your order",
      icon: Shield,
      popular: false,
    },
  ]

  // Mock order data
  const orderData = {
    items: [
      { name: "iPhone 15 Pro Max 256GB", quantity: 1, price: 450000 },
      { name: "MacBook Air M3 13-inch", quantity: 1, price: 380000 },
      { name: "Sony WH-1000XM5 Headphones", quantity: 2, price: 85000 },
    ],
    subtotal: 915000,
    shipping: 0,
    tax: 155550,
    total: 1070550,
    shippingAddress: "House 123, Street 45, F-8/2, Islamabad - 44000",
  }

  const handlePlaceOrder = async () => {
    if (!agreeTerms) {
      alert("Please agree to the terms and conditions")
      return
    }

    setIsProcessing(true)

    // Mock payment processing
    setTimeout(() => {
      setIsProcessing(false)
      router.push("/checkout/success/ORD-2024-001")
    }, 3000)
  }

  return (
    <div className="min-h-screen">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-2 mb-8">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/checkout/shipping">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Shipping
            </Link>
          </Button>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                ✓
              </div>
              <span className="text-green-600 font-medium">Shipping</span>
            </div>
            <div className="w-12 h-px bg-green-600"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                2
              </div>
              <span className="font-medium">Payment</span>
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
          {/* Payment Form */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Payment Method
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                  {paymentMethods.map((method) => (
                    <div key={method.id} className="flex items-center space-x-2">
                      <RadioGroupItem value={method.id} id={method.id} />
                      <Label htmlFor={method.id} className="flex-1 cursor-pointer">
                        <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50">
                          <div className="flex items-center gap-3">
                            <method.icon className="h-5 w-5 text-muted-foreground" />
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="font-medium">{method.name}</span>
                                {method.popular && (
                                  <Badge variant="secondary" className="text-xs">
                                    Popular
                                  </Badge>
                                )}
                              </div>
                              <p className="text-sm text-muted-foreground">{method.description}</p>
                            </div>
                          </div>
                        </div>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Payment Details */}
            {paymentMethod === "card" && (
              <Card>
                <CardHeader>
                  <CardTitle>Card Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input id="expiry" placeholder="MM/YY" />
                    </div>
                    <div>
                      <Label htmlFor="cvv">CVV</Label>
                      <Input id="cvv" placeholder="123" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="cardName">Name on Card</Label>
                    <Input id="cardName" placeholder="Ahmed Khan" />
                  </div>
                </CardContent>
              </Card>
            )}

            {(paymentMethod === "jazzcash" || paymentMethod === "easypaisa") && (
              <Card>
                <CardHeader>
                  <CardTitle>{paymentMethod === "jazzcash" ? "JazzCash" : "EasyPaisa"} Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="mobileNumber">Mobile Number</Label>
                    <Input id="mobileNumber" placeholder="+92 300 1234567" />
                  </div>
                  <div>
                    <Label htmlFor="pin">PIN</Label>
                    <Input id="pin" type="password" placeholder="Enter your PIN" />
                  </div>
                </CardContent>
              </Card>
            )}

            {paymentMethod === "bank" && (
              <Card>
                <CardContent className="p-6">
                  <div className="text-center space-y-4">
                    <Building className="h-12 w-12 text-muted-foreground mx-auto" />
                    <div>
                      <h3 className="font-semibold mb-2">Bank Transfer Details</h3>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <p>
                          <strong>Bank:</strong> Meezan Bank
                        </p>
                        <p>
                          <strong>Account Title:</strong> TechStore Pakistan
                        </p>
                        <p>
                          <strong>Account Number:</strong> 0123456789
                        </p>
                        <p>
                          <strong>IBAN:</strong> PK12MEZN0000000123456789
                        </p>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Please transfer the exact amount and share the receipt via WhatsApp: +92 300 1234567
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {paymentMethod === "cod" && (
              <Card>
                <CardContent className="p-6">
                  <div className="text-center space-y-4">
                    <Shield className="h-12 w-12 text-muted-foreground mx-auto" />
                    <div>
                      <h3 className="font-semibold mb-2">Cash on Delivery</h3>
                      <p className="text-sm text-muted-foreground">
                        Pay with cash when your order is delivered to your doorstep.
                      </p>
                    </div>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <p className="text-sm text-yellow-800">
                        <strong>Note:</strong> Additional Rs. 200 COD charges will apply.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Terms and Conditions */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-2">
                  <Checkbox id="terms" checked={agreeTerms} onCheckedChange={setAgreeTerms} />
                  <Label htmlFor="terms" className="text-sm leading-relaxed cursor-pointer">
                    I agree to the{" "}
                    <Link href="/terms" className="text-primary hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>
                    . I understand that my order will be processed according to these terms.
                  </Label>
                </div>
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
                <div className="space-y-3">
                  {orderData.items.map((item, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span>
                        {item.name} × {item.quantity}
                      </span>
                      <span>Rs. {(item.price * item.quantity).toLocaleString()}</span>
                    </div>
                  ))}
                </div>

                <Separator />

                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>Rs. {orderData.subtotal.toLocaleString()}</span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{orderData.shipping === 0 ? "Free" : `Rs. ${orderData.shipping.toLocaleString()}`}</span>
                </div>

                {paymentMethod === "cod" && (
                  <div className="flex justify-between">
                    <span>COD Charges</span>
                    <span>Rs. 200</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>Tax (GST 17%)</span>
                  <span>Rs. {orderData.tax.toLocaleString()}</span>
                </div>

                <Separator />

                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>Rs. {(orderData.total + (paymentMethod === "cod" ? 200 : 0)).toLocaleString()}</span>
                </div>

                <div className="text-sm text-muted-foreground">
                  <p className="font-medium mb-2">Delivering to:</p>
                  <p>{orderData.shippingAddress}</p>
                </div>

                <Button className="w-full" size="lg" onClick={handlePlaceOrder} disabled={!agreeTerms || isProcessing}>
                  <Lock className="h-4 w-4 mr-2" />
                  {isProcessing
                    ? "Processing..."
                    : `Place Order - Rs. ${(orderData.total + (paymentMethod === "cod" ? 200 : 0)).toLocaleString()}`}
                </Button>

                <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                  <Shield className="h-3 w-3" />
                  <span>Secure 256-bit SSL encryption</span>
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
