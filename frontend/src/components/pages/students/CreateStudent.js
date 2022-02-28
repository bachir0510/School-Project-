import { useState } from "react";
import Axios from "axios";
import "./style/student.css";
import Admin from "../../admin/Admin";
import Sidebar from "../sidebar/Sidebar";

const CreateStudent = () => {
  const initialState = {
    nia: "",
    name: "",
    lastName: "",
    motherName: "",
    birthDate: "",
    group: "",
  };

  const [student, setStudent] = useState(initialState);

  const handleChage = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newStudent = {
      nia: student.nia,
      name: student.name,
      lastName: student.lastName,
      motherName: student.motherName,
      birthDate: student.birthDate,
      group: student.group,
    };
    await Axios.post("http://localhost:8080/api/students", newStudent);
    setStudent({ ...initialState });
  };

  return (
    <div className="student">
      <Sidebar />
      <div className="C-create-student">
        <div className="title">Student Resgistration</div>
        <div className="content-reg">
          <form onSubmit={handleSubmit}>
            <div className="user-details">
              <div className="input-box">
                <span className="details"> Nia</span>
                <input
                  type="text"
                  name="nia"
                  value={student.nia}
                  onChange={handleChage}
                  required
                ></input>
              </div>

              <div className="input-box">
                <span className="details"> Name</span>
                <input
                  type="text"
                  name="name"
                  value={student.name}
                  onChange={handleChage}
                  required
                ></input>
              </div>

              <div className="input-box">
                <span className="details"> Last Name</span>
                <input
                  type="text"
                  name="lastName"
                  value={student.lastName}
                  onChange={handleChage}
                  required
                ></input>
              </div>

              <div className="input-box">
                <span className="details"> Mother Name</span>
                <input
                  type="text"
                  name="motherName"
                  value={student.motherName}
                  onChange={handleChage}
                  required
                ></input>
              </div>

              <div className="input-box">
                <span className="details"> Birth Date</span>
                <input
                  type="date"
                  name="birthDate"
                  value={student.birthDate}
                  onChange={handleChage}
                  required
                ></input>
              </div>

              <div className="input-box">
                <span className="details"> Group</span>
                <input
                  type="text"
                  name="group"
                  value={student.group}
                  onChange={handleChage}
                  required
                ></input>
              </div>
            </div>
            <div className="button">
              <button type="submit"> Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateStudent;
