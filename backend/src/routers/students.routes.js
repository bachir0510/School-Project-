import { Router } from "express";
import * as studentsCrtl from "../controllers/students.ctrl";
const router = Router();

router.post("/", studentsCrtl.createStudent);
router.get("/", studentsCrtl.getStudents);
router.get("/:id", studentsCrtl.getStudentID);
router.put("/:id", studentsCrtl.UpDateStudentID);
router.delete("/:id", studentsCrtl.deleteStudentID);

export default router;
