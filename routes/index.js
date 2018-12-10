var express = require('express');
var router = express.Router();
var connections = require('./DBConnection.js');

var employeeTable = "demo";

/* GET home page. */
router.get('/home', function (req, respond, next) {
    respond.render('index', {title: 'My tutorial express'});
});
router.get('/list_all_user', (request, respond, next) => {
    // respond.end('GET requested => list all foods');
    connections.query('select * from ' + employeeTable, (error, results, fields) => {
        if (error) throw error;
        console.log(`Data: ${JSON.stringify(results)}`);
        respond.end(`${JSON.stringify(results)}`);
    });
});
debugger;
router.post('/insert_new_user', (request, respond, next) => {
    // const newUser = UserSchema();
    var user = JSON.parse(JSON.stringify(request.body));
    // var schemar = new UserSchema(json.get("name"), json.get("gender"), json.get("address"));
    var sql = "INSERT INTO " + employeeTable + " (name, gender, address) VALUES ('" + user.name + "', '" + user.gender + "', '" + user.address + "')";
    connections.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
    respond.end('POST requested => add new user');
});

router.put('/update_a_employee', (request, respond, next) => {
    var user = JSON.parse(JSON.stringify(request.body));
    var sqlStatement = 'UPDATE ' + employeeTable + ' SET name = \'' + user.name + '\', gender = \'' + user.gender + '\', address = \'' + user.address + '\' WHERE id = ?';
    connections.query(sqlStatement, user.id, function (err, result, fields) {
        if (err) throw err;
        console.log("1 record updated whith id: " + user.id);
    });
    respond.end('PUT requested => Update a whith id: ' + user.id);
});

router.delete('/delete_a_employee', (request, respond, next) => {

    var sqlStatement = 'DELETE FROM ' + employeeTable + ' WHERE id = ?';
    var user = JSON.parse(JSON.stringify(request.body));
    connections.query(sqlStatement, user.id, function (err, result, fields) {
        if (err) throw err;
        console.log("1 record deleted whith id: " + user.id);
    });


    respond.end('DELETE requested => Delete a employee whith id: ' + user.id);
});

module.exports = router;
