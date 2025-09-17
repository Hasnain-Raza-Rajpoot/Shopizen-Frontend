import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Download, Filter, Users, TrendingUp, MapPin, Calendar, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export const metadata: Metadata = {
  title: "Customer Reports - Admin Dashboard",
  description: "View detailed customer analytics and insights",
}

export default function CustomerReportsPage() {
  const customerData = {
    totalCustomers: 5678,
    newCustomers: 234,
    activeCustomers: 4567,
    customerGrowth: 15.3,
    averageLifetimeValue: 125000,
    retentionRate: 68.5,
    customersByCity: [
      { city: "Karachi", customers: 1567, percentage: 27.6 },
      { city: "Lahore", customers: 1234, percentage: 21.7 },
      { city: "Islamabad", customers: 987, percentage: 17.4 },
      { city: "Faisalabad", customers: 654, percentage: 11.5 },
      { city: "Rawalpindi", customers: 543, percentage: 9.6 },
      { city: "Others", customers: 693, percentage: 12.2 },
    ],
    customerSegments: [
      { segment: "VIP Customers", count: 156, percentage: 2.7, avgSpent: 450000, color: "bg-purple-500" },
      { segment: "Loyal Customers", count: 892, percentage: 15.7, avgSpent: 180000, color: "bg-blue-500" },
      { segment: "Regular Customers", count: 2134, percentage: 37.6, avgSpent: 85000, color: "bg-green-500" },
      { segment: "New Customers", count: 1567, percentage: 27.6, avgSpent: 35000, color: "bg-yellow-500" },
      { segment: "Inactive Customers", count: 929, percentage: 16.4, avgSpent: 15000, color: "bg-gray-400" },
    ],
    ageGroups: [
      { group: "18-25", count: 1234, percentage: 21.7 },
      { group: "26-35", count: 2156, percentage: 38.0 },
      { group: "36-45", count: 1456, percentage: 25.6 },
      { group: "46-55", count: 654, percentage: 11.5 },
      { group: "55+", count: 178, percentage: 3.1 },
    ],
    topSpenders: [
      {
        name: "Ahmed Khan",
        email: "ahmed@example.com",
        totalSpent: 2100000,
        orders: 15,
        joinDate: "2023-06-15",
        tier: "VIP",
      },
      {
        name: "Hassan Ahmed",
        email: "hassan@example.com",
        totalSpent: 1890000,
        orders: 12,
        joinDate: "2023-03-10",
        tier: "VIP",
      },
      {
        name: "Fatima Ali",
        email: "fatima@example.com",
        totalSpent: 1567000,
        orders: 10,
        joinDate: "2023-08-22",
        tier: "Loyal",
      },
      {
        name: "Ayesha Khan",
        email: "ayesha@example.com",
        totalSpent: 1234000,
        orders: 8,
        joinDate: "2023-11-05",
        tier: "Loyal",
      },
      {
        name: "Omar Sheikh",
        email: "omar@example.com",
        totalSpent: 987000,
        orders: 7,
        joinDate: "2023-09-18",
        tier: "Loyal",
      },
    ],
    monthlyGrowth: [
      { month: "Jan", newCustomers: 189, totalCustomers: 4567 },
      { month: "Feb", newCustomers: 234, totalCustomers: 4801 },
      { month: "Mar", newCustomers: 198, totalCustomers: 4999 },
      { month: "Apr", newCustomers: 267, totalCustomers: 5266 },
      { month: "May", newCustomers: 223, totalCustomers: 5489 },
      { month: "Jun", newCustomers: 189, totalCustomers: 5678 },
    ],
  }

  const getTierBadge = (tier: string) => {
    switch (tier) {
      case "VIP":
        return <Badge className="bg-purple-100 text-purple-800">VIP</Badge>
      case "Loyal":
        return <Badge className="bg-blue-100 text-blue-800">Loyal</Badge>
      default:
        return <Badge variant="secondary">{tier}</Badge>
    }
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
              <h1 className="text-3xl font-bold text-gray-900">Customer Reports</h1>
              <p className="text-gray-600 mt-2">Analyze customer behavior and demographics</p>
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
                  <p className="text-sm font-medium text-gray-600">Total Customers</p>
                  <p className="text-2xl font-bold text-gray-900">{customerData.totalCustomers.toLocaleString()}</p>
                </div>
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <div className="flex items-center mt-2">
                <TrendingUp className="w-3 h-3 text-green-600 mr-1" />
                <span className="text-xs text-green-600">+{customerData.customerGrowth}% vs last month</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">New Customers</p>
                  <p className="text-2xl font-bold text-gray-900">{customerData.newCustomers}</p>
                </div>
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <p className="text-xs text-gray-600 mt-2">This month</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Avg. Lifetime Value</p>
                  <p className="text-2xl font-bold text-gray-900">
                    PKR {customerData.averageLifetimeValue.toLocaleString()}
                  </p>
                </div>
                <Star className="w-8 h-8 text-yellow-600" />
              </div>
              <p className="text-xs text-gray-600 mt-2">Per customer</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Retention Rate</p>
                  <p className="text-2xl font-bold text-gray-900">{customerData.retentionRate}%</p>
                </div>
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <p className="text-xs text-gray-600 mt-2">Customer retention</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Customer Segments */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">Customer Segments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {customerData.customerSegments.map((segment, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className={`w-4 h-4 rounded-full ${segment.color}`}></div>
                      <div>
                        <h4 className="font-medium text-gray-900">{segment.segment}</h4>
                        <p className="text-sm text-gray-500">
                          {segment.count} customers ({segment.percentage}%)
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">PKR {segment.avgSpent.toLocaleString()}</p>
                      <p className="text-sm text-gray-500">Avg. spent</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Geographic Distribution */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">Customers by City</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {customerData.customersByCity.map((city, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-gray-500" />
                        <span className="font-medium text-gray-900">{city.city}</span>
                      </div>
                      <span className="text-sm text-gray-600">{city.customers} customers</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full"
                        style={{ width: `${city.percentage}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-500">{city.percentage}% of total customers</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Top Spending Customers */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">Top Spending Customers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {customerData.topSpenders.map((customer, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
                        <span className="text-sm font-semibold text-cyan-600">#{index + 1}</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{customer.name}</h4>
                        <p className="text-sm text-gray-500">{customer.email}</p>
                        <div className="flex items-center gap-2 mt-1">
                          {getTierBadge(customer.tier)}
                          <span className="text-xs text-gray-500">Joined {customer.joinDate}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">PKR {(customer.totalSpent / 1000).toFixed(0)}K</p>
                      <p className="text-sm text-gray-500">{customer.orders} orders</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Customer Growth Trend */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">Customer Growth Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {customerData.monthlyGrowth.map((month, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gradient-to-r from-cyan-50 to-purple-50 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-gray-600" />
                      <span className="font-medium text-gray-900">{month.month} 2024</span>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">+{month.newCustomers} new</p>
                      <p className="text-sm text-gray-600">{month.totalCustomers.toLocaleString()} total</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Age Demographics */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-xl text-gray-900">Age Demographics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {customerData.ageGroups.map((group, index) => (
                <div key={index} className="p-4 bg-gradient-to-br from-cyan-50 to-purple-50 rounded-lg text-center">
                  <h4 className="font-semibold text-gray-900">{group.group}</h4>
                  <p className="text-2xl font-bold text-cyan-600 mt-2">{group.count.toLocaleString()}</p>
                  <p className="text-sm text-gray-600">{group.percentage}% of customers</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
