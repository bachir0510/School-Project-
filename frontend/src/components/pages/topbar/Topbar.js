import { ExitToApp } from "@material-ui/icons";
import { Link } from "react-router-dom";

import imgAdmin from "../../assets/img-admin.jpg";
import { useUser } from "../../context/UserContext";
import "./topbar.css";

const Topbar = () => {
  const { exit } = useUser();
  return (
    <div className="topbar">
      <div className="topbar-wrapper">
        <div className="topbar-left">
          <span className="topbar-logo"> Admin</span>
        </div>
        <div className="topbar-right">
          <div className="topbar-icon-container">
            <Link to="/signin">
              <ExitToApp onClick={() => exit()} />
            </Link>
          </div>
          <img src={imgAdmin} alt="" className="topbar-img" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
