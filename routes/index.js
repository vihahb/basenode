var express = require('express');
var router = express.Router();
var connections = require('./DBConnection.js');

/* GET home page. */
router.get('/home', function(req, respond, next) {
    respond.render('index', { title: 'My tutorial express' });
});
router.get('/list_all_user',(request, respond, next)=>{
  // respond.end('GET requested => list all foods');
    connections.query('select * from demo', (error, results, fields)=>{
        if (error) throw error;
        console.log(`Data: ${JSON.stringify(results)}`);
        respond.end(`${JSON.stringify(results)}`);
    });
});
debugger;
router.post('/insert_new_user',(request, respond, next)=>{
    // const newUser = UserSchema();
  respond.end('POST requested => add new food');
});

router.put('/update_a_food',(request, respond, next)=>{
  respond.end('PUT requested => Update a food');
});

router.delete('/delete_a_food',(request, respond, next)=>{
    respond.end('DELETE requested => Delete a food');
});

module.exports = router;
