import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calculator, FileText, Info, AlertCircle, CheckCircle, Globe } from "lucide-react"

export default function TaxInfoPage() {
  const taxCategories = [
    {
      category: "Electronics",
      gst: "17%",
      additionalTax: "2% WHT (if applicable)",
      examples: ["Smartphones", "Laptops", "Tablets", "Accessories"],
    },
    {
      category: "Home Appliances",
      gst: "17%",
      additionalTax: "1% WHT (if applicable)",
      examples: ["Refrigerators", "Washing Machines", "Air Conditioners"],
    },
    {
      category: "Fashion & Clothing",
      gst: "17%",
      additionalTax: "1% WHT (if applicable)",
      examples: ["Clothing", "Shoes", "Bags", "Accessories"],
    },
    {
      category: "Books & Media",
      gst: "0%",
      additionalTax: "No additional tax",
      examples: ["Books", "Educational Materials", "Software"],
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
              Tax Information
            </Badge>
            <h1 className="text-4xl font-bold mb-4 text-balance">Tax Information</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Understanding taxes, GST, and additional charges on your purchases in Pakistan.
            </p>
          </div>

          {/* Tax Overview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                Tax Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                All prices displayed on EcomPK are inclusive of applicable taxes unless otherwise specified. We comply
                with Pakistan's tax regulations and collect taxes as required by law.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calculator className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">GST Included</h3>
                  <p className="text-sm text-muted-foreground">All prices include applicable GST</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Tax Invoice</h3>
                  <p className="text-sm text-muted-foreground">Detailed tax invoice provided</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Compliant</h3>
                  <p className="text-sm text-muted-foreground">Fully compliant with FBR regulations</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tax Rates by Category */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Tax Rates by Product Category</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {taxCategories.map((category, index) => (
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
                        <h4 className="font-medium mb-1">GST Rate</h4>
                        <p className="text-lg font-bold text-primary">{category.gst}</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Additional Tax</h4>
                        <p className="text-sm text-muted-foreground">{category.additionalTax}</p>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span className="text-sm text-muted-foreground ml-2">Included in price</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Tax Calculation Example */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5 text-primary" />
                Tax Calculation Example
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/30 rounded-lg p-6">
                <h4 className="font-semibold mb-4">Example: Smartphone Purchase</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Product Price (excluding tax):</span>
                    <span className="font-medium">Rs. 85,470</span>
                  </div>
                  <div className="flex justify-between">
                    <span>GST (17%):</span>
                    <span className="font-medium">Rs. 14,530</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Withholding Tax (2%):</span>
                    <span className="font-medium">Rs. 1,709</span>
                  </div>
                  <hr className="my-3" />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total Price (displayed on website):</span>
                    <span className="text-primary">Rs. 100,000</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  * Withholding tax may vary based on customer type and transaction amount
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Important Information */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-amber-500" />
                  Important Notes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Withholding Tax (WHT)</h4>
                  <p className="text-sm text-muted-foreground">
                    WHT rates may vary based on your tax status. Registered businesses may have different rates than
                    individual consumers.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Tax Exemptions</h4>
                  <p className="text-sm text-muted-foreground">
                    Certain products like books and educational materials may be exempt from GST. Tax exemptions are
                    clearly marked on product pages.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Business Purchases</h4>
                  <p className="text-sm text-muted-foreground">
                    If you're a registered business, please provide your NTN for proper tax treatment and invoice
                    generation.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Tax Documentation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Tax Invoice</h4>
                  <p className="text-sm text-muted-foreground">
                    A detailed tax invoice is provided with every purchase, showing the breakdown of all applicable
                    taxes.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Tax Certificate</h4>
                  <p className="text-sm text-muted-foreground">
                    For business purchases, we provide tax certificates that can be used for your tax filings and
                    claims.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Record Keeping</h4>
                  <p className="text-sm text-muted-foreground">
                    All tax documents are available in your account dashboard and can be downloaded anytime.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* FBR Compliance */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>FBR Compliance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4">Our Compliance</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Registered with FBR as a tax-compliant business
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Regular filing of sales tax returns
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Proper withholding tax collection and remittance
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Detailed record keeping as per FBR requirements
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Customer Benefits</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Valid tax invoices for business expense claims
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Proper documentation for audit purposes
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Transparent tax breakdown on all purchases
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Support for your tax compliance needs
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact for Tax Queries */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Tax-Related Queries</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                For specific tax-related questions or business tax requirements, please contact our tax department:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Email</h4>
                  <p className="text-sm text-muted-foreground">tax@ecompk.com</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Phone</h4>
                  <p className="text-sm text-muted-foreground">+92-300-1234567 (Ext: 3)</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Business Hours</h4>
                  <p className="text-sm text-muted-foreground">Mon-Fri: 9 AM - 5 PM</p>
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
