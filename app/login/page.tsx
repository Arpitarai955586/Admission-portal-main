"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function LoginPage() {
  const router = useRouter()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

 const handleLogin = async () => {
  setError("")

  if (!email || !password) {
    setError("All fields are required")
    return
  }

  try {
    setLoading(true)

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })

    const text = await res.text() 
    let data

    try {
      data = JSON.parse(text)
    } catch {
      throw new Error("Server error: API did not return JSON")
    }

    if (!res.ok) {
      throw new Error(data.message || "Login failed")
    }

    localStorage.setItem("token", data.token)
    localStorage.setItem("user", JSON.stringify(data.user))

    router.push("/")
  } catch (err: any) {
    setError(err.message)
  } finally {
    setLoading(false)
  }
}


  return (
    <div className="min-h-screen text-black flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Login</h2>
          <p className="text-gray-500 mt-2">Access your account</p>
        </div>

        <div className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@gmail.com"
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <Link href="/sign-up" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  )
}
