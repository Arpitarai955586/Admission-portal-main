import mongoose, { Schema, Types } from "mongoose"

const CourseSchema = new Schema(
  {
    name: { type: String, required: true },     // MBA
    slug: { type: String, unique: true },       // mba
    level: { type: String, enum: ["UG", "PG"] },
    duration: String,                           // 2 Years
    description: String,

    acceptedExams: [
      {
        type: Types.ObjectId,
        ref: "Exam",
      },
    ],

    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
)

export default mongoose.models.Course ||
  mongoose.model("Course", CourseSchema)
