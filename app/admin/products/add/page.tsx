import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Upload, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Add Product - Admin Dashboard",
  description: "Add a new product to the store",
}

export default function AddProductPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <Link href="/admin/products" className="inline-flex items-center text-cyan-600 hover:text-cyan-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Add New Product</h1>
          <p className="text-gray-600 mt-2">Create a new product listing for your store</p>
        </div>

        <form className="space-y-8">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">Basic Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Product Name *
                  </Label>
                  <Input id="name" placeholder="Enter product name" className="mt-1" required />
                </div>
                <div>
                  <Label htmlFor="sku" className="text-sm font-medium text-gray-700">
                    SKU *
                  </Label>
                  <Input id="sku" placeholder="Enter SKU" className="mt-1" required />
                </div>
              </div>

              <div>
                <Label htmlFor="description" className="text-sm font-medium text-gray-700">
                  Description *
                </Label>
                <Textarea
                  id="description"
                  placeholder="Enter product description"
                  className="mt-1 min-h-[120px]"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <Label htmlFor="category" className="text-sm font-medium text-gray-700">
                    Category *
                  </Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="electronics">Electronics</SelectItem>
                      <SelectItem value="mobile-phones">Mobile Phones</SelectItem>
                      <SelectItem value="laptops-computers">Laptops & Computers</SelectItem>
                      <SelectItem value="audio-headphones">Audio & Headphones</SelectItem>
                      <SelectItem value="gaming">Gaming</SelectItem>
                      <SelectItem value="electronics-accessories">Electronics Accessories</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="brand" className="text-sm font-medium text-gray-700">
                    Brand
                  </Label>
                  <Input id="brand" placeholder="Enter brand name" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="status" className="text-sm font-medium text-gray-700">
                    Status *
                  </Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="inactive">Inactive</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Pricing & Inventory */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">Pricing & Inventory</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <Label htmlFor="price" className="text-sm font-medium text-gray-700">
                    Price (PKR) *
                  </Label>
                  <Input id="price" type="number" placeholder="0.00" className="mt-1" required />
                </div>
                <div>
                  <Label htmlFor="compare-price" className="text-sm font-medium text-gray-700">
                    Compare at Price (PKR)
                  </Label>
                  <Input id="compare-price" type="number" placeholder="0.00" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="cost" className="text-sm font-medium text-gray-700">
                    Cost per Item (PKR)
                  </Label>
                  <Input id="cost" type="number" placeholder="0.00" className="mt-1" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="quantity" className="text-sm font-medium text-gray-700">
                    Quantity *
                  </Label>
                  <Input id="quantity" type="number" placeholder="0" className="mt-1" required />
                </div>
                <div>
                  <Label htmlFor="low-stock" className="text-sm font-medium text-gray-700">
                    Low Stock Threshold
                  </Label>
                  <Input id="low-stock" type="number" placeholder="5" className="mt-1" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Product Images */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">Product Images</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-2">Drag and drop images here, or click to browse</p>
                <p className="text-sm text-gray-500">Supports: JPG, PNG, WebP (Max 5MB each)</p>
                <Button type="button" variant="outline" className="mt-4 bg-transparent">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Images
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* SEO & Meta */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">SEO & Meta Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="meta-title" className="text-sm font-medium text-gray-700">
                  Meta Title
                </Label>
                <Input id="meta-title" placeholder="Enter meta title" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="meta-description" className="text-sm font-medium text-gray-700">
                  Meta Description
                </Label>
                <Textarea id="meta-description" placeholder="Enter meta description" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="tags" className="text-sm font-medium text-gray-700">
                  Tags
                </Label>
                <Input id="tags" placeholder="Enter tags separated by commas" className="mt-1" />
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-end">
            <Button type="button" variant="outline" asChild>
              <Link href="/admin/products">Cancel</Link>
            </Button>
            <Button type="button" variant="outline">
              Save as Draft
            </Button>
            <Button type="submit" className="bg-cyan-600 hover:bg-cyan-700">
              Publish Product
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
