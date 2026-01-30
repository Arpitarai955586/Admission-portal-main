import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import College from "@/models/College";
import { generateSlug } from "@/utils/slugify"



export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();

    // ✅ validation
    if (!body.name || body.name.trim() === "") {
      return NextResponse.json(
        { message: "College name is required" },
        { status: 400 }
      );
    }

    //slug generate
    const slug = generateSlug(body.name);

    // unique check
    const exists = await College.findOne({ slug });
    if (exists) {
      return NextResponse.json(
        { message: "College already exists" },
        { status: 409 }
      );
    }

    //  clean payload (VERY IMPORTANT)
    const college = await College.create({
      name: body.name,
      slug,
      city: body.city || "",
      state: body.state || "",
      type: body.type || "Private",
      overview: body.overview || "",
      fees: body.fees || "",
      exams: body.exams || [],
      established: body.established || null,
      ranking: body.ranking || "",
      courseCount: body.courseCount || 0,
      address: body.address || "",
      pincode: body.pincode || "",
      phone: body.phone || "",
      image: body.image || "",
      is_active: true,
    });

    return NextResponse.json({ college }, { status: 201 });
  } catch (error) {
    console.error("CREATE COLLEGE ERROR:", error);

    return NextResponse.json(
      { message: "Failed to create college" },
      { status: 500 }
    );
  }
}
