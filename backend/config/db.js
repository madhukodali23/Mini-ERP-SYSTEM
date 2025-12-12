// server/config/db.js
const path = require('path');
const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();


const dbFile = path.join(__dirname, '..', 'database', 'erp.db');
const initSqlFile = path.join(__dirname, '..', 'database', 'init.sql');


// ensure database directory exists
const dir = path.dirname(dbFile);
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });


const db = new sqlite3.Database(dbFile, (err) => {
if (err) console.error('SQLite open error:', err);
else console.log('Connected to SQLite database:', dbFile);
});


// initialize schema
const schema = fs.readFileSync(initSqlFile, 'utf8');
db.exec(schema, (err) => {
if (err) console.error('Failed to initialize DB schema:', err);
else console.log('Database schema initialized.');
});


module.exports = db;