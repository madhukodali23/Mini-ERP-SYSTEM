// server/index.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();


const authRoutes = require('./routes/authRoutes');
const apiRoutes = require('./routes/apiRoutes');


const app = express();
app.use(cors());
app.use(bodyParser.json());


app.use('/api/auth', authRoutes);
app.use('/api', apiRoutes);


app.get('/', (req, res) => res.send('Construction Mini ERP API (SQLite)'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));