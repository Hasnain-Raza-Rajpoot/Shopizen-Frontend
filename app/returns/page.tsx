import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RotateCcw, CheckCircle, XCircle, Clock, Package, AlertCircle } from "lucide-react"

export default function ReturnsPage() {
  const returnSteps = [
    {
      step: 1,
      title: "Contact Us",
      description: "Contact our customer service within 30 days of delivery to initiate a return.",
    },
    {
      step: 2,
      title: "Get Authorization",
      description: "We'll provide you with a Return Authorization Number (RAN) and return instructions.",
    },
    {
      step: 3,
      title: "Package Item",
      description: "Pack the item securely in its original packaging with all accessories and documentation.",
    },
    {
      step: 4,
      title: "Schedule Pickup",
      description: "We'll arrange a pickup from your address or you can drop it off at our collection points.",
    },
    {
      step: 5,
      title: "Inspection & Refund",
      description: "Once we receive and inspect the item, your refund will be processed within 7-10 business days.",
    },
  ]

  const eligibleItems = [
    "Electronics in original packaging",
    "Clothing with tags attached",
    "Accessories in unused condition",
    "Home appliances (unopened)",
    "Books and media (undamaged)",
  ]

  const nonEligibleItems = [
    "Personalized or customized items",
    "Perishable goods",
    "Intimate apparel and swimwear",
    "Items damaged by misuse",
    "Software and digital downloads",
  ]

  return (
    <div className="min-h-screen">
      <Header />

      <main className="py-8">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Customer Service
            </Badge>
            <h1 className="text-4xl font-bold mb-4 text-balance">Returns & Exchanges</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              We want you to be completely satisfied with your purchase. Learn about our hassle-free return policy.
            </p>
          </div>

          {/* Return Policy Overview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <RotateCcw className="h-5 w-5 text-primary" />
                30-Day Return Policy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">30 Days</h3>
                  <p className="text-sm text-muted-foreground">Return window from delivery date</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Package className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Original Condition</h3>
                  <p className="text-sm text-muted-foreground">Items must be unused and in original packaging</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Free Returns</h3>
                  <p className="text-sm text-muted-foreground">No return shipping charges</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Return Process */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>How to Return an Item</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {returnSteps.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{step.title}</h4>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Button asChild>
                  <a href="/contact">Start Return Process</a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Eligible vs Non-Eligible Items */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-600">
                  <CheckCircle className="h-5 w-5" />
                  Eligible for Return
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {eligibleItems.map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-600">
                  <XCircle className="h-5 w-5" />
                  Not Eligible for Return
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {nonEligibleItems.map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <XCircle className="h-4 w-4 text-red-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Exchange Policy */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Exchange Policy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                We offer exchanges for size, color, or model changes within the same product category. Here's what you
                need to know:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Size Exchanges</h4>
                  <p className="text-sm text-muted-foreground">
                    Available for clothing, shoes, and accessories. Same price range items only.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Color/Model Exchanges</h4>
                  <p className="text-sm text-muted-foreground">
                    Subject to availability. Price differences will be adjusted accordingly.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Processing Time</h4>
                  <p className="text-sm text-muted-foreground">
                    Exchanges are processed within 5-7 business days after we receive the item.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Shipping</h4>
                  <p className="text-sm text-muted-foreground">
                    We'll cover return shipping. You pay for shipping the replacement item.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Important Notes */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-amber-500" />
                Important Notes
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <p className="text-sm text-amber-800">
                  <strong>Refund Timeline:</strong> Refunds are processed to the original payment method within 7-10
                  business days after we receive and inspect the returned item.
                </p>
              </div>
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Return Authorization:</strong> All returns must have a Return Authorization Number (RAN).
                  Items returned without RAN may be refused.
                </p>
              </div>
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-sm text-green-800">
                  <strong>Quality Guarantee:</strong> If you receive a defective or damaged item, we'll provide a full
                  refund or replacement at no cost to you.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
