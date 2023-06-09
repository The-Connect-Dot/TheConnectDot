const { default: mongoose } = require('mongoose')
const mongo = require('mongoose')
const Str = require('@supercharge/strings')


const AdminSchema = new mongo.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
    },
    token: {
        type: String,
        default: Str.random(50),
        unique: true
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    },
    tusers: {
        type: Number,
    }
});
module.exports = mongoose.model("admins", AdminSchema);
