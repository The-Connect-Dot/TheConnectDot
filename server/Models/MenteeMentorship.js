const { default: mongoose } = require('mongoose')
const mongo = require('mongoose')
const Str = require('@supercharge/strings')


const MenteeMentorshipSchema = new mongo.Schema({
    token: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    recentQualification: {
        type: String,
        required: true,
    },
    collegeName: {
        type: String,
        required: true,
    },
    areaOfStudy: {
        type: String,
        required: true,
    },
    degree: {
        type: String,
        required: true,
    },
    yearOfStudy: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    prevmentandrelatedexp: {
        type: String,
        required: true,
    },
    anycoursesorcertification: {
        type: String,
        required: true,
    },
    spectopicorskills: {
        type: String,
        required: true,
    },
    areaofinterest: {
        type: String,
        required: true,
    },
    hopetoachieve: {
        type: String,
        required: true,
    },
    expectationfrommentor: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("menteementorships", MenteeMentorshipSchema);

