const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/*
    name: child's name
    gender: boy, girl, neutral
    origin: country/culture of origin
    meaning: name's literal/transliterated meaning
*/
const nameSchema = new Schema(
    {
        name: String,
        gender: String,
        origin: String,
        meaning: String
    }
);

module.exports = mongoose.model('Name', nameSchema);