import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2 style={{ textAlign: "center" }}>ERP</h2>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/finance">Finance</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/login">Logout</Link>
    </div>
  );
}
