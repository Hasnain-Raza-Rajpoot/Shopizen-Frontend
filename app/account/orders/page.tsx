"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { AccountSidebar } from "@/components/account/account-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Package, Truck, CheckCircle, Clock, X, Download, RotateCcw, MessageCircle, Eye } from "lucide-react"
import Link from "next/link"

export default function OrdersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [dateFilter, setDateFilter] = useState("all")

  // Mock orders data
  const orders = [
    {
      id: "ORD-2024-001",
      date: "2024-01-15",
      status: "delivered",
      total: 125000,
      items: [
        {
          id: 1,
          name: "iPhone 15 Pro Max 256GB",
          price: 450000,
          quantity: 1,
          image: "/iphone-15-pro-max.png",
        },
        {
          id: 2,
          name: "AirPods Pro 2nd Gen",
          price: 65000,
          quantity: 1,
          image: "/airpods-pro-wireless-earbuds.jpg",
        },
      ],
      shipping: {
        address: "123 Main Street, Karachi, Pakistan",
        method: "Standard Delivery",
        trackingNumber: "TRK123456789",
      },
      payment: {
        method: "Credit Card",
        status: "paid",
      },
    },
    {
      id: "ORD-2024-002",
      date: "2024-01-10",
      status: "shipped",
      total: 85000,
      items: [
        {
          id: 3,
          name: "Sony WH-1000XM5 Headphones",
          price: 85000,
          quantity: 1,
          image: "/sony-wh-1000xm5.png",
        },
      ],
      shipping: {
        address: "456 Oak Avenue, Lahore, Pakistan",
        method: "Express Delivery",
        trackingNumber: "TRK987654321",
      },
      payment: {
        method: "Cash on Delivery",
        status: "pending",
      },
    },
    {
      id: "ORD-2024-003",
      date: "2024-01-05",
      status: "processing",
      total: 45000,
      items: [
        {
          id: 4,
          name: "Wireless Mouse",
          price: 15000,
          quantity: 1,
          image: "/wireless-mouse.jpg",
        },
        {
          id: 5,
          name: "USB-C Cable",
          price: 3000,
          quantity: 2,
          image: "/usb-c-cable.jpg",
        },
      ],
      shipping: {
        address: "789 Pine Road, Islamabad, Pakistan",
        method: "Standard Delivery",
        trackingNumber: null,
      },
      payment: {
        method: "Bank Transfer",
        status: "paid",
      },
    },
    {
      id: "ORD-2024-004",
      date: "2023-12-28",
      status: "cancelled",
      total: 320000,
      items: [
        {
          id: 6,
          name: "Dell XPS 13 Laptop",
          price: 320000,
          quantity: 1,
          image: "/dell-xps-13-laptop.jpg",
        },
      ],
      shipping: {
        address: "321 Elm Street, Karachi, Pakistan",
        method: "Express Delivery",
        trackingNumber: null,
      },
      payment: {
        method: "Credit Card",
        status: "refunded",
      },
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered":
        return "bg-green-100 text-green-800"
      case "shipped":
        return "bg-blue-100 text-blue-800"
      case "processing":
        return "bg-yellow-100 text-yellow-800"
      case "cancelled":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "delivered":
        return <CheckCircle className="h-4 w-4" />
      case "shipped":
        return <Truck className="h-4 w-4" />
      case "processing":
        return <Clock className="h-4 w-4" />
      case "cancelled":
        return <X className="h-4 w-4" />
      default:
        return <Package className="h-4 w-4" />
    }
  }

  const filteredOrders = orders.filter((order) => {
    const matchesSearch = order.id.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "all" || order.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const ordersByStatus = {
    all: orders,
    processing: orders.filter((o) => o.status === "processing"),
    shipped: orders.filter((o) => o.status === "shipped"),
    delivered: orders.filter((o) => o.status === "delivered"),
    cancelled: orders.filter((o) => o.status === "cancelled"),
  }

  return (
    <div className="min-h-screen">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          <AccountSidebar />

          <div className="flex-1 space-y-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Order History</h1>
              <p className="text-muted-foreground">Track and manage all your orders in one place.</p>
            </div>

            {/* Filters */}
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <Input
                        placeholder="Search orders by ID..."
                        className="pl-10"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                  </div>
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-full md:w-[180px]">
                      <SelectValue placeholder="Filter by status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Orders</SelectItem>
                      <SelectItem value="processing">Processing</SelectItem>
                      <SelectItem value="shipped">Shipped</SelectItem>
                      <SelectItem value="delivered">Delivered</SelectItem>
                      <SelectItem value="cancelled">Cancelled</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={dateFilter} onValueChange={setDateFilter}>
                    <SelectTrigger className="w-full md:w-[180px]">
                      <SelectValue placeholder="Filter by date" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Time</SelectItem>
                      <SelectItem value="30days">Last 30 Days</SelectItem>
                      <SelectItem value="90days">Last 3 Months</SelectItem>
                      <SelectItem value="year">This Year</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Orders Tabs */}
            <Tabs defaultValue="all" className="space-y-6">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="all">All ({ordersByStatus.all.length})</TabsTrigger>
                <TabsTrigger value="processing">Processing ({ordersByStatus.processing.length})</TabsTrigger>
                <TabsTrigger value="shipped">Shipped ({ordersByStatus.shipped.length})</TabsTrigger>
                <TabsTrigger value="delivered">Delivered ({ordersByStatus.delivered.length})</TabsTrigger>
                <TabsTrigger value="cancelled">Cancelled ({ordersByStatus.cancelled.length})</TabsTrigger>
              </TabsList>

              {Object.entries(ordersByStatus).map(([status, statusOrders]) => (
                <TabsContent key={status} value={status} className="space-y-6">
                  {statusOrders.length === 0 ? (
                    <Card>
                      <CardContent className="p-12 text-center">
                        <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                        <h3 className="font-semibold mb-2">No orders found</h3>
                        <p className="text-muted-foreground mb-4">
                          {status === "all" ? "You haven't placed any orders yet." : `No ${status} orders found.`}
                        </p>
                        <Button asChild>
                          <Link href="/products">Start Shopping</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ) : (
                    <div className="space-y-6">
                      {statusOrders.map((order) => (
                        <Card key={order.id}>
                          <CardHeader>
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                              <div>
                                <CardTitle className="text-lg">{order.id}</CardTitle>
                                <p className="text-sm text-muted-foreground">Placed on {order.date}</p>
                              </div>
                              <div className="flex items-center gap-4">
                                <Badge className={`${getStatusColor(order.status)}`}>
                                  <span className="flex items-center gap-1">
                                    {getStatusIcon(order.status)}
                                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                                  </span>
                                </Badge>
                                <span className="font-semibold">Rs. {order.total.toLocaleString()}</span>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent className="space-y-6">
                            {/* Order Items */}
                            <div className="space-y-4">
                              {order.items.map((item) => (
                                <div key={item.id} className="flex items-center space-x-4">
                                  <img
                                    src={item.image || "/placeholder.svg"}
                                    alt={item.name}
                                    className="w-16 h-16 object-cover rounded-lg"
                                  />
                                  <div className="flex-1">
                                    <h4 className="font-medium">{item.name}</h4>
                                    <p className="text-sm text-muted-foreground">
                                      Quantity: {item.quantity} × Rs. {item.price.toLocaleString()}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>

                            {/* Order Actions */}
                            <div className="flex flex-wrap gap-2 pt-4 border-t">
                              <Button variant="outline" size="sm" asChild>
                                <Link href={`/account/orders/${order.id}`}>
                                  <Eye className="h-4 w-4 mr-2" />
                                  View Details
                                </Link>
                              </Button>

                              {order.status === "delivered" && (
                                <>
                                  <Button variant="outline" size="sm">
                                    <Download className="h-4 w-4 mr-2" />
                                    Download Invoice
                                  </Button>
                                  <Button variant="outline" size="sm">
                                    <RotateCcw className="h-4 w-4 mr-2" />
                                    Return Items
                                  </Button>
                                </>
                              )}

                              {order.status === "shipped" && order.shipping.trackingNumber && (
                                <Button variant="outline" size="sm">
                                  <Truck className="h-4 w-4 mr-2" />
                                  Track Package
                                </Button>
                              )}

                              {order.status === "processing" && (
                                <Button variant="outline" size="sm">
                                  <X className="h-4 w-4 mr-2" />
                                  Cancel Order
                                </Button>
                              )}

                              <Button variant="outline" size="sm">
                                <MessageCircle className="h-4 w-4 mr-2" />
                                Contact Support
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
