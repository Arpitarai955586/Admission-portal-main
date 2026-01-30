import { NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import User from "@/models/User"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export async function POST(req: Request) {
  try {
    await connectDB()

    const { email, password } = await req.json()

    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password required" },
        { status: 400 }
      )
    }

    const user = await User.findOne({ email })
    if (!user) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 401 }
      )
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return NextResponse.json(
        { message: "Wrong password" },
        { status: 401 }
      )
    }

    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET!,
      { expiresIn: "7d" }
    )

    return NextResponse.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    })
  } catch (error) {
    console.error("LOGIN ERROR:", error)
    return NextResponse.json(
      { message: "Login failed" },
      { status: 500 }
    )
  }
}
