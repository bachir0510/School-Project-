import { Schema, model } from "mongoose";

const studentSchema = new Schema(
  {
    nia: String,
    name: String,
    lastName: String,
    motherName: String,
    birthDate: Date,
    group: String,
  },
  {
    timestamps: true,
  }
);

export default model("Student", studentSchema);
