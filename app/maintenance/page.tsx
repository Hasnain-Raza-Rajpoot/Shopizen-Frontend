"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Wrench, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function MaintenancePage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-muted/30">
      <Card className="w-full max-w-md">
        <CardContent className="p-8 text-center space-y-6">
          <div className="space-y-2">
            <Wrench className="h-12 w-12 text-primary mx-auto" />
            <h1 className="text-2xl font-semibold">Under Maintenance</h1>
            <p className="text-muted-foreground">
              We're currently performing scheduled maintenance to improve your shopping experience. We'll be back online
              shortly.
            </p>
          </div>

          <div className="bg-muted/50 rounded-lg p-4">
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>Estimated completion: 2 hours</span>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-medium">What we're working on:</p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Improving site performance</li>
              <li>• Adding new features</li>
              <li>• Security updates</li>
            </ul>
          </div>

          <Button variant="outline" onClick={() => window.location.reload()} className="w-full">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Check Again
          </Button>

          <div className="text-sm text-muted-foreground">
            <p>Follow us for updates:</p>
            <div className="flex justify-center gap-4 mt-2">
              <Link href="#" className="text-primary hover:underline">
                Facebook
              </Link>
              <Link href="#" className="text-primary hover:underline">
                Twitter
              </Link>
              <Link href="#" className="text-primary hover:underline">
                Instagram
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
