import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, ShoppingCart, Shield, AlertTriangle, Scale, Users } from "lucide-react"

export default function TermsPage() {
  const termsSections = [
    {
      icon: Users,
      title: "Acceptance of Terms",
      content: [
        "By accessing and using EcomPK, you accept and agree to be bound by these Terms of Service",
        "If you do not agree to these terms, please do not use our website or services",
        "These terms apply to all visitors, users, and customers of our platform",
        "We reserve the right to update these terms at any time without prior notice",
      ],
    },
    {
      icon: ShoppingCart,
      title: "Use of Our Service",
      content: [
        "You must be at least 18 years old to make purchases on our platform",
        "You are responsible for maintaining the confidentiality of your account",
        "You agree to provide accurate and complete information when creating an account",
        "You may not use our service for any illegal or unauthorized purpose",
        "We reserve the right to refuse service to anyone for any reason",
      ],
    },
    {
      icon: FileText,
      title: "Orders and Payments",
      content: [
        "All orders are subject to acceptance and availability",
        "Prices are subject to change without notice",
        "Payment must be received before order processing",
        "We accept various payment methods as displayed at checkout",
        "You are responsible for any applicable taxes and duties",
      ],
    },
    {
      icon: Shield,
      title: "Product Information",
      content: [
        "We strive to provide accurate product descriptions and images",
        "Colors may vary due to monitor settings and photography",
        "Product availability is subject to change without notice",
        "We reserve the right to limit quantities on any product",
        "All products are subject to our return and exchange policy",
      ],
    },
    {
      icon: Scale,
      title: "Intellectual Property",
      content: [
        "All content on this website is owned by EcomPK or our licensors",
        "You may not reproduce, distribute, or create derivative works without permission",
        "Product images and descriptions are protected by copyright",
        "Our trademarks and logos may not be used without written consent",
        "User-generated content may be used by us for promotional purposes",
      ],
    },
    {
      icon: AlertTriangle,
      title: "Limitation of Liability",
      content: [
        "Our liability is limited to the maximum extent permitted by law",
        "We are not liable for indirect, incidental, or consequential damages",
        "Our total liability shall not exceed the amount paid for the product",
        "We do not warrant that our service will be uninterrupted or error-free",
        "You use our service at your own risk",
      ],
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
              Legal Information
            </Badge>
            <h1 className="text-4xl font-bold mb-4 text-balance">Terms of Service</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Please read these terms carefully before using our website and services.
            </p>
            <p className="text-sm text-muted-foreground mt-4">Last updated: January 1, 2024</p>
          </div>

          {/* Introduction */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Welcome to EcomPK</h2>
              <p className="text-muted-foreground mb-4">
                These Terms of Service ("Terms") govern your use of the EcomPK website and services operated by EcomPK
                ("us", "we", or "our"). These Terms apply to all visitors, users, and others who access or use our
                service.
              </p>
              <p className="text-muted-foreground">
                By accessing or using our service, you agree to be bound by these Terms. If you disagree with any part
                of these terms, then you may not access the service.
              </p>
            </CardContent>
          </Card>

          {/* Terms Sections */}
          <div className="space-y-8">
            {termsSections.map((section, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <section.icon className="h-5 w-5 text-primary" />
                    </div>
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Terms */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Shipping and Delivery</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground text-sm">
                  Delivery times are estimates and not guaranteed. We are not responsible for delays caused by courier
                  services, weather conditions, or other factors beyond our control.
                </p>
                <p className="text-muted-foreground text-sm">
                  Risk of loss and title for products pass to you upon delivery to the carrier. We recommend purchasing
                  shipping insurance for high-value items.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Returns and Refunds</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground text-sm">
                  Returns must be initiated within 30 days of delivery. Items must be in original condition with all
                  packaging and accessories.
                </p>
                <p className="text-muted-foreground text-sm">
                  Refunds will be processed to the original payment method within 7-10 business days after we receive
                  and inspect the returned item.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Privacy and Data Protection</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground text-sm">
                  Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use,
                  and protect your information.
                </p>
                <p className="text-muted-foreground text-sm">
                  By using our service, you consent to the collection and use of information in accordance with our
                  Privacy Policy.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Governing Law</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground text-sm">
                  These Terms shall be governed by and construed in accordance with the laws of Pakistan, without regard
                  to its conflict of law provisions.
                </p>
                <p className="text-muted-foreground text-sm">
                  Any disputes arising from these Terms or your use of our service shall be subject to the exclusive
                  jurisdiction of the courts of Pakistan.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Prohibited Uses */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-red-500" />
                Prohibited Uses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                You may not use our service for any of the following prohibited activities:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                    Violating any applicable laws or regulations
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                    Transmitting harmful or malicious code
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                    Attempting to gain unauthorized access
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                    Engaging in fraudulent activities
                  </li>
                </ul>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                    Harassing or abusing other users
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                    Impersonating others or providing false information
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                    Interfering with the proper functioning of the service
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                    Using automated systems to access the service
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Email</h4>
                  <p className="text-sm text-muted-foreground">legal@ecompk.com</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Phone</h4>
                  <p className="text-sm text-muted-foreground">+92-300-1234567</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Address</h4>
                  <p className="text-sm text-muted-foreground">
                    EcomPK Legal Department
                    <br />
                    Block 5, Clifton
                    <br />
                    Karachi, Pakistan
                  </p>
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
