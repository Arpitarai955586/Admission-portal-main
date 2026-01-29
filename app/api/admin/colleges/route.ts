import { NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import College from "@/models/College"
import { generateSlug } from "@/utils/slugify"

export async function POST(req: Request) {
  try {
    await connectDB()
    const body = await req.json()

    // slug auto-generate
    const slug = generateSlug(body.name)

    // slug uniqueness check
    const exists = await College.findOne({ slug })
    if (exists) {
      return NextResponse.json(
        { message: "College already exists" },
        { status: 409 }
      )
    }

    const college = await College.create({
      ...body,
      slug,
    })

    return NextResponse.json({ college }, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to create college" },
      { status: 500 }
    )
  }
}
