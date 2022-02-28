import Student from "../models/students.model";

export const createStudent = async (req, res) => {
  const { nia, name, lastName, motherName, birthDate, group } = req.body;
  try {
    const newStudent = new Student({
      nia,
      name,
      lastName,
      motherName,
      birthDate,
      group,
    });
    await newStudent.save();
    res.status(201).json({
      message: "New Student has been created",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const getStudents = async (req, res) => {
  const students = await Student.find();
  res.status(200).json(students);
};

export const getStudentID = async (req, res) => {
  const student = await Student.findById(req.params.id);
  res.status(200).json(student);
};

export const UpDateStudentID = async (req, res) => {
  await Student.findByIdAndUpdate(req.params.id, req.body);
  res.status(204).json({
    message: "The Student has been Updated",
  });
};

export const deleteStudentID = async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.status(204).json({
    message: " The Student has been Deleted",
  });
};
