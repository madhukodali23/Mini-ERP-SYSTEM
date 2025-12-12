import React, { useEffect, useState } from "react";
import API from "../services/api";
import Sidebar from "../layout/Sidebar";
import Navbar from "../layout/Navbar";

export default function Dashboard() {
  const [stats, setStats] = useState({
    revenue: 0,
    projects: 0,
  });

  useEffect(() => {
    const load = async () => {
      const p = await API.get("/projects");
      const i = await API.get("/invoices");
      const revenue = i.data.invoices.reduce((s, x) => s + Number(x.amount), 0);
      setStats({
        projects: p.data.projects.length,
        revenue,
      });
    };
    load();
  }, []);

  return (
    <>
      <Sidebar />
      <Navbar />
      <div className="content">
        <div className="card">
          <h3>Total Projects</h3>
          <h2>{stats.projects}</h2>
        </div>

        <div className="card">
          <h3>Total Revenue</h3>
          <h2>₹{stats.revenue}</h2>
        </div>
      </div>
    </>
  );
}
