import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: { type: String },
  email: { type: String, required: [true, "Email is Required"], unique: true, lowercase: true, },
  username: { type: String, required: [true, "Username is Required"] },
  profilepic: { type: String, default: null },
  role: { type: String, required: [true, "Role is required"], enum: { values: ["student", "teacher", "admin"], message: "Role must be either 'student', 'teacher', or 'admin'", }, default: "student", },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

userSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

export default mongoose.models.User || model("User", userSchema);