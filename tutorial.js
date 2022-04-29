const mongoose = require('mongoose');

const ESchema = new mongoose.Schema({
    name: String,
    age: Number,
    enterprise: String,
});

module.exports = mongoose.model('Tutorial', ESchema);