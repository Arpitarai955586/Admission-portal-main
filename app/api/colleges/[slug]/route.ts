import { NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import College from "@/models/College"

export async function GET(
  _: Request,
  { params }: { params: { slug: string } }
) {
  try {
    await connectDB()

    const college = await College.findOne({
      slug: params.slug,
      isActive: true,
    })
      .populate("courses.course")
      .populate("courses.acceptedExams.exam")
      .lean()

    if (!college) {
      return NextResponse.json(
        { message: "College not found" },
        { status: 404 }
      )
    }

    return NextResponse.json({ college })
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch college" },
      { status: 500 }
    )
  }
}
