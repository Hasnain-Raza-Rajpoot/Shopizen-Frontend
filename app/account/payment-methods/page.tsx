"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { AccountSidebar } from "@/components/account/account-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Plus, CreditCard, Trash2, Edit, Shield } from "lucide-react"

export default function PaymentMethodsPage() {
  const [paymentMethods, setPaymentMethods] = useState([
    {
      id: 1,
      type: "card",
      brand: "visa",
      last4: "4242",
      expiryMonth: "12",
      expiryYear: "2025",
      holderName: "Ahmed Khan",
      isDefault: true,
    },
    {
      id: 2,
      type: "card",
      brand: "mastercard",
      last4: "8888",
      expiryMonth: "08",
      expiryYear: "2026",
      holderName: "Ahmed Khan",
      isDefault: false,
    },
  ])

  const [isAddingCard, setIsAddingCard] = useState(false)

  const getCardBrandIcon = (brand: string) => {
    switch (brand) {
      case "visa":
        return "💳"
      case "mastercard":
        return "💳"
      case "amex":
        return "💳"
      default:
        return "💳"
    }
  }

  const getCardBrandName = (brand: string) => {
    switch (brand) {
      case "visa":
        return "Visa"
      case "mastercard":
        return "Mastercard"
      case "amex":
        return "American Express"
      default:
        return "Card"
    }
  }

  const handleSetDefault = (cardId: number) => {
    setPaymentMethods((methods) =>
      methods.map((method) => ({
        ...method,
        isDefault: method.id === cardId,
      })),
    )
  }

  const handleDeleteCard = (cardId: number) => {
    setPaymentMethods((methods) => methods.filter((method) => method.id !== cardId))
  }

  return (
    <div className="min-h-screen">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          <AccountSidebar />

          <div className="flex-1 space-y-8">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold mb-2">Payment Methods</h1>
                <p className="text-muted-foreground">Manage your saved payment methods</p>
              </div>
              <Dialog open={isAddingCard} onOpenChange={setIsAddingCard}>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Payment Method
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>Add New Card</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiryDate">Expiry Date</Label>
                        <Input id="expiryDate" placeholder="MM/YY" />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="123" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="holderName">Cardholder Name</Label>
                      <Input id="holderName" placeholder="Ahmed Khan" />
                    </div>
                    <div>
                      <Label htmlFor="billingAddress">Billing Address</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select address" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="home">Home Address</SelectItem>
                          <SelectItem value="office">Office Address</SelectItem>
                          <SelectItem value="new">Add New Address</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex gap-2">
                      <Button className="flex-1" onClick={() => setIsAddingCard(false)}>
                        Add Card
                      </Button>
                      <Button variant="outline" onClick={() => setIsAddingCard(false)}>
                        Cancel
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* Security Notice */}
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium text-blue-900">Your payment information is secure</p>
                    <p className="text-sm text-blue-700">
                      We use industry-standard encryption to protect your payment details. Your card information is
                      never stored on our servers.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {paymentMethods.length === 0 ? (
              <Card>
                <CardContent className="p-12 text-center">
                  <CreditCard className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">No payment methods saved</h3>
                  <p className="text-muted-foreground mb-4">
                    Add a payment method to make checkout faster and more convenient.
                  </p>
                  <Button onClick={() => setIsAddingCard(true)}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Your First Card
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {paymentMethods.map((method) => (
                  <Card key={method.id} className={method.isDefault ? "ring-2 ring-primary" : ""}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-8 bg-gradient-to-r from-gray-700 to-gray-900 rounded flex items-center justify-center text-white text-lg">
                            {getCardBrandIcon(method.brand)}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <p className="font-medium">
                                {getCardBrandName(method.brand)} ending in {method.last4}
                              </p>
                              {method.isDefault && <Badge variant="default">Default</Badge>}
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Expires {method.expiryMonth}/{method.expiryYear} • {method.holderName}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {!method.isDefault && (
                            <Button size="sm" variant="outline" onClick={() => handleSetDefault(method.id)}>
                              Set as Default
                            </Button>
                          )}
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4 mr-2" />
                            Edit
                          </Button>
                          <Button size="sm" variant="outline" onClick={() => handleDeleteCard(method.id)}>
                            <Trash2 className="h-4 w-4 mr-2" />
                            Remove
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {/* Alternative Payment Methods */}
            <Card>
              <CardHeader>
                <CardTitle>Alternative Payment Methods</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg text-center">
                    <div className="text-2xl mb-2">💰</div>
                    <p className="font-medium">JazzCash</p>
                    <p className="text-sm text-muted-foreground">Mobile wallet payments</p>
                  </div>
                  <div className="p-4 border rounded-lg text-center">
                    <div className="text-2xl mb-2">📱</div>
                    <p className="font-medium">EasyPaisa</p>
                    <p className="text-sm text-muted-foreground">Digital wallet payments</p>
                  </div>
                  <div className="p-4 border rounded-lg text-center">
                    <div className="text-2xl mb-2">🏦</div>
                    <p className="font-medium">Bank Transfer</p>
                    <p className="text-sm text-muted-foreground">Direct bank payments</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  These payment methods are available during checkout and don't need to be saved in advance.
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
