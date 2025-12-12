const express = require('express');
const mysql = require('mysql2');
const app = express();
const db = mysql.createConnection({
 host: 'mysql',
 user: 'root',
 password: 'rootpass',
 database: 'testdb'
});
db.connect(err => {
 if (err) throw err;
 console.log('Connected to MySQL!');
});
app.get('/', (req, res) => {
 res.send('Node.js app running via Nginx reverse proxy!');
});
app.listen(3000, () => console.log('App listening on port 3000'));