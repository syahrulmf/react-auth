import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      window.location.href = "/login";
    }
  }, []);

  if (!token) {
    return <div>Loading...</div>;
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <div>Home</div>
      <button onClick={() => handleLogout()}>Logout</button>
    </>
  );
}

export default Home;
