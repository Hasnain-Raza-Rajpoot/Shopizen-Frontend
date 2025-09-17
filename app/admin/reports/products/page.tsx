import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Download, Filter, TrendingUp, TrendingDown, Package, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export const metadata: Metadata = {
  title: "Product Reports - Admin Dashboard",
  description: "View detailed product performance reports and analytics",
}

export default function ProductReportsPage() {
  const topProducts = [
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      sku: "IPH-15-PM-256",
      sales: 245,
      revenue: "PKR 6,125,000",
      trend: "up",
      change: "+12%",
    },
    {
      id: 2,
      name: "Samsung Galaxy S24 Ultra",
      sku: "SAM-S24-U-512",
      sales: 189,
      revenue: "PKR 4,725,000",
      trend: "up",
      change: "+8%",
    },
    {
      id: 3,
      name: "MacBook Air M3",
      sku: "MBA-M3-13-256",
      sales: 156,
      revenue: "PKR 3,900,000",
      trend: "down",
      change: "-3%",
    },
    {
      id: 4,
      name: "Sony WH-1000XM5",
      sku: "SNY-WH1000XM5",
      sales: 298,
      revenue: "PKR 2,980,000",
      trend: "up",
      change: "+15%",
    },
    {
      id: 5,
      name: "iPad Air M2",
      sku: "IPD-AIR-M2-256",
      sales: 134,
      revenue: "PKR 2,680,000",
      trend: "up",
      change: "+5%",
    },
  ]

  const lowStockProducts = [
    { name: "AirPods Pro 2nd Gen", sku: "APP-2ND-GEN", stock: 3, threshold: 10 },
    { name: "Dell XPS 13", sku: "DELL-XPS13", stock: 5, threshold: 15 },
    { name: "Nintendo Switch OLED", sku: "NSW-OLED", stock: 2, threshold: 8 },
    { name: "Samsung 4K Monitor", sku: "SAM-4K-27", stock: 4, threshold: 12 },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <Link href="/admin" className="inline-flex items-center text-cyan-600 hover:text-cyan-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Link>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Product Reports</h1>
              <p className="text-gray-600 mt-2">Analyze product performance and inventory insights</p>
            </div>
            <div className="flex gap-3 mt-4 sm:mt-0">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Last 30 days" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7d">Last 7 days</SelectItem>
                  <SelectItem value="30d">Last 30 days</SelectItem>
                  <SelectItem value="90d">Last 90 days</SelectItem>
                  <SelectItem value="1y">Last year</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
              <Button className="bg-cyan-600 hover:bg-cyan-700">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Products</p>
                  <p className="text-2xl font-bold text-gray-900">1,247</p>
                </div>
                <Package className="w-8 h-8 text-cyan-600" />
              </div>
              <p className="text-xs text-green-600 mt-2">+23 this month</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Products</p>
                  <p className="text-2xl font-bold text-gray-900">1,189</p>
                </div>
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <p className="text-xs text-green-600 mt-2">95.3% of total</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Low Stock Items</p>
                  <p className="text-2xl font-bold text-gray-900">24</p>
                </div>
                <TrendingDown className="w-8 h-8 text-red-600" />
              </div>
              <p className="text-xs text-red-600 mt-2">Needs attention</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                  <p className="text-2xl font-bold text-gray-900">PKR 24.5M</p>
                </div>
                <DollarSign className="w-8 h-8 text-purple-600" />
              </div>
              <p className="text-xs text-green-600 mt-2">+18% vs last month</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Top Performing Products */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">Top Performing Products</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topProducts.map((product, index) => (
                  <div key={product.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center">
                        <span className="text-sm font-semibold text-cyan-600">#{index + 1}</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{product.name}</h4>
                        <p className="text-sm text-gray-500">{product.sku}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">{product.sales} sales</p>
                      <p className="text-sm text-gray-600">{product.revenue}</p>
                      <div className="flex items-center mt-1">
                        {product.trend === "up" ? (
                          <TrendingUp className="w-3 h-3 text-green-600 mr-1" />
                        ) : (
                          <TrendingDown className="w-3 h-3 text-red-600 mr-1" />
                        )}
                        <span className={`text-xs ${product.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                          {product.change}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Low Stock Alert */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">Low Stock Alert</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {lowStockProducts.map((product, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-red-50 rounded-lg border border-red-200"
                  >
                    <div>
                      <h4 className="font-medium text-gray-900">{product.name}</h4>
                      <p className="text-sm text-gray-500">{product.sku}</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="destructive" className="mb-1">
                        {product.stock} left
                      </Badge>
                      <p className="text-xs text-gray-600">Threshold: {product.threshold}</p>
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full mt-4 bg-transparent">
                  View All Low Stock Items
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Category Performance */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-xl text-gray-900">Category Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { name: "Electronics", products: 456, revenue: "PKR 12.3M", growth: "+15%" },
                { name: "Fashion", products: 289, revenue: "PKR 5.7M", growth: "+8%" },
                { name: "Home & Garden", products: 234, revenue: "PKR 3.2M", growth: "+12%" },
                { name: "Sports", products: 178, revenue: "PKR 2.1M", growth: "+5%" },
                { name: "Books", products: 90, revenue: "PKR 1.2M", growth: "+3%" },
              ].map((category, index) => (
                <div key={index} className="p-4 bg-gradient-to-br from-cyan-50 to-purple-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900">{category.name}</h4>
                  <p className="text-sm text-gray-600 mt-1">{category.products} products</p>
                  <p className="font-medium text-gray-900 mt-2">{category.revenue}</p>
                  <p className="text-xs text-green-600 mt-1">{category.growth}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
