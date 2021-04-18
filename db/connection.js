const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MyQL username
        user: 'root',
        // Your MySQL password
        password: 'footfart8',
        database: 'election'
    });

module.exports = db;