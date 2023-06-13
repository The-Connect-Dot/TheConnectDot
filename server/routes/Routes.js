const express = require('express')
const routes = express.Router()
const db = require('../db/conn.js');
const MenteeModel = require('../Models/Mentee.js');
const MentorModel = require('../Models/Mentor.js');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');

routes.use(bodyParser.urlencoded({ extended: true }));

routes.post("/mentee-register", async (req, res) => {
    try {
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
            return res.json({ msg: "Mentee Registered Successfully!", isSucess: true, userId: user.token });
        } else {
            return res.json({ msg: "user already exists!", isSucess: false });
        }
    } catch (error) {
        return res.json({ msg: "Some Error Ocurred!", isSucess: false });
        console.log(error);
    }
});

routes.post("/mentee-login", async (req, res) => {
    try {
        var user = await MenteeModel.findOne({ email: req.body.email.trim() });
        if (user) {
            const ismatch = await bcrypt.compare(req.body.password.trim(), user.password)
            if (ismatch) {
                res.json({ msg: "Login Success!!", isSucess: true, userId: user.token });
            } else {
                res.json({ msg: "Wrong Password!", isSucess: false });
            }
        }
        else {
            res.json({ msg: "No User With That Mail!!", isSucess: false });

        }
    } catch (error) {
        return res.json({ msg: "Some Error Ocurred!", isSucess: false });
        console.log(error);
    }
});

routes.post('/verify-login', async (req, res) => {
    try {
        var userId = req.body.userId;
        var email = req.body.email;
        const type = req.body.type.trim();
        var user;
        if (userId) {
            userId = userId.trim();
            if (type === 'mentee') {
                user = await MenteeModel.findOne({ token: userId });
            }
            else {
                user = await MentorModel.findOne({ token: userId });
            }
        }
        else if (email) {
            email = email.trim();
            if (type === 'mentee') {
                user = await MenteeModel.findOne({ email: email });
            }
            else {
                user = await MentorModel.findOne({ email: email });
            }
        }
        if (user) {
            return res.json({ msg: "Found Saved Cache!", isSucess: true, userId: user.token });
        } else {
            return res.json({ msg: "Cache not Saved!", isSucess: false });
        }
    } catch (error) {
        return res.json({ msg: "Some Error Ocurred!", isSucess: false });
        console.log(error);
    }
});


routes.post("/mentor-register", async (req, res) => {
    try {
        var user = await MentorModel.findOne({ email: req.body.email.trim().toLowerCase() });
        var password = req.body.password.trim();
        console.log(user, password);
        const hasp = await bcrypt.hash(password, 12);
        if (!user) {
            user = new MentorModel({
                email: req.body.email.trim().toLowerCase(),
                password: hasp,
            });
            const result = await user.save();
            user = await MentorModel.findOne({ email: req.body.email });
            return res.json({ msg: "Mentee Registered Successfully!", isSucess: true, userId: user.token });
        } else {
            return res.json({ msg: "user already exists!", isSucess: false });
        }
    } catch (error) {
        return res.json({ msg: "Some Error Ocurred!", isSucess: false });
        console.log(error);
    }
});

routes.post("/mentor-login", async (req, res) => {
    try {
        var user = await MentorModel.findOne({ email: req.body.email.trim() });
        if (user) {
            const ismatch = await bcrypt.compare(req.body.password.trim(), user.password)
            if (ismatch) {
                res.json({ msg: "Login Success!!", isSucess: true, userId: user.token });
            } else {
                res.json({ msg: "Wrong Password!", isSucess: false });
            }
        }
        else {
            res.json({ msg: "No User With That Mail!!", isSucess: false });

        }
    } catch (error) {
        return res.json({ msg: "Some Error Ocurred!", isSucess: false });
        console.log(error);
    }

});

routes.post("/logout", async (req, res) => {
    try {
        // Your logout logic here
        res.clearCookie("connectDot");

        // Optionally, you can reset the session object
        req.session = null;

        return res.json({ msg: "Logged Out Successfully!", isSuccess: true });
    } catch (error) {
        console.error("Error logging out:", error);
        // Handle error while logging out
        return res.status(500).json({ msg: "Logout failed", isSuccess: false });
    }
});





module.exports = routes;
