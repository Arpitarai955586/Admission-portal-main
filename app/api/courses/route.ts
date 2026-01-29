import { NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import Course from "@/models/Course"

export async function GET() {
  try {
    await connectDB()

    const courses = await Course.find()
      .select("name slug level duration description")
      .populate("acceptedExams", "name slug")
      .lean()

    return NextResponse.json({ courses })
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch courses" },
      { status: 500 }
    )
  }
}
