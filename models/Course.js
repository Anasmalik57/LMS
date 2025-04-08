import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Course title is required"],
    minlength: [12, "Title must have at least 12 characters"], // Adjust if needed
    maxlength: [100, "Title cannot exceed 100 characters"],
  },
  description: {
    type: String,
    required: [true, "Course description is required"],
  },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Instructor is required"],
  },
  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  modules: [
    {
      title: {
        type: String,
        required: [true, "Module title is required"],
        trim: true,
      },
      content: {
        type: String,
        required: [true, "Module content is required"],
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Course || mongoose.model("Course", courseSchema);