"use client"

import type React from "react"

import { AuthGuard } from "@/components/auth/auth-guard"

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return <AuthGuard requireAuth>{children}</AuthGuard>
}


