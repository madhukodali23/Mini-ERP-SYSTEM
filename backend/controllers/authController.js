// server/controllers/authController.js
const db = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();


exports.register = (req, res) => {
const { username, email, password, role } = req.body;
if (!username || !email || !password) return res.status(400).json({ message: 'Missing fields' });


bcrypt.hash(password, 10, (err, hash) => {
if (err) return res.status(500).json({ message: 'Hashing error' });


const sql = `INSERT INTO users (username, email, password_hash, role) VALUES (?,?,?,?)`;
db.run(sql, [username, email, hash, role || 'user'], function (err) {
if (err) {
console.error(err);
return res.status(500).json({ message: 'Registration failed', error: err.message });
}


const user = { id: this.lastID, username, email, role: role || 'user' };
res.json({ user });
});
});
};


exports.login = (req, res) => {
const { email, password } = req.body;
if (!email || !password) return res.status(400).json({ message: 'Missing fields' });


db.get(`SELECT * FROM users WHERE email = ?`, [email], (err, user) => {
if (err) return res.status(500).json({ message: 'DB error' });
if (!user) return res.status(400).json({ message: 'Invalid credentials' });


bcrypt.compare(password, user.password_hash, (err, same) => {
if (err || !same) return res.status(400).json({ message: 'Invalid credentials' });


const token = jwt.sign({ id: user.id, username: user.username, role: user.role }, process.env.JWT_SECRET, { expiresIn: process.env.TOKEN_EXPIRY || '7d' });
res.json({ token, user: { id: user.id, username: user.username, email: user.email, role: user.role } });
});
});
};