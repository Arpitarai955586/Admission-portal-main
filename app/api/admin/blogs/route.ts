import { NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import Blog from "@/models/Blog"
import { generateSlug } from "@/utils/slugify"

export async function POST(req: Request) {
  try {
    await connectDB()
    const body = await req.json()

    const slug = generateSlug(body.title)

    const exists = await Blog.findOne({ slug })
    if (exists) {
      return NextResponse.json(
        { message: "Blog already exists" },
        { status: 409 }
      )
    }

    const blog = await Blog.create({
      ...body,
      slug,
    })

    return NextResponse.json({ blog }, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to create blog" },
      { status: 500 }
    )
  }
}

export async function GET(req: Request) {
  return NextResponse.json({
    message: "ab ye protected hoga"
  })
}


