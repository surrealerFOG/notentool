const mongoose = require('mongoose');
const Tutorial = require('./tutorial');


mongoose.connect('mongodb://localhost:27017/tutorial', { useNewUrlParser: true, useUnifiedTopology: true }, err => {
    if (err) {
        console.log(err)
    } else {
        console.log('connected to DB successfully');
    }
});

Tutorial.find({ name: "Lian" }, (err, items) => {
    if (err) {
        console.log(err);
    } else {
        console.log(items);
    }
});