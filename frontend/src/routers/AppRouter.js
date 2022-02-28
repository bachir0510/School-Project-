import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "../components/admin/Admin";
import SignIn from "../components/auth/SignIn";
import SignUp from "../components/auth/SignUp";
import CreateStudent from "../components/pages/students/CreateStudent";
import StudentList from "../components/pages/students/StudentList";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/addStudent" element={<CreateStudent />} />
        <Route path="/studentList" element={<StudentList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
