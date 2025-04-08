import mongoose from "mongoose";

const submissionSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Student is required"],
  },
  file: {
    type: String,
    required: [true, "Submission file is required"],
  },
  grade: {
    type: Number,
    min: [0, "Grade cannot be negative"],
    max: [100, "Grade cannot exceed 100"],
    default: null,
  },
  submittedAt: {
    type: Date,
    default: Date.now,
  },
});

const assignmentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Assignment title is required"],
    trim: true,
    maxlength: [100, "Title cannot exceed 100 characters"],
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: [true, "Course is required"],
  },
  deadline: {
    type: Date,
    required: [true, "Deadline is required"],
  },
  submissions: [submissionSchema],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Assignment || mongoose.model("Assignment", assignmentSchema);