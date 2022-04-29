const mongoose = require('mongoose');
const Employee = require('./employee');


mongoose.connect('mongodb://localhost:27017/tutorial', { useNewUrlParser: true, useUnifiedTopology: true }, err => {
    if (err) {
        console.log(err)
    } else {
        console.log('connected to DB successfully');
    }
});

Employee.find({ age: 16 }, (err, items) => {
    if (err) {
        console.log(err);
    } else {
        console.log(items);
    }
});




































// var express = require("express");
// var bodyParser = require("body-parser");
// var mongoose = require("mongoose")

// const app = express();

// app.use(bodyParser.json())
// app.use(express.static('public'))
// app.use(bodyParser.urlencoded({
//     extended: true
// }))

// mongoose.connect('mongodb://localhost:27017/mydb',{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

// var db = mongoose.connection;

// db.on('error', ()=> console.log("Error in Connecting to Database"));
// db.once('open', ()=> console.log("Connected to Database"));

// app.post("/signup", (req, res) =>{
//     var name = req.body.name;
//     var email = req.body.email;
//     var email = req.body.phne;
//     var password = req.body.password;

//     var data = {
//         "name": name,
//         "email": email,
//         "phne": phne,
//         "password": napassworde,
        

//     }

//     db.collection('users').insertOne(data,(err,collectionh)=>{
//         if(err){
//             throw err;
//         }
//         console.log("Record Inserted Successfully");
//     });

//     return res.redirect('signup_success.html')
// });

// app.get("/", (req,res) =>{
//     res.set({
//         "Allow-access-Allow-Origin" : "*"
//     })
//     return res.redirect('');
// }).listen(3000);

// console.log("Listening on Port 3000");