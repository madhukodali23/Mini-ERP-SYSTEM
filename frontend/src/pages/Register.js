import React, { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    role: "user",
  });

  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();
    await API.post("/auth/register", form);
    alert("User registered!");
    navigate("/login");
  };

  return (
    <div className="content" style={{ maxWidth: 400 }}>
      <div className="card">
        <h2>Register</h2>
        <form onSubmit={register}>
          <input className="input" placeholder="Username" onChange={(e) => setForm({ ...form, username: e.target.value })} />
          <input className="input" placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
          <input className="input" type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />

          <button>Register</button>
        </form>
      </div>
    </div>
  );
}
