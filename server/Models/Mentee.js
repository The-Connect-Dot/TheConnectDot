const { default: mongoose } = require('mongoose')
const mongo = require('mongoose')
const Str = require('@supercharge/strings')

const MenteeSchema = new mongo.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
    },
    token: {
        type: String,
        default: Str.random(50),
        unique: true
    },
    password: {
        type: String,
    },
    name: {
        type: String,
        required: true,
    },
    pnumber: {
        type: Number,
        required: true,
    },
    dob: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    isgoogle: {
        type: Boolean,
        required: true,
        default: false,
    },
    image: {
        type: String,
        default: 'default.jpg',
        required: true,
    }

});
module.exports = mongoose.model("mentees", MenteeSchema);
