"use client"

import { useState } from "react"
import { AdminSidebar } from "@/components/admin/admin-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Store, CreditCard, Truck, Mail, Shield, Database, Trash2, Upload, Globe, Bell } from "lucide-react"

export default function AdminSettingsPage() {
  const [storeSettings, setStoreSettings] = useState({
    storeName: "Shopizen Pakistan",
    storeDescription: "Your trusted online electronics store in Pakistan",
    storeEmail: "support@shopizen.pk",
    storePhone: "+92 300 1234567",
    storeAddress: "123 Main Street, Islamabad, Pakistan",
    currency: "PKR",
    timezone: "Asia/Karachi",
    language: "en",
    taxRate: 17,
    enableTax: true,
  })

  const [paymentSettings, setPaymentSettings] = useState({
    enableCreditCard: true,
    enableJazzCash: true,
    enableEasyPaisa: true,
    enableBankTransfer: true,
    enableCOD: true,
    codFee: 150,
    minimumOrderAmount: 1000,
  })

  const [shippingSettings, setShippingSettings] = useState({
    freeShippingThreshold: 5000,
    standardShippingFee: 250,
    expressShippingFee: 500,
    enableExpressShipping: true,
    processingTime: "1-2 business days",
    deliveryTime: "3-5 business days",
  })

  const [emailSettings, setEmailSettings] = useState({
    smtpHost: "smtp.gmail.com",
    smtpPort: "587",
    smtpUsername: "noreply@shopizen.pk",
    smtpPassword: "",
    fromEmail: "noreply@shopizen.pk",
    fromName: "Shopizen Pakistan",
    enableOrderConfirmation: true,
    enableShippingNotification: true,
    enableDeliveryConfirmation: true,
  })

  const [securitySettings, setSecuritySettings] = useState({
    enableTwoFactor: false,
    sessionTimeout: 60,
    maxLoginAttempts: 5,
    enableIPWhitelist: false,
    enableAuditLog: true,
    enableDataBackup: true,
    backupFrequency: "daily",
  })

  const [notificationSettings, setNotificationSettings] = useState({
    enableOrderNotifications: true,
    enableLowStockAlerts: true,
    enableNewCustomerAlerts: true,
    enableReviewNotifications: true,
    enableSystemAlerts: true,
    notificationEmail: "admin@shopizen.pk",
  })

  const handleSaveSettings = (section: string) => {
    console.log(`Saving ${section} settings...`)
  }

  const handleBackupData = () => {
    console.log("Creating data backup...")
  }

  const handleRestoreData = () => {
    console.log("Restoring data from backup...")
  }

  const handleClearCache = () => {
    console.log("Clearing system cache...")
  }

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />

      <main className="flex-1 p-8">
        <div className="space-y-8">
          {/* Header */}
          <div>
            <h1 className="text-3xl font-bold">Settings</h1>
            <p className="text-muted-foreground">Manage your store configuration and preferences</p>
          </div>

          <Tabs defaultValue="general" className="space-y-6">
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="payments">Payments</TabsTrigger>
              <TabsTrigger value="shipping">Shipping</TabsTrigger>
              <TabsTrigger value="email">Email</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="system">System</TabsTrigger>
            </TabsList>

            {/* General Settings */}
            <TabsContent value="general">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Store className="h-5 w-5" />
                    Store Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="storeName">Store Name</Label>
                      <Input
                        id="storeName"
                        value={storeSettings.storeName}
                        onChange={(e) => setStoreSettings({ ...storeSettings, storeName: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="storeEmail">Store Email</Label>
                      <Input
                        id="storeEmail"
                        type="email"
                        value={storeSettings.storeEmail}
                        onChange={(e) => setStoreSettings({ ...storeSettings, storeEmail: e.target.value })}
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="storeDescription">Store Description</Label>
                    <Textarea
                      id="storeDescription"
                      value={storeSettings.storeDescription}
                      onChange={(e) => setStoreSettings({ ...storeSettings, storeDescription: e.target.value })}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="storePhone">Phone Number</Label>
                      <Input
                        id="storePhone"
                        value={storeSettings.storePhone}
                        onChange={(e) => setStoreSettings({ ...storeSettings, storePhone: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="currency">Currency</Label>
                      <Select
                        value={storeSettings.currency}
                        onValueChange={(value) => setStoreSettings({ ...storeSettings, currency: value })}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="PKR">PKR (Pakistani Rupee)</SelectItem>
                          <SelectItem value="USD">USD (US Dollar)</SelectItem>
                          <SelectItem value="EUR">EUR (Euro)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="storeAddress">Store Address</Label>
                    <Textarea
                      id="storeAddress"
                      value={storeSettings.storeAddress}
                      onChange={(e) => setStoreSettings({ ...storeSettings, storeAddress: e.target.value })}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <Label htmlFor="timezone">Timezone</Label>
                      <Select
                        value={storeSettings.timezone}
                        onValueChange={(value) => setStoreSettings({ ...storeSettings, timezone: value })}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Asia/Karachi">Asia/Karachi (PKT)</SelectItem>
                          <SelectItem value="Asia/Dubai">Asia/Dubai (GST)</SelectItem>
                          <SelectItem value="UTC">UTC</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="language">Default Language</Label>
                      <Select
                        value={storeSettings.language}
                        onValueChange={(value) => setStoreSettings({ ...storeSettings, language: value })}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="ur">اردو (Urdu)</SelectItem>
                          <SelectItem value="ar">العربية (Arabic)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="taxRate">Tax Rate (%)</Label>
                      <Input
                        id="taxRate"
                        type="number"
                        value={storeSettings.taxRate}
                        onChange={(e) => setStoreSettings({ ...storeSettings, taxRate: Number(e.target.value) })}
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Enable Tax Calculation</p>
                      <p className="text-sm text-muted-foreground">Automatically calculate tax on orders</p>
                    </div>
                    <Switch
                      checked={storeSettings.enableTax}
                      onCheckedChange={(checked) => setStoreSettings({ ...storeSettings, enableTax: checked })}
                    />
                  </div>
                  <Button onClick={() => handleSaveSettings("general")}>Save General Settings</Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Payment Settings */}
            <TabsContent value="payments">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5" />
                    Payment Methods
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Credit/Debit Cards</p>
                        <p className="text-sm text-muted-foreground">Accept Visa, Mastercard, and other cards</p>
                      </div>
                      <Switch
                        checked={paymentSettings.enableCreditCard}
                        onCheckedChange={(checked) =>
                          setPaymentSettings({ ...paymentSettings, enableCreditCard: checked })
                        }
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">JazzCash</p>
                        <p className="text-sm text-muted-foreground">Mobile wallet payments via JazzCash</p>
                      </div>
                      <Switch
                        checked={paymentSettings.enableJazzCash}
                        onCheckedChange={(checked) =>
                          setPaymentSettings({ ...paymentSettings, enableJazzCash: checked })
                        }
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">EasyPaisa</p>
                        <p className="text-sm text-muted-foreground">Digital wallet payments via EasyPaisa</p>
                      </div>
                      <Switch
                        checked={paymentSettings.enableEasyPaisa}
                        onCheckedChange={(checked) =>
                          setPaymentSettings({ ...paymentSettings, enableEasyPaisa: checked })
                        }
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Bank Transfer</p>
                        <p className="text-sm text-muted-foreground">Direct bank account transfers</p>
                      </div>
                      <Switch
                        checked={paymentSettings.enableBankTransfer}
                        onCheckedChange={(checked) =>
                          setPaymentSettings({ ...paymentSettings, enableBankTransfer: checked })
                        }
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Cash on Delivery (COD)</p>
                        <p className="text-sm text-muted-foreground">Pay when the order is delivered</p>
                      </div>
                      <Switch
                        checked={paymentSettings.enableCOD}
                        onCheckedChange={(checked) => setPaymentSettings({ ...paymentSettings, enableCOD: checked })}
                      />
                    </div>
                  </div>
                  <Separator />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="codFee">COD Fee (PKR)</Label>
                      <Input
                        id="codFee"
                        type="number"
                        value={paymentSettings.codFee}
                        onChange={(e) => setPaymentSettings({ ...paymentSettings, codFee: Number(e.target.value) })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="minimumOrder">Minimum Order Amount (PKR)</Label>
                      <Input
                        id="minimumOrder"
                        type="number"
                        value={paymentSettings.minimumOrderAmount}
                        onChange={(e) =>
                          setPaymentSettings({ ...paymentSettings, minimumOrderAmount: Number(e.target.value) })
                        }
                      />
                    </div>
                  </div>
                  <Button onClick={() => handleSaveSettings("payments")}>Save Payment Settings</Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Shipping Settings */}
            <TabsContent value="shipping">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Truck className="h-5 w-5" />
                    Shipping Configuration
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <Label htmlFor="freeShipping">Free Shipping Threshold (PKR)</Label>
                      <Input
                        id="freeShipping"
                        type="number"
                        value={shippingSettings.freeShippingThreshold}
                        onChange={(e) =>
                          setShippingSettings({ ...shippingSettings, freeShippingThreshold: Number(e.target.value) })
                        }
                      />
                    </div>
                    <div>
                      <Label htmlFor="standardFee">Standard Shipping Fee (PKR)</Label>
                      <Input
                        id="standardFee"
                        type="number"
                        value={shippingSettings.standardShippingFee}
                        onChange={(e) =>
                          setShippingSettings({ ...shippingSettings, standardShippingFee: Number(e.target.value) })
                        }
                      />
                    </div>
                    <div>
                      <Label htmlFor="expressFee">Express Shipping Fee (PKR)</Label>
                      <Input
                        id="expressFee"
                        type="number"
                        value={shippingSettings.expressShippingFee}
                        onChange={(e) =>
                          setShippingSettings({ ...shippingSettings, expressShippingFee: Number(e.target.value) })
                        }
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="processingTime">Processing Time</Label>
                      <Input
                        id="processingTime"
                        value={shippingSettings.processingTime}
                        onChange={(e) => setShippingSettings({ ...shippingSettings, processingTime: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="deliveryTime">Delivery Time</Label>
                      <Input
                        id="deliveryTime"
                        value={shippingSettings.deliveryTime}
                        onChange={(e) => setShippingSettings({ ...shippingSettings, deliveryTime: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Enable Express Shipping</p>
                      <p className="text-sm text-muted-foreground">Offer faster delivery options</p>
                    </div>
                    <Switch
                      checked={shippingSettings.enableExpressShipping}
                      onCheckedChange={(checked) =>
                        setShippingSettings({ ...shippingSettings, enableExpressShipping: checked })
                      }
                    />
                  </div>
                  <Button onClick={() => handleSaveSettings("shipping")}>Save Shipping Settings</Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Email Settings */}
            <TabsContent value="email">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    Email Configuration
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="smtpHost">SMTP Host</Label>
                      <Input
                        id="smtpHost"
                        value={emailSettings.smtpHost}
                        onChange={(e) => setEmailSettings({ ...emailSettings, smtpHost: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="smtpPort">SMTP Port</Label>
                      <Input
                        id="smtpPort"
                        value={emailSettings.smtpPort}
                        onChange={(e) => setEmailSettings({ ...emailSettings, smtpPort: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="smtpUsername">SMTP Username</Label>
                      <Input
                        id="smtpUsername"
                        value={emailSettings.smtpUsername}
                        onChange={(e) => setEmailSettings({ ...emailSettings, smtpUsername: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="smtpPassword">SMTP Password</Label>
                      <Input
                        id="smtpPassword"
                        type="password"
                        value={emailSettings.smtpPassword}
                        onChange={(e) => setEmailSettings({ ...emailSettings, smtpPassword: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="fromEmail">From Email</Label>
                      <Input
                        id="fromEmail"
                        type="email"
                        value={emailSettings.fromEmail}
                        onChange={(e) => setEmailSettings({ ...emailSettings, fromEmail: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="fromName">From Name</Label>
                      <Input
                        id="fromName"
                        value={emailSettings.fromName}
                        onChange={(e) => setEmailSettings({ ...emailSettings, fromName: e.target.value })}
                      />
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-4">
                    <h3 className="font-semibold">Email Notifications</h3>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Order Confirmation</p>
                        <p className="text-sm text-muted-foreground">Send confirmation emails for new orders</p>
                      </div>
                      <Switch
                        checked={emailSettings.enableOrderConfirmation}
                        onCheckedChange={(checked) =>
                          setEmailSettings({ ...emailSettings, enableOrderConfirmation: checked })
                        }
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Shipping Notification</p>
                        <p className="text-sm text-muted-foreground">Notify customers when orders are shipped</p>
                      </div>
                      <Switch
                        checked={emailSettings.enableShippingNotification}
                        onCheckedChange={(checked) =>
                          setEmailSettings({ ...emailSettings, enableShippingNotification: checked })
                        }
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Delivery Confirmation</p>
                        <p className="text-sm text-muted-foreground">Confirm when orders are delivered</p>
                      </div>
                      <Switch
                        checked={emailSettings.enableDeliveryConfirmation}
                        onCheckedChange={(checked) =>
                          setEmailSettings({ ...emailSettings, enableDeliveryConfirmation: checked })
                        }
                      />
                    </div>
                  </div>
                  <Button onClick={() => handleSaveSettings("email")}>Save Email Settings</Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Security Settings */}
            <TabsContent value="security">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Security Configuration
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Two-Factor Authentication</p>
                        <p className="text-sm text-muted-foreground">Require 2FA for admin accounts</p>
                      </div>
                      <Switch
                        checked={securitySettings.enableTwoFactor}
                        onCheckedChange={(checked) =>
                          setSecuritySettings({ ...securitySettings, enableTwoFactor: checked })
                        }
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">IP Whitelist</p>
                        <p className="text-sm text-muted-foreground">Restrict admin access to specific IP addresses</p>
                      </div>
                      <Switch
                        checked={securitySettings.enableIPWhitelist}
                        onCheckedChange={(checked) =>
                          setSecuritySettings({ ...securitySettings, enableIPWhitelist: checked })
                        }
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Audit Logging</p>
                        <p className="text-sm text-muted-foreground">Log all admin actions for security</p>
                      </div>
                      <Switch
                        checked={securitySettings.enableAuditLog}
                        onCheckedChange={(checked) =>
                          setSecuritySettings({ ...securitySettings, enableAuditLog: checked })
                        }
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Automatic Data Backup</p>
                        <p className="text-sm text-muted-foreground">Regularly backup store data</p>
                      </div>
                      <Switch
                        checked={securitySettings.enableDataBackup}
                        onCheckedChange={(checked) =>
                          setSecuritySettings({ ...securitySettings, enableDataBackup: checked })
                        }
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <Label htmlFor="sessionTimeout">Session Timeout (minutes)</Label>
                      <Input
                        id="sessionTimeout"
                        type="number"
                        value={securitySettings.sessionTimeout}
                        onChange={(e) =>
                          setSecuritySettings({ ...securitySettings, sessionTimeout: Number(e.target.value) })
                        }
                      />
                    </div>
                    <div>
                      <Label htmlFor="maxAttempts">Max Login Attempts</Label>
                      <Input
                        id="maxAttempts"
                        type="number"
                        value={securitySettings.maxLoginAttempts}
                        onChange={(e) =>
                          setSecuritySettings({ ...securitySettings, maxLoginAttempts: Number(e.target.value) })
                        }
                      />
                    </div>
                    <div>
                      <Label htmlFor="backupFreq">Backup Frequency</Label>
                      <Select
                        value={securitySettings.backupFrequency}
                        onValueChange={(value) => setSecuritySettings({ ...securitySettings, backupFrequency: value })}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hourly">Hourly</SelectItem>
                          <SelectItem value="daily">Daily</SelectItem>
                          <SelectItem value="weekly">Weekly</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <Button onClick={() => handleSaveSettings("security")}>Save Security Settings</Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* System Settings */}
            <TabsContent value="system">
              <div className="space-y-6">
                {/* Notifications */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Bell className="h-5 w-5" />
                      Admin Notifications
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Order Notifications</p>
                        <p className="text-sm text-muted-foreground">Get notified about new orders</p>
                      </div>
                      <Switch
                        checked={notificationSettings.enableOrderNotifications}
                        onCheckedChange={(checked) =>
                          setNotificationSettings({ ...notificationSettings, enableOrderNotifications: checked })
                        }
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Low Stock Alerts</p>
                        <p className="text-sm text-muted-foreground">Alert when products are running low</p>
                      </div>
                      <Switch
                        checked={notificationSettings.enableLowStockAlerts}
                        onCheckedChange={(checked) =>
                          setNotificationSettings({ ...notificationSettings, enableLowStockAlerts: checked })
                        }
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">New Customer Alerts</p>
                        <p className="text-sm text-muted-foreground">Notify about new customer registrations</p>
                      </div>
                      <Switch
                        checked={notificationSettings.enableNewCustomerAlerts}
                        onCheckedChange={(checked) =>
                          setNotificationSettings({ ...notificationSettings, enableNewCustomerAlerts: checked })
                        }
                      />
                    </div>
                    <div>
                      <Label htmlFor="notificationEmail">Notification Email</Label>
                      <Input
                        id="notificationEmail"
                        type="email"
                        value={notificationSettings.notificationEmail}
                        onChange={(e) =>
                          setNotificationSettings({ ...notificationSettings, notificationEmail: e.target.value })
                        }
                      />
                    </div>
                    <Button onClick={() => handleSaveSettings("notifications")}>Save Notification Settings</Button>
                  </CardContent>
                </Card>

                {/* System Maintenance */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Database className="h-5 w-5" />
                      System Maintenance
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Button variant="outline" onClick={handleBackupData}>
                        <Upload className="h-4 w-4 mr-2" />
                        Create Backup
                      </Button>
                      <Button variant="outline" onClick={handleRestoreData}>
                        <Database className="h-4 w-4 mr-2" />
                        Restore Data
                      </Button>
                      <Button variant="outline" onClick={handleClearCache}>
                        <Globe className="h-4 w-4 mr-2" />
                        Clear Cache
                      </Button>
                    </div>
                    <Separator />
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <h3 className="font-semibold text-red-800 mb-2">Danger Zone</h3>
                      <p className="text-sm text-red-700 mb-4">These actions are irreversible. Please be careful.</p>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="destructive">
                            <Trash2 className="h-4 w-4 mr-2" />
                            Reset All Settings
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                              This will reset all store settings to their default values. This action cannot be undone.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction className="bg-red-600 hover:bg-red-700">
                              Yes, reset all settings
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
