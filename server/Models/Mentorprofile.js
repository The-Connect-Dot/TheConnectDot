const { default: mongoose } = require('mongoose')
const mongo = require('mongoose')
const Str = require('@supercharge/strings')

const MentorProfileSchema = new mongo.Schema({
  token: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  organisationname: {
    type: String,
    required: true,
  },
  jobposiion: {
    type: String,
    required: true,
  },
  totalyrsofexp: {
    type: String,
    required: true,
  },
  industryexpertise: {
    type: String,
    required: true,
  },
  areasofspecialisation: {
    type: String,
    required: true,
  },
  prefcommmethod: {
    type: String,
    required: true,
  },
  availofmentorship: {
    type: String,
    required: true,
  },
  mentorshipareas: {
    type: String,
    required: true,
  },
  highestqualification: {
    type: String,
    required: true,
  },
  degreecertification: {
    type: String,
    required: true,
  },
  uniinstitute: {
    type: String,
    required: true,
  },
  briefintro: {
    type: String,
    required: true,
  },
  anyprvsmentoring: {
    type: String,
    required: true,
  },
  linkedinprofileurl: {
    type: String,
  }
});


module.exports = mongoose.model("mentorprofiles", MentorProfileSchema);
