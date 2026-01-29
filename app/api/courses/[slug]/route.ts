import { NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import Course from "@/models/Course"
interface MyInterface {
  slug: string;
}


export async function GET(
  _: Request,
  { params }: { params: { slug: string } }
) {
  try {
    await connectDB()

    const course = await Course.findOne({ slug : params.slug })
      .populate("acceptedExams", "name slug")
      .lean()

    if (!course) {
      return NextResponse.json(
        { message: "Course not found" },
        { status: 404 }
      )
    }

    return NextResponse.json({ course })
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch course" },
      { status: 500 }
    )
  }
}
