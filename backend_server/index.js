const express = require('express');
const mysql = require('mysql2');
const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');

const app = express();
const PORT = 3000;

// MySQL connection
const sqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // your password here
  database: 'company_db' // your MySQL database
});

sqlConnection.connect((err) => {
  if (err) throw err;
  console.log('✅ Connected to MySQL');
});

// MongoDB connection via Mongoose
mongoose.connect('mongodb://localhost:27017/companyDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB via Mongoose'))
.catch(err => console.error(err));

// Basic route
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
