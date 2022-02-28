import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import "./auth.css";

const SignIn = () => {
  const { loginUser } = useUser();
  const navigate = useNavigate();
  const [dataUser, setDataUser] = useState({ email: "", password: "" });

  const login = (e) => {
    e.preventDefault();
    loginUser(dataUser, navigate);
  };

  const handleChange = (e) => {
    setDataUser({ ...dataUser, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div className="signup">
            <Link to="/signup">Sing Up</Link>
          </div>
          <div className="login">
            <Link to="/signin">Log In</Link>
          </div>
          <form onSubmit={login}>
            <div className="singup-form">
              <input
                type="email"
                name="email"
                onChange={handleChange}
                placeholder="Your Email Address"
                className="input"
              ></input>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                placeholder="Password"
                className="input"
              ></input>
              <button type="submit" className="btn">
                logIn
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
