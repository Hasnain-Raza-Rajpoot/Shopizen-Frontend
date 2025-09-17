import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plane, Package, Calculator, AlertTriangle, Info, Globe } from "lucide-react"

export default function ImportDutyPage() {
  const dutyCategories = [
    {
      category: "Electronics",
      dutyRate: "15-25%",
      additionalCharges: "Sales Tax 17%, Regulatory Duty varies",
      examples: ["Smartphones", "Laptops", "Gaming Consoles", "Audio Equipment"],
    },
    {
      category: "Home Appliances",
      dutyRate: "20-35%",
      additionalCharges: "Sales Tax 17%, Additional Customs Duty 2%",
      examples: ["Refrigerators", "Washing Machines", "Air Conditioners", "Kitchen Appliances"],
    },
    {
      category: "Fashion & Accessories",
      dutyRate: "25-35%",
      additionalCharges: "Sales Tax 17%, Regulatory Duty 5%",
      examples: ["Clothing", "Shoes", "Bags", "Jewelry", "Watches"],
    },
    {
      category: "Books & Educational",
      dutyRate: "0-5%",
      additionalCharges: "Sales Tax 0% (exempt)",
      examples: ["Books", "Educational Materials", "Scientific Instruments"],
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
              Import Information
            </Badge>
            <h1 className="text-4xl font-bold mb-4 text-balance">Import Duty Information</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Understanding import duties, customs charges, and additional fees for international purchases.
            </p>
          </div>

          {/* Import Overview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                Import Duty Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                When purchasing international products, additional charges including customs duty, sales tax, and
                regulatory duties may apply. These charges are determined by Pakistan Customs and are collected at the
                time of delivery.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Plane className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">International Shipping</h3>
                  <p className="text-sm text-muted-foreground">Products shipped from overseas</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Package className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Customs Clearance</h3>
                  <p className="text-sm text-muted-foreground">Processed through Pakistan Customs</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calculator className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Duty Calculation</h3>
                  <p className="text-sm text-muted-foreground">Based on product value and category</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Duty Rates by Category */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Import Duty Rates by Category</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {dutyCategories.map((category, index) => (
                  <div key={index} className="border rounded-lg p-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div>
                        <h3 className="font-semibold text-primary mb-2">{category.category}</h3>
                        <div className="flex flex-wrap gap-1">
                          {category.examples.map((example, exampleIndex) => (
                            <Badge key={exampleIndex} variant="outline" className="text-xs">
                              {example}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Customs Duty</h4>
                        <p className="text-lg font-bold text-primary">{category.dutyRate}</p>
                      </div>
                      <div className="md:col-span-2">
                        <h4 className="font-medium mb-1">Additional Charges</h4>
                        <p className="text-sm text-muted-foreground">{category.additionalCharges}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Duty Calculation Example */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5 text-primary" />
                Import Duty Calculation Example
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/30 rounded-lg p-6">
                <h4 className="font-semibold mb-4">Example: Imported Smartphone (Value: $500)</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Product Value (USD $500):</span>
                    <span className="font-medium">Rs. 140,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Customs Duty (20%):</span>
                    <span className="font-medium">Rs. 28,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sales Tax (17% on duty-paid value):</span>
                    <span className="font-medium">Rs. 28,560</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Regulatory Duty (5%):</span>
                    <span className="font-medium">Rs. 7,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Customs Processing Fee:</span>
                    <span className="font-medium">Rs. 1,000</span>
                  </div>
                  <hr className="my-3" />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total Import Charges:</span>
                    <span className="text-primary">Rs. 64,560</span>
                  </div>
                  <div className="flex justify-between text-xl font-bold border-t pt-3">
                    <span>Total Cost (Product + Duties):</span>
                    <span className="text-primary">Rs. 204,560</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  * Exchange rates and duty rates are subject to change. Actual charges may vary.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Important Information */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="h-5 w-5 text-blue-500" />
                  How Import Duties Work
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Assessment</h4>
                  <p className="text-sm text-muted-foreground">
                    Pakistan Customs assesses duties based on the declared value of goods and applicable tariff rates.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Payment</h4>
                  <p className="text-sm text-muted-foreground">
                    Import duties must be paid before customs clearance. Payment can be made at customs or through
                    authorized agents.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Delivery</h4>
                  <p className="text-sm text-muted-foreground">
                    Once duties are paid and clearance is obtained, your package will be delivered to your address.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-amber-500" />
                  Important Considerations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Duty Rates Change</h4>
                  <p className="text-sm text-muted-foreground">
                    Import duty rates are subject to change based on government policies and trade agreements.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Prohibited Items</h4>
                  <p className="text-sm text-muted-foreground">
                    Some items may be prohibited or restricted for import. Check with Pakistan Customs for current
                    regulations.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Documentation</h4>
                  <p className="text-sm text-muted-foreground">
                    Proper documentation including invoice, packing list, and certificates may be required for
                    clearance.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Exemptions and Concessions */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Duty Exemptions and Concessions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4">Exempt Categories</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      Books and educational materials
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      Medical equipment and medicines
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      Scientific instruments for research
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      Items for disabled persons
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Reduced Duty Items</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      Raw materials for local industry
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      Agricultural machinery
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      Solar panels and renewable energy equipment
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      IT equipment for software houses
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Import Duty Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                For questions about import duties or customs procedures, contact our import support team:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Email</h4>
                  <p className="text-sm text-muted-foreground">imports@ecompk.com</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Phone</h4>
                  <p className="text-sm text-muted-foreground">+92-300-1234567 (Ext: 4)</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Business Hours</h4>
                  <p className="text-sm text-muted-foreground">Mon-Fri: 9 AM - 6 PM</p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Note:</strong> Import duty information is provided for guidance only. Actual duties and
                  charges are determined by Pakistan Customs at the time of clearance and may vary based on current
                  regulations and exchange rates.
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
