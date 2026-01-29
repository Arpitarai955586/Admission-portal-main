import { NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import Blog from "@/models/Blog"

export async function GET(
  _: Request,
  { params }: { params: { slug: string } }
) {
  try {
    await connectDB()

    const blog = await Blog.findOne({
      slug: params.slug,
      isPublished: true,
    })
      .populate("college", "name slug")
      .lean()

    if (!blog) {
      return NextResponse.json(
        { message: "Blog not found" },
        { status: 404 }
      )
    }

    return NextResponse.json({ blog })
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch blog" },
      { status: 500 }
    )
  }
}
