"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function SignUpPage() {
  const router = useRouter()

  const [form, setForm] = useState({
    role: "student",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    setError("")

    if (!form.name || !form.email || !form.password) {
      return setError("All fields are required")
    }

    if (form.password !== form.confirmPassword) {
      return setError("Passwords do not match")
    }

    try {
      setLoading(true)

      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password,
          role: form.role,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.message)
      }

      router.push("/login")
    } catch (err: any) {
      setError(err.message || "Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 text-black">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center">Create Account</h2>

        <div className="space-y-4 mt-6">
          <input
            name="name"
            placeholder="Username"
            value={form.name}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />

          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-green-600 text-white py-2 rounded"
          >
            {loading ? "Creating..." : "Create Account"}
          </button>
        </div>

        <p className="mt-6 text-center text-sm">
          Already have an account?{" "}
          <Link href="/login" className="text-green-600">
            Log In
          </Link>
        </p>
      </div>
    </div>
  )
}
