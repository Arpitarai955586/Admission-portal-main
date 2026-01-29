import { NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import Blog from "@/models/Blog"
import { generateSlug } from "@/utils/slugify"

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB()
    const body = await req.json()

    if (body.title) {
      body.slug = generateSlug(body.title)
    }

    const blog = await Blog.findByIdAndUpdate(
      params.id,
      body,
      { new: true }
    )

    if (!blog) {
      return NextResponse.json(
        { message: "Blog not found" },
        { status: 404 }
      )
    }

    return NextResponse.json({ blog })
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to update blog" },
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

    const blog = await Blog.findByIdAndUpdate(
      params.id,
      { isPublished: false },
      { new: true }
    )

    if (!blog) {
      return NextResponse.json(
        { message: "Blog not found" },
        { status: 404 }
      )
    }

    return NextResponse.json({
      message: "Blog unpublished successfully",
    })
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to delete blog" },
      { status: 500 }
    )
  }
}
