import { NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import Exam from "@/models/Exam"
import { generateSlug } from "@/utils/slugify"

export async function POST(req: Request) {
  try {
    await connectDB()
    const body = await req.json()

    const slug = generateSlug(body.name)

    const exists = await Exam.findOne({ slug })
    if (exists) {
      return NextResponse.json(
        { message: "Exam already exists" },
        { status: 409 }
      )
    }

    const exam = await Exam.create({
      ...body,
      slug,
    })

    return NextResponse.json({ exam }, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to create exam" },
      { status: 500 }
    )
  }
}
