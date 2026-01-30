import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import College from "@/models/College";
import { generateSlug } from "@/utils/slugify";

/* ================= UPDATE COLLEGE ================= */
export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const { id } = await params; // ✅ FIX
    const body = await req.json();

    // name change → slug update
    if (body.name) {
      body.slug = generateSlug(body.name);
    }

    const college = await College.findByIdAndUpdate(
      id,
      body,
      { new: true }
    );

    if (!college) {
      return NextResponse.json(
        { message: "College not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ college });
  } catch (error) {
    console.error("PUT college error:", error);
    return NextResponse.json(
      { message: "Failed to update college" },
      { status: 500 }
    );
  }
}

/* ================= DELETE COLLEGE (SOFT) ================= */
export async function DELETE(
  _: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const { id } = await params; // ✅ FIX

    const college = await College.findByIdAndUpdate(
      id,
      { isActive: false },
      { new: true }
    );

    if (!college) {
      return NextResponse.json(
        { message: "College not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "College deleted successfully (soft)",
      college,
    });
  } catch (error) {
    console.error("DELETE college error:", error);
    return NextResponse.json(
      { message: "Failed to delete college" },
      { status: 500 }
    );
  }
}

/* ================= LINK COURSE ================= */
export async function POST(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const { id } = await params; // ✅ FIX
    const body = await req.json();

    const college = await College.findById(id);
    if (!college) {
      return NextResponse.json(
        { message: "College not found" },
        { status: 404 }
      );
    }

    // prevent duplicate course
    const alreadyExists = college.courses.some(
      (c: any) => c.course.toString() === body.course
    );

    if (alreadyExists) {
      return NextResponse.json(
        { message: "Course already linked to this college" },
        { status: 409 }
      );
    }

    college.courses.push(body);
    await college.save();

    return NextResponse.json({
      message: "Course linked successfully",
      courses: college.courses,
    });
  } catch (error) {
    console.error("POST course error:", error);
    return NextResponse.json(
      { message: "Failed to link course" },
      { status: 500 }
    );
  }
}
