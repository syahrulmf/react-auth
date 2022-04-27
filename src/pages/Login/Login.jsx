import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [dataLogin, setDataLogin] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const res = await axios({
        method: "post",
        url: "https://reqres.in/api/login",
        data: dataLogin,
      });
      console.log(res.data);
      localStorage.setItem("token", res.data.token);

      navigate("/");
      // const token = localStorage.getItem('token');

      // if (token) {

      // }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <input
        type="email"
        placeholder="email"
        onChange={(e) =>
          setDataLogin({
            ...dataLogin,
            email: e.target.value,
          })
        }
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) =>
          setDataLogin({
            ...dataLogin,
            password: e.target.value,
          })
        }
      />
      <button onClick={() => handleSubmit()}>login</button> ||
      <button onClick={() => navigate("/register")}>register</button>
    </>
  );
}

export default Login;
