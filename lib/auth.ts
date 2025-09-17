// Mock authentication utilities - replace with actual implementation

export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  phone?: string
  avatar?: string
  role: "customer" | "admin"
  createdAt: string
  emailVerified: boolean
}

export interface AuthState {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
}

// Mock user data
const mockUser: User = {
  id: "1",
  email: "john.doe@example.com",
  firstName: "John",
  lastName: "Doe",
  phone: "+92 300 1234567",
  role: "customer",
  createdAt: "2024-01-01T00:00:00Z",
  emailVerified: true,
}

export const authService = {
  // Mock login function
  async login(email: string, password: string): Promise<{ user: User; token: string }> {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Mock validation
    if (email === "admin@ecompk.com" && password === "admin123") {
      const adminUser = { ...mockUser, email, role: "admin" as const }
      const token = "mock_admin_token_" + Date.now()
      localStorage.setItem("auth_token", token)
      localStorage.setItem("user", JSON.stringify(adminUser))
      return { user: adminUser, token }
    }

    if (password === "password123") {
      const token = "mock_token_" + Date.now()
      localStorage.setItem("auth_token", token)
      localStorage.setItem("user", JSON.stringify({ ...mockUser, email }))
      return { user: { ...mockUser, email }, token }
    }

    throw new Error("Invalid credentials")
  },

  // Mock register function
  async register(userData: {
    firstName: string
    lastName: string
    email: string
    phone: string
    password: string
  }): Promise<{ user: User; token: string }> {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    const newUser: User = {
      id: "new_" + Date.now(),
      email: userData.email,
      firstName: userData.firstName,
      lastName: userData.lastName,
      phone: userData.phone,
      role: "customer",
      createdAt: new Date().toISOString(),
      emailVerified: false,
    }

    const token = "mock_token_" + Date.now()
    localStorage.setItem("auth_token", token)
    localStorage.setItem("user", JSON.stringify(newUser))

    return { user: newUser, token }
  },

  // Mock logout function
  async logout(): Promise<void> {
    localStorage.removeItem("auth_token")
    localStorage.removeItem("user")
  },

  // Mock get current user function
  getCurrentUser(): User | null {
    try {
      const userStr = localStorage.getItem("user")
      return userStr ? JSON.parse(userStr) : null
    } catch {
      return null
    }
  },

  // Mock check authentication function
  isAuthenticated(): boolean {
    return !!localStorage.getItem("auth_token")
  },

  // Mock forgot password function
  async forgotPassword(email: string): Promise<void> {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log("Password reset email sent to:", email)
  },

  // Mock reset password function
  async resetPassword(token: string, newPassword: string): Promise<void> {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log("Password reset for token:", token)
  },
}
