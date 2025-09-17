import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Eye, Lock, Database, UserCheck, Globe } from "lucide-react"

export default function PrivacyPage() {
  const privacySections = [
    {
      icon: Database,
      title: "Information We Collect",
      content: [
        "Personal information you provide when creating an account (name, email, phone number, address)",
        "Payment information processed securely through our payment partners",
        "Order history and purchase preferences",
        "Device information and IP address for security purposes",
        "Cookies and similar technologies for website functionality",
      ],
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      content: [
        "Process and fulfill your orders",
        "Communicate about your purchases and account",
        "Provide customer support and respond to inquiries",
        "Improve our products and services",
        "Send promotional offers (with your consent)",
        "Prevent fraud and ensure platform security",
      ],
    },
    {
      icon: UserCheck,
      title: "Information Sharing",
      content: [
        "We do not sell your personal information to third parties",
        "Shipping partners receive necessary delivery information",
        "Payment processors handle transaction data securely",
        "Legal authorities may receive information if required by law",
        "Service providers who help us operate our platform (under strict agreements)",
      ],
    },
    {
      icon: Lock,
      title: "Data Security",
      content: [
        "Industry-standard encryption for all data transmission",
        "Secure servers with regular security updates",
        "Limited access to personal information by authorized personnel only",
        "Regular security audits and monitoring",
        "Secure payment processing through certified partners",
      ],
    },
    {
      icon: Shield,
      title: "Your Rights",
      content: [
        "Access your personal information at any time",
        "Request correction of inaccurate information",
        "Delete your account and associated data",
        "Opt-out of marketing communications",
        "Request data portability",
        "File complaints with relevant authorities",
      ],
    },
    {
      icon: Globe,
      title: "Cookies & Tracking",
      content: [
        "Essential cookies for website functionality",
        "Analytics cookies to understand user behavior (anonymized)",
        "Marketing cookies for personalized advertising (with consent)",
        "You can manage cookie preferences in your browser",
        "Some features may not work if cookies are disabled",
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
            <h1 className="text-4xl font-bold mb-4 text-balance">Privacy Policy</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Your privacy is important to us. Learn how we collect, use, and protect your personal information.
            </p>
            <p className="text-sm text-muted-foreground mt-4">Last updated: January 1, 2024</p>
          </div>

          {/* Introduction */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Introduction</h2>
              <p className="text-muted-foreground mb-4">
                EcomPK ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how
                we collect, use, disclose, and safeguard your information when you visit our website and use our
                services.
              </p>
              <p className="text-muted-foreground">
                By using our website and services, you consent to the data practices described in this policy. If you do
                not agree with the practices described in this policy, please do not use our website or services.
              </p>
            </CardContent>
          </Card>

          {/* Privacy Sections */}
          <div className="space-y-8">
            {privacySections.map((section, index) => (
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

          {/* Data Retention */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Data Retention</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in
                this privacy policy, unless a longer retention period is required or permitted by law.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Account Information</h4>
                  <p className="text-sm text-muted-foreground">
                    Retained until you delete your account or request deletion
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Order History</h4>
                  <p className="text-sm text-muted-foreground">
                    Retained for 7 years for tax and legal compliance purposes
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Marketing Data</h4>
                  <p className="text-sm text-muted-foreground">Retained until you opt-out or request deletion</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Analytics Data</h4>
                  <p className="text-sm text-muted-foreground">Anonymized data retained for up to 2 years</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Contact Us About Privacy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Email</h4>
                  <p className="text-sm text-muted-foreground">privacy@ecompk.com</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Phone</h4>
                  <p className="text-sm text-muted-foreground">+92-300-1234567</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Address</h4>
                  <p className="text-sm text-muted-foreground">
                    EcomPK Privacy Office
                    <br />
                    Block 5, Clifton
                    <br />
                    Karachi, Pakistan
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Updates */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Policy Updates</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this
                Privacy Policy periodically for any changes.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
