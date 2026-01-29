import { NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import Exam from "@/models/Exam"

export async function GET(
  _: Request,
  { params }: { params: { slug: string } }
) {
  try {
    await connectDB()

    const exam = await Exam.findOne({
      slug: params.slug,
      isActive: true,
    }).lean()

    if (!exam) {
      return NextResponse.json(
        { message: "Exam not found" },
        { status: 404 }
      )
    }

    return NextResponse.json({ exam })
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch exam" },
      { status: 500 }
    )
  }
}
