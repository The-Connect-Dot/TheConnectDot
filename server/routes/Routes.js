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
            email: req.body.email,
            password: req.body.password,
            name: req.body.name,
            pnumber: req.body.pnumber,
            dob: req.body.dob,
            gender: req.body.gender,
            location: req.body.location,
            isgoogle: req.body.google,
        })
        const result = await user.save();
        res.json({success:true,userId:user.token});
    }
    else {
        res.json({success: false,msg: "user already exists!" });
    }
});

routes.post("/mentee-login", async (req, res) => {
    var user = await MenteeModel.findOne({ email: req.body.email });
    if (user) {
        const ismatch = bcrypt.compare(req.body.password.trim(), user.password)
        if (ismatch) {
            const result = await user.save();
            res.json({success: true,result,userId:user.token })
        }
        else {
            res.json({success: false, msg: "password don't match" })
        }
    }
    res.json({ msg: "user don't exist" })

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
    var user = await MentorModel.findOne({ email: req.body.email });
    var password = req.body.password.trim();
    const hasp = await bcrypt.hash(password, 12);
    if (!user) {
        user = new MentorModel({
            email: req.body.email,
            password: req.body.password,
            isgoogle: req.body.google,
        })
        const result = await user.save();
        res.json({success:true,userId:user.token});
    }
    else {
        res.json({success: false,msg: "user already exists!" });
    }
});

routes.post("/mentor-login", async (req, res) => {
    var user = await MentorModel.findOne({ email: req.body.email });
    if (user) {
        const ismatch = bcrypt.compare(req.body.password.trim(), user.password)
        if (ismatch) {
            const result = await user.save();
            res.json({success: true,result,userId:user.token })
        }
        else {
            res.json({success: false, msg: "password don't match" })
        }
    }
    res.json({ msg: "user don't exist" })


});

module.exports = routes