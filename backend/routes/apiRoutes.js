// server/routes/apiRoutes.js
const express = require('express');
const router = express.Router();
const financeController = require('../controllers/financeController');
const insightController = require('../controllers/insightController');
const authMiddleware = require('../middleware/authMiddleware');


// Projects
router.post('/projects', authMiddleware, financeController.createProject);
router.get('/projects', authMiddleware, financeController.getProjects);


// Invoices
router.post('/invoices', authMiddleware, financeController.createInvoice);
router.get('/invoices', authMiddleware, financeController.getInvoices);


// Insights
router.get('/insights/risks', authMiddleware, insightController.calculateProjectRisks);


module.exports = router;