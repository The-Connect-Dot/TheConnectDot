const express = require('express')
const routes = express.Router()
const db = require('../db/conn.js');
const MenteeModel = require('../Models/Mentee.js');
const MentorModel = require('../Models/Mentor.js');
const bodyParser = require('body-parser');
routes.use(bodyParser.urlencoded({ extended: true }));

routes.post("/mentee-register", async (req, res) => {
    var user = await MenteeModel.findOne({ email: req.body.email });
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
        res.json(result);
    }
    else {
        res.json({ msg: "user already exists!" });
    }
});

routes.post("/mentee-login", async (req, res) => {
    var user = await MenteeModel.findOne({ email: req.body.email });
    if (user) {
        if (user.password === req.body.password) {
            res.json({ msg: "user exist and password match" })
        }
        else {
            res.json({ msg: "user exist and password don't match" })
        }
    }
    res.json({ msg: "user don't exist" })

});

routes.post("/mentor-register", async (req, res) => {
    res.json(req.body);
});

routes.post("/mentor-login", async (req, res) => {
    var user = await MentorModel.findOne({ email: req.body.email });
    if (user) {
        if (user.password === req.body.password) {
            res.json({ msg: "user exist and password match" })
        }
        else {
            res.json({ msg: "user exist and password don't match" })
        }
    }
    res.json({ msg: "user don't exist" })
});

module.exports = routes