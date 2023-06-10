const express = require('express')
const routes = express.Router()
const db = require('../db/conn.js');
const MenteeModel = require('../Models/Mentee.js');
const MentorModel = require('../Models/Mentor.js');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');

routes.use(bodyParser.urlencoded({ extended: true }));

routes.post("/mentee-register", async (req, res) => {
    var user = await MenteeModel.findOne({ email: req.body.email });
    var password = req.body.password.trim();
    const hasp = await bcrypt.hash(password, 12);
    if (!user) {
      user = new MenteeModel({
        email: req.body.email.trim().toLowerCase(),
        password: hasp,
        name: req.body.name.trim(),
        pnumber: req.body.pnumber.trim(),
        dob: req.body.dob.trim(),
        gender: req.body.gender.trim(),
        location: req.body.location.trim(),
        isgoogle: req.body.google,
      });
      const result = await user.save();
      user = await MenteeModel.findOne({ email: req.body.email });
      return res.json({msg:"Mentee Registered Successfully!",isSucess:true,userId:user.token});
    } else {
      return res.json({ msg: "user already exists!",isSucess:false });
    }
  });
  
  routes.post("/mentee-login", async (req, res) => {
    var user = await MenteeModel.findOne({ email: req.body.email });
    if (user) {
      const ismatch = await bcrypt.compare(req.body.password.trim(), user.password)
      if (ismatch) {
        return res.json({ msg: "Login Success!!",isSucess:true,userId:user.token });
      } else {
        return res.json({ msg: "Wrong Password!",isSucess:false });
      }
    }
    return res.json({ msg: "No User With That Mail!!",isSucess:false });
  });
  
  routes.post('/verify-login', async (req, res) => {
    const userId = req.body.userId.trim();
    const user = await MenteeModel.findOne({ token:userId });
    if (user) {
      return res.json({ msg: "Found Saved Cache!",isSucess:true,userId:user.token });
    } else {
      return res.json({  msg: "Cache not Saved!",isSucess:false});
    }
  });
  
  
  routes.post("/mentor-register", async (req, res) => {
    res.json(req.body);
  });
  
  routes.post("/mentor-login", async (req, res) => {
    var user = await MentorModel.findOne({ email: req.body.email });
    if (user) {
      if (user.password === req.body.password) {
        return res.json({ msg: "user exists and password matches" });
      } else {
        return res.json({ msg: "user exists but password doesn't match" });
      }
    }
    return res.json({ msg: "user doesn't exist" });
  });
  
  module.exports = routes;
  