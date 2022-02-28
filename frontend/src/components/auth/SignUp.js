import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import "./auth.css";

const SignUp = () => {
  const { registerUser } = useUser();
  const navigate = useNavigate();
  const [dataUser, setDataUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const register = (e) => {
    e.preventDefault();
    registerUser(dataUser, navigate);
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
            <Link to="/signin">Login</Link>
          </div>
          <form onSubmit={register}>
            <div className="singup-form">
              <input
                type="text"
                name="username"
                onChange={handleChange}
                placeholder="Your Username"
                className="input"
              ></input>
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
                placeholder="Choose a Password"
                className="input"
              ></input>
              <button className="btn">Create accont</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
