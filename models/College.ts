import mongoose, { Schema, Types } from "mongoose"

const CollegeSchema = new Schema(
  {
    /* BASIC INFO */
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },

    type: {
      type: String,
      enum: ["Government", "Private", "Deemed"],
    },

    description: String,
    establishedYear: Number,

    /* LOCATION */
    location: {
      city: String,
      state: String,
      country: { type: String, default: "India" },
    },

    isInternational: { type: Boolean, default: false },

    /* RANKING */
    ranking: {
      nirf: Number,
      qsWorld: Number,
      timesWorld: Number,
    },

    isTopCollege: { type: Boolean, default: false },

    /* PLACEMENTS */
    placements: {
      averagePackage: Number,
      highestPackage: Number,
      placementRate: Number,
      topRecruiters: [String],
      lastUpdatedYear: Number,
    },

    /* COURSES */
    courses: [
      {
        course: {
          type: Types.ObjectId,
          ref: "Course",
          required: true,
        },

        acceptedExams: [
          {
            exam: {
              type: Types.ObjectId,
              ref: "Exam",
            },
            cutoff: String,
          },
        ],

        fees: {
          min: Number,
          max: Number,
          currency: { type: String, default: "INR" },
        },

        intake: Number,
      },
    ],

    /* CONTACT */
    website: String,
    email: String,
    phone: String,

    /* MEDIA */
    logo: String,
    images: [String],

    /* META */
    isFeatured: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
)

export default mongoose.models.College ||
  mongoose.model("College", CollegeSchema)
