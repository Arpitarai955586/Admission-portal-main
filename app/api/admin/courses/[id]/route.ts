import { NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import Course from "@/models/Course"
import { generateSlug } from "@/utils/slugify"

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB()
    const body = await req.json()

    if (body.name) {
      body.slug = generateSlug(body.name)
    }

    const course = await Course.findByIdAndUpdate(
      params.id,
      body,
      { new: true }
    )

    if (!course) {
      return NextResponse.json(
        { message: "Course not found" },
        { status: 404 }
      )
    }

    return NextResponse.json({ course })
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to update course" },
      { status: 500 }
    )
  }
}
