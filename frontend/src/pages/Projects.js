import React, { useEffect, useState } from "react";
import API from "../services/api";
import Sidebar from "../layout/Sidebar";
import Navbar from "../layout/Navbar";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  const [form, setForm] = useState({
    name: "",
    description: "",
    budget: ""
  });

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    const res = await API.get("/projects");
    setProjects(res.data.projects);
  };

  const createProject = async (e) => {
    e.preventDefault();

    if (!form.name || !form.budget) {
      alert("Name and Budget are required");
      return;
    }

    await API.post("/projects", form);
    alert("Project Created");

    setForm({ name: "", description: "", budget: "" });
    loadProjects();
  };

  return (
    <>
      <Sidebar />
      <Navbar />

      <div className="content">
        {/* Create Project Card */}
        <div className="card" style={{ maxWidth: 500 }}>
          <h3>Create New Project</h3>

          <form onSubmit={createProject}>
            <input
              placeholder="Project Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <input
              placeholder="Budget"
              value={form.budget}
              onChange={(e) => setForm({ ...form, budget: e.target.value })}
            />

            <input
              placeholder="Description"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
            />

            <button>Create Project</button>
          </form>
        </div>

        {/* Projects Table */}
        <div className="card">
          <h3>All Projects</h3>

          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Budget</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {projects.map((p) => (
                <tr key={p.id}>
                  <td>{p.id}</td>
                  <td>{p.name}</td>
                  <td>₹{p.budget}</td>
                  <td>{p.status || "Active"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
