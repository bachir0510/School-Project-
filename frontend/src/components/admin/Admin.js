import Sidebar from "../pages/sidebar/Sidebar";
import Topbar from "../pages/topbar/Topbar";
import "./admin.css";

const Admin = () => {
  return (
    <div>
      <Topbar />
      <div className="admin-sidebar-container">
        <Sidebar />
      </div>
    </div>
  );
};

export default Admin;
