import React from "react";
import "../styles.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <h3>Construction Mini ERP</h3>
      <div>{new Date().toLocaleDateString()}</div>
    </div>
  );
}
