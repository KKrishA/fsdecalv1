// LIBRARIES NEEDED
const express = require('express');
const app = express();
const mysql = require('mysql2');
const mongoose = require('mongoose');

// SQL CONNECTION
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'my-password', 
    database: 'companyDB' 
});

// MySQL Connection Verification
function verifyMySQLConnection() {
    connection.connect(function (err) {
        if (err) {
            console.error('Error connecting to MySQL: ' + err.stack);
            return;
        }
        console.log('MySQL connected as id ' + connection.threadId);
    });
}

mongoose.connect('mongodb://localhost:27017/companyDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const ProjectSchema = new mongoose.Schema({
    name: String,
    budget: Number
});

const ProjectModel = mongoose.model('Project', ProjectSchema);

mongoose.connection.on('connected', () => {
    console.log('MongoDB connected successfully');
});

mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

// ENDPOINTS
// Endpoint to get all projects from MongoDB: http://localhost:3000/projects
app.get('/projects', async (req, res) => {
    try {
        const projects = await ProjectModel.find({});
        res.json(projects);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

// Endpoint to get all employees from MySQL: http://localhost:3000/employees
app.get('/employees', function (req, res) {
    connection.query('SELECT * FROM employees', function (error, results, fields) {
        if (error) throw error;
        res.json(results);
    });
});

// RUNNING THE SERVER
app.listen(3000, function () {
    console.log('🚀 Server is running on port 3000!');
    verifyMySQLConnection();
});
