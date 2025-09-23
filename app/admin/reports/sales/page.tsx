import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowLeft,
  Download,
  Filter,
  TrendingUp,
  TrendingDown,
  DollarSign,
  ShoppingCart,
  Users,
  Calendar,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export const metadata: Metadata = {
  title: "Sales Reports - Admin Dashboard",
  description: "View detailed sales reports and analytics",
}

export default function SalesReportsPage() {
  const salesData = {
    totalRevenue: 24567890,
    totalOrders: 1234,
    averageOrderValue: 19912,
    conversionRate: 3.2,
    revenueGrowth: 12.5,
    ordersGrowth: 8.2,
    topSellingProducts: [
      { name: "iPhone 15 Pro Max", revenue: 7020000, orders: 156, growth: 15 },
      { name: "Samsung Galaxy S24 Ultra", revenue: 5628000, orders: 134, growth: 8 },
      { name: "MacBook Air M3", revenue: 3382000, orders: 89, growth: -3 },
      { name: "Sony WH-1000XM5", revenue: 2269500, orders: 267, growth: 22 },
      { name: "iPad Air M2", revenue: 1876000, orders: 125, growth: 5 },
    ],
    salesByCategory: [
      { category: "Electronics", revenue: 12300000, percentage: 50.1, growth: 15 },
      { category: "Fashion", revenue: 5700000, percentage: 23.2, growth: 8 },
      { category: "Home & Garden", revenue: 3200000, percentage: 13.0, growth: 12 },
      { category: "Sports", revenue: 2100000, percentage: 8.5, growth: 5 },
      { category: "Books", revenue: 1267890, percentage: 5.2, growth: 3 },
    ],
    monthlySales: [
      { month: "Jan", revenue: 2100000, orders: 145 },
      { month: "Feb", revenue: 1890000, orders: 132 },
      { month: "Mar", revenue: 2340000, orders: 167 },
      { month: "Apr", revenue: 2567000, orders: 189 },
      { month: "May", revenue: 2890000, orders: 201 },
      { month: "Jun", revenue: 3120000, orders: 223 },
    ],
    topCustomers: [
      { name: "Ahmed Khan", orders: 15, revenue: 2100000, lastOrder: "2024-01-15" },
      { name: "Hassan Ahmed", orders: 12, revenue: 1890000, lastOrder: "2024-01-14" },
      { name: "Fatima Ali", orders: 10, revenue: 1567000, lastOrder: "2024-01-13" },
      { name: "Ayesha Khan", orders: 8, revenue: 1234000, lastOrder: "2024-01-12" },
      { name: "Omar Sheikh", orders: 7, revenue: 987000, lastOrder: "2024-01-11" },
    ],
  }

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
              <h1 className="text-3xl font-bold text-gray-900">Sales Reports</h1>
              <p className="text-gray-600 mt-2">Analyze your sales performance and revenue trends</p>
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
                  <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                  <p className="text-2xl font-bold text-gray-900">
                    PKR {(salesData.totalRevenue / 1000000).toFixed(1)}M
                  </p>
                </div>
                <DollarSign className="w-8 h-8 text-green-600" />
              </div>
              <div className="flex items-center mt-2">
                <TrendingUp className="w-3 h-3 text-green-600 mr-1" />
                <span className="text-xs text-green-600">+{salesData.revenueGrowth}% vs last month</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Orders</p>
                  <p className="text-2xl font-bold text-gray-900">{salesData.totalOrders.toLocaleString()}</p>
                </div>
                <ShoppingCart className="w-8 h-8 text-blue-600" />
              </div>
              <div className="flex items-center mt-2">
                <TrendingUp className="w-3 h-3 text-green-600 mr-1" />
                <span className="text-xs text-green-600">+{salesData.ordersGrowth}% vs last month</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Average Order Value</p>
                  <p className="text-2xl font-bold text-gray-900">PKR {salesData.averageOrderValue.toLocaleString()}</p>
                </div>
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <p className="text-xs text-gray-600 mt-2">Per order average</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Conversion Rate</p>
                  <p className="text-2xl font-bold text-gray-900">{salesData.conversionRate}%</p>
                </div>
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <p className="text-xs text-gray-600 mt-2">Visitors to customers</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Top Selling Products */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">Top Selling Products</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {salesData.topSellingProducts.map((product, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center">
                        <span className="text-sm font-semibold text-cyan-600">#{index + 1}</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{product.name}</h4>
                        <p className="text-sm text-gray-500">{product.orders} orders</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">PKR {(product.revenue / 1000000).toFixed(1)}M</p>
                      <div className="flex items-center">
                        {product.growth > 0 ? (
                          <TrendingUp className="w-3 h-3 text-green-600 mr-1" />
                        ) : (
                          <TrendingDown className="w-3 h-3 text-red-600 mr-1" />
                        )}
                        <span className={`text-xs ${product.growth > 0 ? "text-green-600" : "text-red-600"}`}>
                          {product.growth > 0 ? "+" : ""}
                          {product.growth}%
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Sales by Category */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">Sales by Category</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {salesData.salesByCategory.map((category, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900">{category.category}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">PKR {(category.revenue / 1000000).toFixed(1)}M</span>
                        <div className="flex items-center">
                          <TrendingUp className="w-3 h-3 text-green-600 mr-1" />
                          <span className="text-xs text-green-600">+{category.growth}%</span>
                        </div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full"
                        style={{ width: `${category.percentage}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>{category.percentage}% of total sales</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Monthly Sales Trend */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">Monthly Sales Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {salesData.monthlySales.map((month, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gradient-to-r from-cyan-50 to-purple-50 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-gray-600" />
                      <span className="font-medium text-gray-900">{month.month} 2024</span>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">PKR {(month.revenue / 1000000).toFixed(1)}M</p>
                      <p className="text-sm text-gray-600">{month.orders} orders</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Top Customers */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">Top Customers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {salesData.topCustomers.map((customer, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-sm font-semibold text-purple-600">{customer.name.charAt(0)}</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{customer.name}</h4>
                        <p className="text-sm text-gray-500">
                          {customer.orders} orders • Last: {customer.lastOrder}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">PKR {(customer.revenue / 1000).toFixed(0)}K</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}