"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Loader2 } from "lucide-react"

interface AuthGuardProps {
  children: React.ReactNode
  requireAuth?: boolean
  redirectTo?: string
}

export function AuthGuard({ children, requireAuth = true, redirectTo = "/login" }: AuthGuardProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Mock authentication check - replace with actual auth logic
    const checkAuth = async () => {
      try {
        // Simulate API call to check authentication status
        const token = localStorage.getItem("auth_token")
        const isAuth = !!token // Simple check - in real app, validate token with server

        setIsAuthenticated(isAuth)

        if (requireAuth && !isAuth) {
          router.push(redirectTo)
          return
        }

        if (!requireAuth && isAuth) {
          router.push("/account") // Redirect authenticated users away from auth pages
          return
        }
      } catch (error) {
        console.error("Auth check failed:", error)
        setIsAuthenticated(false)
        if (requireAuth) {
          router.push(redirectTo)
        }
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [requireAuth, redirectTo, router])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="flex items-center justify-center p-8">
            <div className="text-center space-y-4">
              <Loader2 className="h-8 w-8 animate-spin mx-auto text-primary" />
              <p className="text-muted-foreground">Checking authentication...</p>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (requireAuth && !isAuthenticated) {
    return null // Will redirect to login
  }

  if (!requireAuth && isAuthenticated) {
    return null // Will redirect to account
  }

  return <>{children}</>
}
