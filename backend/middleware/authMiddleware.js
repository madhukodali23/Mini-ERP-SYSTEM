// server/middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
require('dotenv').config();


module.exports = function (req, res, next) {
const authHeader = req.headers['authorization'] || req.headers['Authorization'];
const token = authHeader && authHeader.split(' ')[1];
if (!token) return res.status(401).json({ message: 'No token provided' });


jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
if (err) return res.status(403).json({ message: 'Invalid token' });
req.user = decoded; // { id, username, role }
next();
});
};