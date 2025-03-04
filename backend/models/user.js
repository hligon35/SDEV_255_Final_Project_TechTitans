const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    role: {type: String, enum: ['teacher', 'student'], required: true}

});


const User = mongoose.connection.useDb("Users").model("user", UserSchema, "user");
module.exports = User;