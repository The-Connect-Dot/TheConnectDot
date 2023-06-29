const { default: mongoose } = require('mongoose')
const mongo = require('mongoose')
const Str = require('@supercharge/strings')


const MenteeProfileSchema = new mongo.Schema({
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
  preferredSlots: {
    type: String,
    required: true,
  },
  prevExperiences: {
    type: String,
    required: true,
  },
  interestedSkills: {
    type: String,
    required: true,
  },
  specificNeeds: {
    type: String,
    required: true,
  },
  cvFile: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("menteeprofiles", MenteeProfileSchema);

