import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Finance from "./pages/Finance";
import ProtectedRoute from "./components/ProtectedRoute";
import Projects from "./pages/Projects";
import "./styles.css";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      <Route path="/finance" element={<ProtectedRoute><Finance /></ProtectedRoute>} />

            <Route
            path="/projects"
            element={
              <ProtectedRoute role="admin">
                <Projects />
              </ProtectedRoute>
            }
          />


      <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />

    </Routes>
  );
}
