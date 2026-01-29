import { NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import Blog from "@/models/Blog"
import College from "@/models/College"
export async function GET(req: Request) {
  try {
    await connectDB()

    const { searchParams } = new URL(req.url)
    const collegeSlug = searchParams.get("college")
    const tag = searchParams.get("tag")

    const filter: any = { isPublished: true }

    if (collegeSlug) {
      const college = await College.findOne({ slug: collegeSlug }).select("_id")
      if (!college) return NextResponse.json({ blogs: [] })
      filter.college = college._id
    }

    if (tag) {
      filter.tags = { $regex: new RegExp(`^${tag}$`, "i") }
    }

    const blogs = await Blog.find(filter)
      .select("title slug excerpt coverImage createdAt")
      .populate("college", "name slug")
      .sort({ createdAt: -1 })
      .lean()

    return NextResponse.json({ blogs })
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch blogs" },
      { status: 500 }
    )
  }
}

