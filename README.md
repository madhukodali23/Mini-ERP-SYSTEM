# 🏗️ Construction Mini ERP System

A full-stack Construction ERP prototype built with **Node.js, Express, SQLite, and React**.  
It includes authentication, project management, finance module, and AI-like risk insights.

---

## 🌐 Live Deployment

### **Frontend (Vercel)**  
https://mini-erp-system-2142qrwet-kodali-madhu-kanths-projects.vercel.app/

### **Backend API (Render)**  
https://mini-erp-system-x2hy.onrender.com

---

## 📌 Overview

This Mini-ERP system simulates construction industry workflows:

- Manage **projects**
- Manage **invoices**
- Maintain **accounts receivable**
- Provide **AI-like risk scoring** based on budget vs progress
- Supports **admin & user roles**

It is lightweight, modular, and ideal for learning **full-stack development**.

---

## ✨ Features

### 🔐 Authentication
- Secure login & registration
- Password hashing (bcrypt)
- JWT-based authentication
- Role: admin / user

### 🏗️ Project Management (Admin Only)
- Create new projects
- View all project details
- Tracks budget, progress, and spending

### 💰 Finance Module
- Create invoices linked to projects
- Automatic ledger updates
- Invoice table view

### 📊 Dashboard
- Project count
- Revenue summary
- Clean UI layout

### 🤖 AI Insights
- Basic rule-based risk evaluation
- Highlights overspending or slow progress

---

## 🧰 Tech Stack

### **Frontend**
- React (Vite)
- Axios
- React Router DOM
- Custom CSS

### **Backend**
- Node.js
- Express.js
- SQLite database (file-based)
- JWT authentication
- Bcrypt password hashing

### **Deployment**
- **Render → Backend**
- **Vercel → Frontend**

---

## 📁 Folder Structure

```
mini-erp-project/
│
├── backend/
│ ├── config/
│ │ └── db.js
│ ├── controllers/
│ │ ├── authController.js
│ │ ├── projectController.js
│ │ ├── financeController.js
│ │ └── insightController.js
│ ├── routes/
│ │ ├── authRoutes.js
│ │ ├── projectRoutes.js
│ │ ├── financeRoutes.js
│ │ └── insightRoutes.js
│ ├── middleware/
│ │ └── authMiddleware.js
│ ├── database/
│ │ └── erp.db
│ ├── index.js
│ └── package.json
│
└── frontend/
├── src/
│ ├── pages/
│ │ ├── Login.js
│ │ ├── Register.js
│ │ ├── Dashboard.js
│ │ ├── Finance.js
│ │ └── Projects.js
│ ├── layout/
│ │ ├── Navbar.js
│ │ └── Sidebar.js
│ ├── components/
│ │ └── ProtectedRoute.js
│ ├── services/
│ │ └── api.js
│ ├── App.js
│ ├── index.js
│ └── styles.css
└── package.json
```


---

## 🛠️ Run Locally

### 1️⃣ Clone Repo
git clone https://github.com/your-username/mini-erp-project.git


---

### 2️⃣ Backend Setup
cd backend
npm install
node index.js


---

### 3️⃣ Frontend Setup
cd frontend
npm install
npm start


## 🤝 Contributing
Pull requests, issues, and improvements are welcome.

---

## 📄 License
This project is for educational and demonstration purposes only.

