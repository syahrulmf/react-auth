import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [dataRegister, setDataRegister] = useState({
    email: "eve.holt@reqres.in",
    password: "pistol",
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
        url: "https://reqres.in/api/register",
        data: dataRegister,
      });
      console.log(res.data);
      localStorage.setItem("token", res.data.token);

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <input
        type="email"
        placeholder="email"
        value={dataRegister.email}
        onChange={(e) =>
          setDataRegister({
            ...dataRegister,
            email: e.target.value,
          })
        }
      />
      <input
        type="password"
        placeholder="password"
        value={dataRegister.password}
        onChange={(e) =>
          setDataRegister({
            ...dataRegister,
            password: e.target.value,
          })
        }
      />
      <button onClick={() => handleSubmit()}>register</button>
    </>
  );
}

export default Register;
