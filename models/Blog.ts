import mongoose, { Schema, Types } from "mongoose"

const BlogSchema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, unique: true },

    content: { type: String, required: true },
    excerpt: String,

    college: {
      type: Types.ObjectId,
      ref: "College",
      required: true,
    },

    tags: [String],
    author: String,
    coverImage: String,

    isPublished: { type: Boolean, default: true },
  },
  { timestamps: true }
)

export default mongoose.models.Blog ||
  mongoose.model("Blog", BlogSchema)
