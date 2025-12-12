// server/controllers/insightController.js
const db = require('../config/db');


exports.calculateProjectRisks = (req, res) => {
db.all(`SELECT id, budget, spent, progress FROM projects`, [], (err, projects) => {
if (err) return res.status(500).json({ message: 'Failed to fetch projects' });


const results = projects.map(p => {
const budget = Number(p.budget) || 0;
const spent = Number(p.spent) || 0;
const progress = Number(p.progress) || 0;


let riskScore = 0;
const usedPercent = budget === 0 ? 0 : (spent / budget) * 100;


if (usedPercent > progress + 20) riskScore += 60;
if (usedPercent > 90 && progress < 80) riskScore += 30;
if (progress < 10 && usedPercent > 10) riskScore += 10;


let riskLevel = 'Low';
if (riskScore > 70) riskLevel = 'Critical';
else if (riskScore > 40) riskLevel = 'High';
else if (riskScore > 15) riskLevel = 'Medium';


return { projectId: p.id, risk_score: riskScore, risk_level: riskLevel, usedPercent: Number(usedPercent.toFixed(2)) };
});


res.json({ risks: results });
});
};