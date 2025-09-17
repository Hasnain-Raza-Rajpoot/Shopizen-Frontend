import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Truck, Clock, MapPin, Package, Shield, CheckCircle } from "lucide-react"

export default function ShippingPage() {
  const shippingZones = [
    {
      zone: "Major Cities",
      cities: "Karachi, Lahore, Islamabad, Rawalpindi, Faisalabad",
      deliveryTime: "2-3 Business Days",
      cost: "Free on orders Rs. 2000+, Rs. 150 otherwise",
    },
    {
      zone: "Other Cities",
      cities: "Multan, Peshawar, Quetta, Sialkot, Gujranwala, etc.",
      deliveryTime: "3-5 Business Days",
      cost: "Free on orders Rs. 2000+, Rs. 250 otherwise",
    },
    {
      zone: "Remote Areas",
      cities: "Rural areas and smaller towns",
      deliveryTime: "5-7 Business Days",
      cost: "Rs. 350 (Free shipping not applicable)",
    },
  ]

  const shippingFeatures = [
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Quick delivery across Pakistan with reliable courier partners",
    },
    {
      icon: Package,
      title: "Secure Packaging",
      description: "All items are carefully packaged to prevent damage during transit",
    },
    {
      icon: Shield,
      title: "Insured Shipping",
      description: "All shipments are insured against loss or damage",
    },
    {
      icon: CheckCircle,
      title: "Order Tracking",
      description: "Track your order status in real-time from dispatch to delivery",
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
              Delivery Information
            </Badge>
            <h1 className="text-4xl font-bold mb-4 text-balance">Shipping Information</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Learn about our shipping policies, delivery times, and costs across Pakistan.
            </p>
          </div>

          {/* Shipping Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {shippingFeatures.map((feature, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Shipping Zones */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Shipping Zones & Rates
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {shippingZones.map((zone, index) => (
                  <div key={index} className="border rounded-lg p-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div>
                        <h3 className="font-semibold text-primary mb-2">{zone.zone}</h3>
                        <p className="text-sm text-muted-foreground">{zone.cities}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium">{zone.deliveryTime}</span>
                      </div>
                      <div className="md:col-span-2">
                        <span className="text-sm font-medium">{zone.cost}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Shipping Policies */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Shipping Policies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Order Processing Time</h4>
                  <p className="text-sm text-muted-foreground">
                    Orders are processed within 1-2 business days. Orders placed on weekends or holidays will be
                    processed the next business day.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Delivery Attempts</h4>
                  <p className="text-sm text-muted-foreground">
                    Our courier will make up to 3 delivery attempts. If unsuccessful, the package will be returned to
                    our warehouse.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Address Accuracy</h4>
                  <p className="text-sm text-muted-foreground">
                    Please ensure your delivery address is complete and accurate. We are not responsible for delays due
                    to incorrect addresses.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Signature Required</h4>
                  <p className="text-sm text-muted-foreground">
                    High-value items (over Rs. 50,000) require signature confirmation upon delivery for security
                    purposes.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Special Shipping Services</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Express Delivery</h4>
                  <p className="text-sm text-muted-foreground">
                    Same-day delivery available in Karachi, Lahore, and Islamabad for orders placed before 2 PM.
                    Additional charges apply.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Cash on Delivery (COD)</h4>
                  <p className="text-sm text-muted-foreground">
                    COD is available for orders up to Rs. 100,000. Additional COD charges of Rs. 100 apply for orders
                    under Rs. 2000.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Bulk Orders</h4>
                  <p className="text-sm text-muted-foreground">
                    Special shipping rates available for bulk orders. Contact our sales team for custom shipping
                    solutions.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">International Shipping</h4>
                  <p className="text-sm text-muted-foreground">
                    Currently, we only ship within Pakistan. International shipping will be available soon.
                  </p>
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
