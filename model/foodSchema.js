/**
 * Created by vivh on 10/26/18 - 5:08 PM.
 */
// var mysql = require('mysql');
// var connection = mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'vuhavi727',
//     database:'basic_nodejs'
// });

var FoodSchema = new FoodSchema({
    name: {
        type: String,
        required: true
    },
    foodDescription: {
        type: String,
        default: ""
    },
    createDate: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['Available', 'Unavailable']
        }],
        default: ['Available']
    },
});

//A setter
FoodSchema.patch('name').set( (inputString) => {
    return inputString[0].toUpperCase() + inputString.slice(1);
});

// module.exports = mysql.