import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [dataLogin, setDataLogin] = useState({
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  });

  const handleSubmit = async () => {
    try {
      const res = await axios({
        method: "post",
        url: "https://reqres.in/api/login",
        data: dataLogin,
      });
      console.log(res.data);

      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);
        navigate("/", { replace: true });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <input
        type="email"
        placeholder="email"
        value={dataLogin.email}
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
        value={dataLogin.password}
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
