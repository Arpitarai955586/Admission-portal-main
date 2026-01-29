import { NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import Course from "@/models/Course"
import { generateSlug } from "@/utils/slugify"

export async function POST(req: Request) {
  try {
    await connectDB()
    const body = await req.json()

    const slug = generateSlug(body.name)

    const exists = await Course.findOne({ slug })
    if (exists) {
      return NextResponse.json(
        { message: "Course already exists" },
        { status: 409 }
      )
    }

    const course = await Course.create({
      ...body,
      slug,
    })

    return NextResponse.json({ course }, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to create course" },
      { status: 500 }
    )
  }
}
