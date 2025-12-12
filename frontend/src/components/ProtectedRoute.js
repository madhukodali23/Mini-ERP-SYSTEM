import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, role }) {
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("role");

  if (!token) return <Navigate to="/login" replace />;

  // If route requires admin, but user is not admin
  if (role === "admin" && userRole !== "admin") {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}
