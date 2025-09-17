"use client"

import { useState } from "react"
import { AdminSidebar } from "@/components/admin/admin-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Plus, Search, MoreHorizontal, Edit, Trash2, Folder, Tag } from "lucide-react"

export default function AdminCategoriesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isAddingCategory, setIsAddingCategory] = useState(false)

  const categories = [
    {
      id: 1,
      name: "Electronics",
      slug: "electronics",
      description: "Electronic devices and gadgets",
      productCount: 456,
      status: "active",
      parent: null,
      image: "/electronics-category.jpg",
      createdAt: "2023-01-15",
    },
    {
      id: 2,
      name: "Mobile Phones",
      slug: "mobile-phones",
      description: "Smartphones and mobile accessories",
      productCount: 189,
      status: "active",
      parent: "Electronics",
      image: "/mobile-phones-category.jpg",
      createdAt: "2023-01-16",
    },
    {
      id: 3,
      name: "Laptops & Computers",
      slug: "laptops-computers",
      description: "Laptops, desktops and computer accessories",
      productCount: 134,
      status: "active",
      parent: "Electronics",
      image: "/laptops-category.jpg",
      createdAt: "2023-01-17",
    },
    {
      id: 4,
      name: "Audio & Headphones",
      slug: "audio-headphones",
      description: "Headphones, speakers and audio equipment",
      productCount: 98,
      status: "active",
      parent: "Electronics",
      image: "/audio-category.jpg",
      createdAt: "2023-01-18",
    },
    {
      id: 5,
      name: "Gaming",
      slug: "gaming",
      description: "Gaming consoles, games and accessories",
      productCount: 156,
      status: "active",
      parent: "Electronics",
      image: "/gaming-category.jpg",
      createdAt: "2023-01-19",
    },
    {
      id: 6,
      name: "Electronics Accessories",
      slug: "electronics-accessories",
      description: "Cables, chargers and electronic accessories",
      productCount: 234,
      status: "active",
      parent: "Electronics",
      image: "/accessories-category.jpg",
      createdAt: "2023-01-20",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge variant="default">Active</Badge>
      case "draft":
        return <Badge variant="secondary">Draft</Badge>
      case "inactive":
        return <Badge variant="outline">Inactive</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const filteredCategories = categories.filter(
    (category) =>
      category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const categoryStats = {
    total: categories.length,
    active: categories.filter((c) => c.status === "active").length,
    draft: categories.filter((c) => c.status === "draft").length,
    totalProducts: categories.reduce((sum, c) => sum + c.productCount, 0),
  }

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />

      <main className="flex-1 p-8">
        <div className="space-y-8">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">Categories</h1>
              <p className="text-muted-foreground">Organize your products into categories</p>
            </div>
            <Dialog open={isAddingCategory} onOpenChange={setIsAddingCategory}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Category
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>Add New Category</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="categoryName">Category Name</Label>
                    <Input id="categoryName" placeholder="Enter category name" />
                  </div>
                  <div>
                    <Label htmlFor="categorySlug">URL Slug</Label>
                    <Input id="categorySlug" placeholder="category-slug" />
                  </div>
                  <div>
                    <Label htmlFor="categoryDescription">Description</Label>
                    <Textarea id="categoryDescription" placeholder="Category description" />
                  </div>
                  <div>
                    <Label htmlFor="parentCategory">Parent Category</Label>
                    <Input id="parentCategory" placeholder="Optional parent category" />
                  </div>
                  <div className="flex gap-2">
                    <Button className="flex-1" onClick={() => setIsAddingCategory(false)}>
                      Create Category
                    </Button>
                    <Button variant="outline" onClick={() => setIsAddingCategory(false)}>
                      Cancel
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Category Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold">{categoryStats.total}</div>
                <div className="text-sm text-muted-foreground">Total Categories</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-green-600">{categoryStats.active}</div>
                <div className="text-sm text-muted-foreground">Active</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-gray-600">{categoryStats.draft}</div>
                <div className="text-sm text-muted-foreground">Draft</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">{categoryStats.totalProducts}</div>
                <div className="text-sm text-muted-foreground">Total Products</div>
              </CardContent>
            </Card>
          </div>

          {/* Search */}
          <Card>
            <CardContent className="p-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search categories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </CardContent>
          </Card>

          {/* Categories Table */}
          <Card>
            <CardHeader>
              <CardTitle>Categories ({filteredCategories.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Category</TableHead>
                    <TableHead>Parent</TableHead>
                    <TableHead>Products</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredCategories.map((category) => (
                    <TableRow key={category.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                            {category.parent ? <Tag className="h-5 w-5" /> : <Folder className="h-5 w-5" />}
                          </div>
                          <div>
                            <p className="font-medium">{category.name}</p>
                            <p className="text-sm text-muted-foreground">{category.description}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{category.parent || "—"}</TableCell>
                      <TableCell>{category.productCount}</TableCell>
                      <TableCell>{getStatusBadge(category.status)}</TableCell>
                      <TableCell>{category.createdAt}</TableCell>
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
                              Edit Category
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Folder className="h-4 w-4 mr-2" />
                              View Products
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">
                              <Trash2 className="h-4 w-4 mr-2" />
                              Delete
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
        </div>
      </main>
    </div>
  )
}
