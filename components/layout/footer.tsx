import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold text-primary">Shopizen</span>
            </div>
            <p className="text-sm text-gray-700">
              Your trusted online electronics store in Pakistan. Quality electronics, fast delivery, and excellent
              customer service.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Customer Service</h3>
            <div className="space-y-2 text-sm">
              <Link href="/contact" className="block text-gray-700 hover:text-primary">
                Contact Us
              </Link>
              <Link href="/faq" className="block text-gray-700 hover:text-primary">
                FAQ
              </Link>
              <Link href="/shipping" className="block text-gray-700 hover:text-primary">
                Shipping Info
              </Link>
              <Link href="/returns" className="block text-gray-700 hover:text-primary">
                Returns & Exchanges
              </Link>
              <Link href="/warranty" className="block text-gray-700 hover:text-primary">
                Warranty
              </Link>
            </div>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+92-300-1234567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>support@shopizen.pk</span>
              </div>
            </div>
          </div>

          {/* Policies */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Policies</h3>
            <div className="space-y-2 text-sm">
              <Link href="/privacy" className="block text-gray-700 hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block text-gray-700 hover:text-primary">
                Terms of Service
              </Link>
              <Link href="/tax-info" className="block text-gray-700 hover:text-primary">
                Tax Information
              </Link>
              <Link href="/import-duty" className="block text-gray-700 hover:text-primary">
                Import Duty
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Stay Connected</h3>
            <p className="text-sm text-gray-700">Subscribe to get special offers, free giveaways, and updates.</p>
            <div className="flex space-x-2">
              <Input placeholder="Enter your email" className="flex-1" />
              <Button>Subscribe</Button>
            </div>
            <div className="text-sm text-gray-700">
              <div className="flex items-center gap-2 mb-1">
                <MapPin className="h-4 w-4" />
                <span>Karachi, Lahore, Islamabad</span>
              </div>
              <p>Serving all major cities in Pakistan</p>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-700">© 2024 Shopizen. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/about" className="text-sm text-gray-700 hover:text-primary">
              About Us
            </Link>
            <Link href="/careers" className="text-sm text-gray-700 hover:text-primary">
              Careers
            </Link>
            <Link href="/blog" className="text-sm text-gray-700 hover:text-primary">
              Blog
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
