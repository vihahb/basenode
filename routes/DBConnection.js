var express = require('express');
var router = express.Router();

/* GET users listing. */
var mysql = require('mysql');
var connections = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'vuhavi727',
    database: 'basic_nodejs'
});

connections.connect((err, res) => {
    if (err) throw err;
    console.log(JSON.stringify(res));
    console.log("[Datasource] MySQL Connection established successfully");
});
module.exports = connections;