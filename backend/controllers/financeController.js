// server/controllers/financeController.js
const db = require('../config/db');


exports.createInvoice = (req, res) => {
const { project_id, amount, description, issued_to, due_date } = req.body;
if (!project_id || !amount) return res.status(400).json({ message: 'Missing fields' });


const sql = `INSERT INTO invoices (project_id, amount, description, issued_to, due_date) VALUES (?,?,?,?,?)`;
db.run(sql, [project_id, amount, description, issued_to, due_date], function (err) {
if (err) { console.error(err); return res.status(500).json({ message: 'Invoice creation failed' }); }


// update project spent
db.run(`UPDATE projects SET spent = COALESCE(spent,0) + ? WHERE id = ?`, [amount, project_id], (uErr) => {
if (uErr) console.error('Failed to update project spent', uErr);


// update accounts receivable
db.run(`UPDATE accounts SET balance = COALESCE(balance,0) + ? WHERE type='Receivable'`, [amount], (aErr) => {
if (aErr) console.error('Failed to update accounts', aErr);


res.json({ id: this.lastID, message: 'Invoice created' });
});
});
});
};


exports.getInvoices = (req, res) => {
db.all(`SELECT * FROM invoices ORDER BY created_at DESC`, [], (err, rows) => {
if (err) return res.status(500).json({ message: 'Failed to fetch invoices' });
res.json({ invoices: rows });
});
};


exports.createProject = (req, res) => {
const { name, description, budget, start_date, end_date } = req.body;
if (!name || !budget) return res.status(400).json({ message: 'Missing fields' });


db.run(`INSERT INTO projects (name, description, budget, start_date, end_date) VALUES (?,?,?,?,?)`, [name, description, budget, start_date, end_date], function (err) {
if (err) { console.error(err); return res.status(500).json({ message: 'Failed to create project' }); }
res.json({ project: { id: this.lastID, name, budget } });
});
};


exports.getProjects = (req, res) => {
db.all(`SELECT * FROM projects ORDER BY created_at DESC`, [], (err, rows) => {
if (err) return res.status(500).json({ message: 'Failed to fetch projects' });
res.json({ projects: rows });
});
};