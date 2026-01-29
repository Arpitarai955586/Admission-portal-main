import mongoose, { Schema } from "mongoose"

const ExamSchema = new Schema(
  {
    name: { type: String, required: true },     // CAT
    fullName: String,                            // Common Admission Test
    slug: { type: String, unique: true },

    level: { type: String, enum: ["UG", "PG"] },
    mode: { type: String, enum: ["Online", "Offline"] },
    conductedBy: String,
    frequency: String,

    application: {
      startDate: Date,
      endDate: Date,
    },

    examDate: Date,
    resultDate: Date,

    eligibility: {
      qualification: String,
      minMarks: String,
    },

    website: String,
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
)

export default mongoose.models.Exam ||
  mongoose.model("Exam", ExamSchema)
