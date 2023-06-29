const { default: mongoose } = require('mongoose')
const mongo = require('mongoose')
const Str = require('@supercharge/strings')

const MentorBlogSchema = new mongo.Schema({
    token: {
        type: String,
        default: Str.random(50),
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
});
module.exports = mongoose.model("mentorblogs", MentorBlogSchema);
