import React, { useEffect, useState } from "react";
import API from "../services/api";
import Sidebar from "../layout/Sidebar";
import Navbar from "../layout/Navbar";

export default function Finance() {
  const [projects, setProjects] = useState([]);
  const [invoices, setInvoices] = useState([]);

  const [form, setForm] = useState({
    project_id: "",
    amount: "",
    description: "",
    issued_to: "",
    due_date: "",
  });

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const p = await API.get("/projects");
    const i = await API.get("/invoices");
    setProjects(p.data.projects);
    setInvoices(i.data.invoices);
  };

  const createInvoice = async (e) => {
    e.preventDefault();
    await API.post("/invoices", form);
    alert("Invoice added");
    load();
  };

  return (
    <>
      <Sidebar />
      <Navbar />
      <div className="content">
        <div className="card">
          <h3>Create Invoice</h3>
          <form onSubmit={createInvoice}>
            <select className="input" onChange={(e) => setForm({ ...form, project_id: e.target.value })}>
              <option>Select Project</option>
              {projects.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name} (₹{p.budget})
                </option>
              ))}
            </select>

            <input className="input" placeholder="Amount" onChange={(e) => setForm({ ...form, amount: e.target.value })} />
            <input className="input" placeholder="Issued To" onChange={(e) => setForm({ ...form, issued_to: e.target.value })} />
            <input className="input" placeholder="Description" onChange={(e) => setForm({ ...form, description: e.target.value })} />
            <input className="input" type="date" onChange={(e) => setForm({ ...form, due_date: e.target.value })} />

            <button>Create Invoice</button>
          </form>
        </div>

        <div className="card">
          <h3>Invoices</h3>
          <table className="table">
            <thead>
              <tr><th>Project</th><th>Amount</th><th>Due</th></tr>
            </thead>
            <tbody>
              {invoices.map((inv) => (
                <tr key={inv.id}>
                  <td>{inv.project_id}</td>
                  <td>₹{inv.amount}</td>
                  <td>{inv.due_date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
