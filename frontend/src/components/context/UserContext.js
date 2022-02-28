import Axios from "axios";
import Swal from "sweetalert2";
import { useState, createContext, useContext, useEffect } from "react";

const UserContext = createContext();
const initialState = { login: false, token: "", name: "" };

const UserProvider = (props) => {
  const [user, setUser] = useState(initialState);

  useEffect(() => {
    const initial = JSON.parse(localStorage.getItem("user"));
    initial ? initial.login && setUser(initial) : setUser(initialState);
  }, []);

  const loginUser = async (dataUser, navigate) => {
    try {
      const { data } = await Axios.post(
        "http://localhost:8080/api/auth/signin",
        dataUser
      );
      if (data.ok) {
        const userLogin = {
          login: true,
          token: data.token,
          username: data.data.username,
        };
        localStorage.setItem("user", JSON.stringify(userLogin));
        setUser(userLogin);
        navigate("/admin");

        Swal.fire({
          icon: "success",
          title: data.message,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      if (!error.response.data.ok)
        return Swal.fire({
          icon: "error",
          title: error.response.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
      console.log("error", error.message);
    }
  };

  const registerUser = async (dataUser, navigate) => {
    try {
      const { data } = await Axios.post(
        "http://localhost:8080/api/auth/signup",
        dataUser
      );
      if (data.ok) {
        const userLogin = {
          login: true,
          token: data.token,
          name: data.name,
        };
        localStorage.setItem("user", JSON.stringify(userLogin));
        setUser(userLogin);
        navigate("/admin");

        Swal.fire({
          icon: "success",
          title: data.message,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      if (!error.response.data.ok)
        return Swal.fire({
          icon: "error",
          title: error.response.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
      console.log("error", error.message);
    }
  };

  const exit = () => {
    setUser(initialState);
    localStorage.removeItem("user");
  };

  const value = {
    loginUser,
    registerUser,
    user,
    exit,
  };

  return <UserContext.Provider value={value} {...props} />;
};

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser error");
  }
  return context;
}

export default UserProvider;
