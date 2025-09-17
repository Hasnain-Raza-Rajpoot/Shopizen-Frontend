import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, CheckCircle, Clock, FileText, Phone, AlertTriangle } from "lucide-react"

export default function WarrantyPage() {
  const warrantyTypes = [
    {
      type: "Manufacturer Warranty",
      description: "Original warranty provided by the product manufacturer",
      coverage: "Defects in materials and workmanship",
      duration: "Varies by product (6 months to 3 years)",
      icon: Shield,
    },
    {
      type: "Extended Warranty",
      description: "Additional warranty coverage beyond manufacturer warranty",
      coverage: "Extended protection against defects and failures",
      duration: "1-2 years additional coverage",
      icon: Clock,
    },
    {
      type: "Accidental Damage Protection",
      description: "Coverage for accidental damage and liquid spills",
      coverage: "Drops, spills, and accidental damage",
      duration: "1-2 years from purchase date",
      icon: AlertTriangle,
    },
  ]

  const warrantyCategories = [
    {
      category: "Electronics",
      items: ["Smartphones", "Laptops", "Tablets", "Headphones", "Cameras"],
      warranty: "1-2 years manufacturer warranty",
      coverage: "Hardware defects, software issues, battery problems",
    },
    {
      category: "Home Appliances",
      items: ["Refrigerators", "Washing Machines", "Air Conditioners", "Microwaves"],
      warranty: "1-3 years manufacturer warranty",
      coverage: "Motor, compressor, and electrical component defects",
    },
    {
      category: "Fashion & Accessories",
      items: ["Watches", "Jewelry", "Bags", "Shoes"],
      warranty: "6 months to 1 year",
      coverage: "Manufacturing defects and material quality issues",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      <main className="py-8">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Product Protection
            </Badge>
            <h1 className="text-4xl font-bold mb-4 text-balance">Warranty Information</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Learn about warranty coverage, claims process, and how we protect your purchases.
            </p>
          </div>

          {/* Warranty Types */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {warrantyTypes.map((warranty, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <warranty.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-center mb-2">{warranty.type}</h3>
                  <p className="text-sm text-muted-foreground text-center mb-4">{warranty.description}</p>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-medium">Coverage:</span>
                      <p className="text-muted-foreground">{warranty.coverage}</p>
                    </div>
                    <div>
                      <span className="font-medium">Duration:</span>
                      <p className="text-muted-foreground">{warranty.duration}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Warranty by Category */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Warranty Coverage by Category</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {warrantyCategories.map((category, index) => (
                  <div key={index} className="border rounded-lg p-6">
                    <h3 className="font-semibold text-lg mb-3 text-primary">{category.category}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-medium mb-2">Products</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {category.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-center gap-2">
                              <CheckCircle className="h-3 w-3 text-green-500" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Warranty Period</h4>
                        <p className="text-sm text-muted-foreground">{category.warranty}</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Coverage</h4>
                        <p className="text-sm text-muted-foreground">{category.coverage}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Warranty Claims Process */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                How to Claim Warranty
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="font-semibold">Step-by-Step Process</h4>
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xs">
                        1
                      </div>
                      <div>
                        <p className="font-medium">Contact Support</p>
                        <p className="text-sm text-muted-foreground">Call or email our warranty department</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xs">
                        2
                      </div>
                      <div>
                        <p className="font-medium">Provide Details</p>
                        <p className="text-sm text-muted-foreground">
                          Share order number, product details, and issue description
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xs">
                        3
                      </div>
                      <div>
                        <p className="font-medium">Assessment</p>
                        <p className="text-sm text-muted-foreground">Our team will assess the warranty claim</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xs">
                        4
                      </div>
                      <div>
                        <p className="font-medium">Resolution</p>
                        <p className="text-sm text-muted-foreground">Repair, replacement, or refund as applicable</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold">Required Information</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Order number or invoice
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Product serial number
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Purchase date
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Detailed problem description
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Photos/videos of the issue (if applicable)
                    </li>
                  </ul>
                  <div className="mt-6">
                    <Button className="w-full" asChild>
                      <a href="/contact">File Warranty Claim</a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Warranty Terms */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">What's Covered</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Manufacturing defects in materials and workmanship
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Hardware failures under normal use conditions
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Software issues and firmware problems
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Battery degradation beyond normal wear
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Screen defects and display issues
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-red-600">What's Not Covered</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                    Physical damage from drops, impacts, or accidents
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                    Water damage or liquid spills
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                    Damage from misuse or abuse
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                    Normal wear and tear
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                    Unauthorized repairs or modifications
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                Warranty Support Contact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <h4 className="font-semibold mb-2">Phone Support</h4>
                  <p className="text-muted-foreground mb-2">Call our warranty hotline</p>
                  <p className="font-medium">+92-300-1234567</p>
                  <p className="text-sm text-muted-foreground">Mon-Fri: 9 AM - 6 PM</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Email Support</h4>
                  <p className="text-muted-foreground mb-2">Send warranty inquiries</p>
                  <p className="font-medium">warranty@ecompk.com</p>
                  <p className="text-sm text-muted-foreground">Response within 24 hours</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Service Centers</h4>
                  <p className="text-muted-foreground mb-2">Visit our service centers</p>
                  <p className="font-medium">Karachi, Lahore, Islamabad</p>
                  <p className="text-sm text-muted-foreground">Walk-in service available</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
