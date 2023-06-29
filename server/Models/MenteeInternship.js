const { default: mongoose } = require('mongoose')
const mongo = require('mongoose')
const Str = require('@supercharge/strings')


const MenteeInternshipSchema = new mongo.Schema({
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
    prefinternshipposition: {
        type: String,
        required: true,
    },
    departmentorareaofinterest: {
        type: String,
        required: true,
    },
    availabilitytostartinternship: {
        type: String,
        required: true,
    },
    previnternshiporexperience: {
        type: String,
        required: true,
    },
    internshipduration: {
        type: String,
        required: true,
    },
    hopetogainorachieve: {
        type: String,
        required: true,
    },
    specificgoalsorareaoflearning: {
        type: String,
        required: true,
    },
    modeofinternship: {
        type: String,
        required: true,
    },
    requireaccomodation: {
        type: String,
        required: true,
    },
    cvFile: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("menteeinternships", MenteeInternshipSchema);

