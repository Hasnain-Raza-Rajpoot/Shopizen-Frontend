"use client"

import { useState } from "react"
import { AdminSidebar } from "@/components/admin/admin-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MoreHorizontal, Edit, AlertTriangle, Package, TrendingUp, TrendingDown, RefreshCw } from "lucide-react"
import Link from "next/link"

export default function AdminInventoryPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [categoryFilter, setCategoryFilter] = useState("all")

  // Mock inventory data
  const inventory = [
    {
      id: 1,
      name: "iPhone 15 Pro Max 256GB",
      sku: "IPH15PM256",
      category: "Mobile Phones",
      currentStock: 15,
      reservedStock: 3,
      availableStock: 12,
      reorderLevel: 10,
      maxStock: 50,
      costPrice: 400000,
      sellingPrice: 450000,
      supplier: "Apple Inc.",
      lastRestocked: "2024-01-10",
      status: "in_stock",
      movement: "up",
    },
    {
      id: 2,
      name: "MacBook Air M3 13-inch",
      sku: "MBA13M3",
      category: "Laptops",
      currentStock: 8,
      reservedStock: 2,
      availableStock: 6,
      reorderLevel: 5,
      maxStock: 25,
      costPrice: 350000,
      sellingPrice: 380000,
      supplier: "Apple Inc.",
      lastRestocked: "2024-01-08",
      status: "low_stock",
      movement: "down",
    },
    {
      id: 3,
      name: "Samsung Galaxy S24 Ultra",
      sku: "SGS24U",
      category: "Mobile Phones",
      currentStock: 3,
      reservedStock: 1,
      availableStock: 2,
      reorderLevel: 8,
      maxStock: 40,
      costPrice: 380000,
      sellingPrice: 420000,
      supplier: "Samsung Electronics",
      lastRestocked: "2024-01-05",
      status: "critical",
      movement: "down",
    },
    {
      id: 4,
      name: "Sony WH-1000XM5 Headphones",
      sku: "SWXM5",
      category: "Audio",
      currentStock: 25,
      reservedStock: 5,
      availableStock: 20,
      reorderLevel: 15,
      maxStock: 60,
      costPrice: 75000,
      sellingPrice: 85000,
      supplier: "Sony Corporation",
      lastRestocked: "2024-01-12",
      status: "in_stock",
      movement: "up",
    },
    {
      id: 5,
      name: "Dell XPS 13 Plus",
      sku: "DXP13P",
      category: "Laptops",
      currentStock: 0,
      reservedStock: 0,
      availableStock: 0,
      reorderLevel: 5,
      maxStock: 20,
      costPrice: 290000,
      sellingPrice: 320000,
      supplier: "Dell Technologies",
      lastRestocked: "2023-12-20",
      status: "out_of_stock",
      movement: "down",
    },
  ]

  const getStatusBadge = (status: string, currentStock: number, reorderLevel: number) => {
    if (status === "out_of_stock" || currentStock === 0) {
      return <Badge variant="destructive">Out of Stock</Badge>
    }
    if (status === "critical" || currentStock <= reorderLevel / 2) {
      return <Badge variant="destructive">Critical</Badge>
    }
    if (status === "low_stock" || currentStock <= reorderLevel) {
      return <Badge variant="secondary">Low Stock</Badge>
    }
    return <Badge variant="default">In Stock</Badge>
  }

  const getMovementIcon = (movement: string) => {
    return movement === "up" ? (
      <TrendingUp className="h-4 w-4 text-green-600" />
    ) : (
      <TrendingDown className="h-4 w-4 text-red-600" />
    )
  }

  const filteredInventory = inventory.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.sku.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "all" || item.status === statusFilter
    const matchesCategory = categoryFilter === "all" || item.category === categoryFilter

    return matchesSearch && matchesStatus && matchesCategory
  })

  const inventoryStats = {
    totalProducts: inventory.length,
    inStock: inventory.filter((item) => item.status === "in_stock").length,
    lowStock: inventory.filter((item) => item.status === "low_stock" || item.status === "critical").length,
    outOfStock: inventory.filter((item) => item.status === "out_of_stock").length,
    totalValue: inventory.reduce((sum, item) => sum + item.currentStock * item.costPrice, 0),
  }

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />

      <main className="flex-1 p-8">
        <div className="space-y-8">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">Inventory Management</h1>
              <p className="text-muted-foreground">Track and manage your product inventory</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <RefreshCw className="h-4 w-4 mr-2" />
                Sync Inventory
              </Button>
              <Button asChild>
                <Link href="/admin/products/add">
                  <Package className="h-4 w-4 mr-2" />
                  Add Product
                </Link>
              </Button>
            </div>
          </div>

          {/* Inventory Stats */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold">{inventoryStats.totalProducts}</div>
                <div className="text-sm text-muted-foreground">Total Products</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-green-600">{inventoryStats.inStock}</div>
                <div className="text-sm text-muted-foreground">In Stock</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-orange-600">{inventoryStats.lowStock}</div>
                <div className="text-sm text-muted-foreground">Low Stock</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-red-600">{inventoryStats.outOfStock}</div>
                <div className="text-sm text-muted-foreground">Out of Stock</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">
                  Rs. {(inventoryStats.totalValue / 1000000).toFixed(1)}M
                </div>
                <div className="text-sm text-muted-foreground">Inventory Value</div>
              </CardContent>
            </Card>
          </div>

          {/* Filters */}
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="in_stock">In Stock</SelectItem>
                    <SelectItem value="low_stock">Low Stock</SelectItem>
                    <SelectItem value="critical">Critical</SelectItem>
                    <SelectItem value="out_of_stock">Out of Stock</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="Mobile Phones">Mobile Phones</SelectItem>
                    <SelectItem value="Laptops">Laptops</SelectItem>
                    <SelectItem value="Audio">Audio</SelectItem>
                    <SelectItem value="Gaming">Gaming</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Inventory Table */}
          <Card>
            <CardHeader>
              <CardTitle>Inventory ({filteredInventory.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>Current Stock</TableHead>
                    <TableHead>Available</TableHead>
                    <TableHead>Reserved</TableHead>
                    <TableHead>Reorder Level</TableHead>
                    <TableHead>Value</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Trend</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredInventory.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {item.sku} • {item.category}
                          </p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="font-medium">
                          {item.currentStock}
                          {item.currentStock <= item.reorderLevel && (
                            <AlertTriangle className="inline h-4 w-4 ml-1 text-orange-600" />
                          )}
                        </div>
                      </TableCell>
                      <TableCell>{item.availableStock}</TableCell>
                      <TableCell>{item.reservedStock}</TableCell>
                      <TableCell>{item.reorderLevel}</TableCell>
                      <TableCell>Rs. {(item.currentStock * item.costPrice).toLocaleString()}</TableCell>
                      <TableCell>{getStatusBadge(item.status, item.currentStock, item.reorderLevel)}</TableCell>
                      <TableCell>{getMovementIcon(item.movement)}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Edit className="h-4 w-4 mr-2" />
                              Update Stock
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Package className="h-4 w-4 mr-2" />
                              Reorder Product
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <TrendingUp className="h-4 w-4 mr-2" />
                              View History
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-orange-200 bg-orange-50">
              <CardHeader>
                <CardTitle className="text-orange-800 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Low Stock Alert
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-orange-700 mb-4">{inventoryStats.lowStock} products need restocking</p>
                <Button size="sm" variant="outline" className="bg-white">
                  View Low Stock Items
                </Button>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="text-red-800 flex items-center gap-2">
                  <Package className="h-5 w-5" />
                  Out of Stock
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-red-700 mb-4">{inventoryStats.outOfStock} products are out of stock</p>
                <Button size="sm" variant="outline" className="bg-white">
                  Reorder Products
                </Button>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-800 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Inventory Report
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-blue-700 mb-4">Generate detailed inventory reports</p>
                <Button size="sm" variant="outline" className="bg-white">
                  Generate Report
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
