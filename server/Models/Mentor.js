const { default: mongoose } = require('mongoose')
const mongo = require('mongoose')
const Str = require('@supercharge/strings')

const MentorSchema = new mongo.Schema({
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
        required: true,
    },
    isgoogle: {
        type: Boolean,
        required: true,
        default: false,
    }
});
module.exports = mongoose.model("mentors", MentorSchema);