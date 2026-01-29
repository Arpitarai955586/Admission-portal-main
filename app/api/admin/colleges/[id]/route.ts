import { NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import College from "@/models/College"
import { generateSlug } from "@/utils/slugify"

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB()
    const body = await req.json()

    // name change → slug update
    if (body.name) {
      body.slug = generateSlug(body.name)
    }

    const college = await College.findByIdAndUpdate(
      params.id,
      body,
      { new: true }
    )

    if (!college) {
      return NextResponse.json(
        { message: "College not found" },
        { status: 404 }
      )
    }

    return NextResponse.json({ college })
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to update college" },
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

    const college = await College.findByIdAndUpdate(
      params.id,
      { isActive: false },
      { new: true }
    )

    if (!college) {
      return NextResponse.json(
        { message: "College not found" },
        { status: 404 }
      )
    }

    return NextResponse.json({
      message: "College deleted successfully (soft)",
    })
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to delete college" },
      { status: 500 }
    )
  }
}



export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB()
    const body = await req.json()

    /**
     body = {
       course: "courseId",
       fees: { min: 2000000, max: 2500000 },
       intake: 395,
       acceptedExams: [
         { exam: "examId", cutoff: "99 percentile" }
       ]
     }
    */

    const college = await College.findById(params.id)
    if (!college) {
      return NextResponse.json(
        { message: "College not found" },
        { status: 404 }
      )
    }

    // prevent duplicate course
    const alreadyExists = college.courses.some(
      (c: any) => c.course.toString() === body.course
    )

    if (alreadyExists) {
      return NextResponse.json(
        { message: "Course already linked to this college" },
        { status: 409 }
      )
    }

    college.courses.push(body)
    await college.save()

    return NextResponse.json({
      message: "Course linked successfully",
      courses: college.courses,
    })
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to link course" },
      { status: 500 }
    )
  }
}
