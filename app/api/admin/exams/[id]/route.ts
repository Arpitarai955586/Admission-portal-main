import { NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import Exam from "@/models/Exam"
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

    const exam = await Exam.findByIdAndUpdate(
      params.id,
      body,
      { new: true }
    )

    if (!exam) {
      return NextResponse.json(
        { message: "Exam not found" },
        { status: 404 }
      )
    }

    return NextResponse.json({ exam })
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to update exam" },
      { status: 500 }
    )
  }
}

export async function DELETE(
  _: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB()

    const exam = await Exam.findByIdAndUpdate(
      params.id,
      { isActive: false },
      { new: true }
    )

    if (!exam) {
      return NextResponse.json(
        { message: "Exam not found" },
        { status: 404 }
      )
    }

    return NextResponse.json({
      message: "Exam deleted successfully (soft)",
    })
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to delete exam" },
      { status: 500 }
    )
  }
}
