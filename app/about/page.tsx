import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Target, Award, Globe, Heart, Zap, Shield, Truck } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description:
        "We put our customers at the center of everything we do, ensuring exceptional service and satisfaction.",
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description:
        "Building trust through secure transactions, authentic products, and transparent business practices.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Continuously improving our platform with cutting-edge technology and user-friendly features.",
    },
    {
      icon: Globe,
      title: "Accessibility",
      description: "Making quality products accessible to everyone across Pakistan with competitive pricing.",
    },
  ]

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "EcomPK was established with a vision to revolutionize online shopping in Pakistan.",
    },
    {
      year: "2021",
      title: "10,000+ Products",
      description: "Expanded our catalog to include over 10,000 products across multiple categories.",
    },
    {
      year: "2022",
      title: "Nationwide Delivery",
      description: "Launched delivery services to all major cities and towns across Pakistan.",
    },
    {
      year: "2023",
      title: "1 Million Customers",
      description: "Reached the milestone of serving over 1 million satisfied customers.",
    },
    {
      year: "2024",
      title: "Mobile App Launch",
      description: "Launched our mobile app for iOS and Android with enhanced shopping experience.",
    },
  ]

  const stats = [
    { number: "1M+", label: "Happy Customers" },
    { number: "50K+", label: "Products" },
    { number: "100+", label: "Cities Served" },
    { number: "99.5%", label: "Customer Satisfaction" },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      <main className="py-8">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              About EcomPK
            </Badge>
            <h1 className="text-4xl font-bold mb-4 text-balance">Our Story</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Transforming online shopping in Pakistan with quality products, exceptional service, and innovative
              technology.
            </p>
          </div>

          {/* Hero Section */}
          <Card className="mb-12">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Revolutionizing E-commerce in Pakistan</h2>
                  <p className="text-muted-foreground mb-4">
                    Founded in 2020, EcomPK has grown from a small startup to Pakistan's leading e-commerce platform.
                    We're passionate about making quality products accessible to everyone across the country.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Our mission is simple: to provide an exceptional online shopping experience with authentic products,
                    competitive prices, and reliable delivery services that reach every corner of Pakistan.
                  </p>
                  <Button asChild>
                    <a href="/contact">Get in Touch</a>
                  </Button>
                </div>
                <div className="relative">
                  <img src="/modern-office-team.png" alt="EcomPK Team" className="rounded-lg shadow-lg" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To democratize access to quality products across Pakistan by providing a seamless, secure, and
                  affordable online shopping experience. We strive to connect customers with authentic products from
                  trusted brands while supporting local businesses and entrepreneurs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To become Pakistan's most trusted and innovative e-commerce platform, setting new standards for
                  customer service, product quality, and technological excellence. We envision a future where every
                  Pakistani has access to the world's best products at their fingertips.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Values */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-center">Our Core Values</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Timeline */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-center">Our Journey</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                        {milestone.year}
                      </div>
                      {index < milestones.length - 1 && <div className="w-0.5 h-16 bg-border mt-4" />}
                    </div>
                    <div className="flex-1 pb-8">
                      <h3 className="font-semibold text-lg mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* What Sets Us Apart */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>What Sets Us Apart</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Truck className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Fast & Reliable Delivery</h4>
                    <p className="text-sm text-muted-foreground">
                      Same-day delivery in major cities and nationwide coverage with tracking.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Authentic Products</h4>
                    <p className="text-sm text-muted-foreground">
                      100% genuine products with manufacturer warranties and quality guarantees.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">24/7 Customer Support</h4>
                    <p className="text-sm text-muted-foreground">
                      Round-the-clock customer service in Urdu and English.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Team Section */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-center">Meet Our Leadership Team</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <img
                    src="/professional-ceo-headshot.png"
                    alt="CEO"
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-semibold mb-1">Ahmed Khan</h3>
                  <p className="text-sm text-muted-foreground mb-2">Chief Executive Officer</p>
                  <p className="text-xs text-muted-foreground">15+ years in e-commerce and technology leadership</p>
                </div>
                <div className="text-center">
                  <img
                    src="/professional-cto-headshot.jpg"
                    alt="CTO"
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-semibold mb-1">Sarah Ali</h3>
                  <p className="text-sm text-muted-foreground mb-2">Chief Technology Officer</p>
                  <p className="text-xs text-muted-foreground">Expert in scalable platforms and digital innovation</p>
                </div>
                <div className="text-center">
                  <img
                    src="/professional-coo-headshot.jpg"
                    alt="COO"
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-semibold mb-1">Hassan Sheikh</h3>
                  <p className="text-sm text-muted-foreground mb-2">Chief Operations Officer</p>
                  <p className="text-xs text-muted-foreground">Logistics and supply chain optimization specialist</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card>
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Join Our Journey</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Be part of Pakistan's e-commerce revolution. Whether you're a customer, partner, or potential team
                member, we'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <a href="/careers">View Careers</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/contact">Contact Us</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
