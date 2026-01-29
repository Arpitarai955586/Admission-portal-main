import { NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import College from "@/models/College"

export async function GET(req: Request) {
  try {
    await connectDB()

    const { searchParams } = new URL(req.url)

    const city = searchParams.get("city")
    const state = searchParams.get("state")
    const type = searchParams.get("type")
    const top = searchParams.get("top")

    const filter: any = { isActive: true }

    if (city) filter["location.city"] = city
    if (state) filter["location.state"] = state
    if (type) filter.type = type
    if (top === "true") filter.isTopCollege = true

    const colleges = await College.find(filter)
      .select(
        "name slug type location ranking isTopCollege logo establishedYear"
      )
      .sort({ "ranking.nirf": 1 })
      .lean()

    return NextResponse.json({ colleges })
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch colleges" },
      { status: 500 }
    )
  }
}
