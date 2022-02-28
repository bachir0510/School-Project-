import { Link, Outlet } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-menu">
        <h3 className="sidebar-title"> Students</h3>
        <ul className="sidebar-list">
          <li className="sidebar-list-item ">
            <Link to="/addStudent" aria-current="page">
              Add Student
            </Link>
          </li>
          <li className="sidebar-list-item ">
            <Link to="/studentList" aria-current="page">
              Student List
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
