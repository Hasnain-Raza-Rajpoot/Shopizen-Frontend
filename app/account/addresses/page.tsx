"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { AccountSidebar } from "@/components/account/account-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Plus, MapPin, Edit, Trash2, Home, Building } from "lucide-react"

export default function AddressesPage() {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      type: "home",
      name: "Home Address",
      fullName: "Ahmed Khan",
      phone: "+92 300 1234567",
      address: "House 123, Street 45, F-8/2",
      city: "Islamabad",
      state: "Islamabad Capital Territory",
      postalCode: "44000",
      country: "Pakistan",
      isDefault: true,
    },
    {
      id: 2,
      type: "office",
      name: "Office Address",
      fullName: "Ahmed Khan",
      phone: "+92 300 1234567",
      address: "Office 456, Blue Area, G-7",
      city: "Islamabad",
      state: "Islamabad Capital Territory",
      postalCode: "44000",
      country: "Pakistan",
      isDefault: false,
    },
  ])

  const [isAddingAddress, setIsAddingAddress] = useState(false)

  const handleSetDefault = (addressId: number) => {
    setAddresses(
      addresses.map((addr) => ({
        ...addr,
        isDefault: addr.id === addressId,
      })),
    )
  }

  const handleDeleteAddress = (addressId: number) => {
    setAddresses(addresses.filter((addr) => addr.id !== addressId))
  }

  return (
    <div className="min-h-screen">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          <AccountSidebar />

          <div className="flex-1 space-y-8">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold mb-2">My Addresses</h1>
                <p className="text-muted-foreground">Manage your delivery addresses</p>
              </div>
              <Dialog open={isAddingAddress} onOpenChange={setIsAddingAddress}>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add New Address
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>Add New Address</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="Ahmed" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Khan" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="+92 300 1234567" />
                    </div>
                    <div>
                      <Label htmlFor="address">Address</Label>
                      <Textarea id="address" placeholder="House/Flat number, Street name" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="city">City</Label>
                        <Input id="city" placeholder="Islamabad" />
                      </div>
                      <div>
                        <Label htmlFor="postalCode">Postal Code</Label>
                        <Input id="postalCode" placeholder="44000" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="state">State/Province</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select state" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="punjab">Punjab</SelectItem>
                          <SelectItem value="sindh">Sindh</SelectItem>
                          <SelectItem value="kpk">Khyber Pakhtunkhwa</SelectItem>
                          <SelectItem value="balochistan">Balochistan</SelectItem>
                          <SelectItem value="ict">Islamabad Capital Territory</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex gap-2">
                      <Button className="flex-1" onClick={() => setIsAddingAddress(false)}>
                        Save Address
                      </Button>
                      <Button variant="outline" onClick={() => setIsAddingAddress(false)}>
                        Cancel
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {addresses.length === 0 ? (
              <Card>
                <CardContent className="p-12 text-center">
                  <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">No addresses saved</h3>
                  <p className="text-muted-foreground mb-4">Add your delivery addresses to make checkout faster.</p>
                  <Button onClick={() => setIsAddingAddress(true)}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Your First Address
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {addresses.map((address) => (
                  <Card key={address.id} className={address.isDefault ? "ring-2 ring-primary" : ""}>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {address.type === "home" ? (
                            <Home className="h-4 w-4 text-muted-foreground" />
                          ) : (
                            <Building className="h-4 w-4 text-muted-foreground" />
                          )}
                          <CardTitle className="text-lg">{address.name}</CardTitle>
                        </div>
                        {address.isDefault && <Badge variant="default">Default</Badge>}
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <p className="font-medium">{address.fullName}</p>
                        <p className="text-sm text-muted-foreground">{address.phone}</p>
                      </div>
                      <div>
                        <p className="text-sm">{address.address}</p>
                        <p className="text-sm">
                          {address.city}, {address.state} {address.postalCode}
                        </p>
                        <p className="text-sm">{address.country}</p>
                      </div>
                      <div className="flex gap-2">
                        {!address.isDefault && (
                          <Button size="sm" variant="outline" onClick={() => handleSetDefault(address.id)}>
                            Set as Default
                          </Button>
                        )}
                        <Button size="sm" variant="outline">
                          <Edit className="h-4 w-4 mr-2" />
                          Edit
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => handleDeleteAddress(address.id)}>
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
