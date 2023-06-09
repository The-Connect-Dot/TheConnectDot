const express = require('express')
const routes = express.Router()
const db = require('../db/conn.js');
const MenteeModel = require('../Models/Mentee.js');
const MentorModel = require('../Models/Mentor.js');
const bodyParser = require('body-parser');
routes.use(bodyParser.urlencoded({ extended: true }));

routes.post("/mentee-register", async (req, res) => {
    res.json(req.body);
});

routes.post("/mentee-login", async (req, res) => {
    res.json(req.body);
});

routes.post("/mentor-register", async (req, res) => {
    res.json(req.body);
});

routes.post("/mentor-login", async (req, res) => {
    res.json(req.body);
});

module.exports = routes