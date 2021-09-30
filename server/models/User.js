const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
    email: email address
    password: password hash
    display_name: editable name to appear on site
    partner: partner's email address
    provided_names: Array of Objects containing the names the user has provided to add to the list displayed to their partner and the ratings for those names
    selected_names: Array of Objects containing the names the user has chosen from those presented to them and the ratings for those names
*/

const userSchema = new Schema(
    {
        email: String,
        password: String,
        display_name: String,
        partner: String,
        provided_names: Array,
        selected_names: Array
    }
);

module.exports = mongoose.model('User', userSchema);