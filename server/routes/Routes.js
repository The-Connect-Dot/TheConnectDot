const express = require('express')
const routes = express.Router()
const db = require('../db/conn.js');
const MenteeModel = require('../Models/Mentee.js');
const MentorModel = require('../Models/Mentor.js');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const MenteeInternshipModel = require('../Models/MenteeInternship.js');
const MenteeMentorshipModel = require('../Models/MenteeMentorship.js');
const MenteeSkillDevModel = require('../Models/MenteeSkillDev.js');
const MentorDetailsModel = require('../Models/Mentorprofile.js');
const MentorBlogs = require('../Models/MentorBlogs.js');
const multer = require('multer');
const upload = multer({ dest: 'connectDotCSV/' });
const images = multer({ dest: 'connectDotImages/' });
const imageUploads = multer({ dest: 'uploads/' });
const path = require('path');
const transporter = require('../Helper/sendEmail');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const sharp = require('sharp');


routes.use(bodyParser.urlencoded({ extended: true }));
routes.use('/user-images', express.static('connectDotImages'));

routes.post('/my-blogs', async (req, res) => {
    try {
        const token = req.body.token;
        try {
            const user = await MentorBlogs.find({ token: token })
            if (!user) {
                return res.json(user);
            }
            else {
                return res.json(user);
            }
        } catch (error) {
            return res.json({ msg: "Blog Not Saved!", isSuccess: false, color: "red" });

        }
    } catch (error) {
        console.log(error);
        return res.json({ msg: "Some Error Ocurred!", isSuccess: false, color: "red" });

    }
});

routes.get('/all-blogs', async (req, res) => {
    try {
        const user = await MentorBlogs.find({})
        if (!user) {
            return res.json({});
        }
        else {
            return res.json(user);
        }

    } catch (error) {
        console.log(error);
        return res.json({});

    }
});

routes.post('/find-blog', async (req, res) => {
    try {
        const user = await MentorBlogs.find({ _id: req.body.id })
        if (!user) {
            return res.json({});
        }
        else {
            return res.json(user);
        }

    } catch (error) {
        console.log(error);
        return res.json({});
    }
});


routes.post('/mentor-blogs', async (req, res) => {
    try {
        const token = req.body.token;
        const title = req.body.title;
        const content = req.body.content;
        try {
            const user = new MentorBlogs({
                token: token,
                content: content,
                title: title
            })
            await user.save();
            return res.json({ msg: 'Blog saved successfully', color: 'green', isSuccess: true });
        } catch (error) {
            return res.json({ msg: "Blog Not Saved!", isSuccess: false, color: "red" });

        }
    } catch (error) {
        console.log(error);
        return res.json({ msg: "Some Error Ocurred!", isSuccess: false, color: "red" });

    }
});

routes.post('/save-image', imageUploads.single('image'), async (req, res) => {
    try {
        if (!req.file) {
            return res.json({ msg: 'No image provided', color: 'red', isSuccess: false });
        }
        const file = req.file;
        const token = req.body.token;
        const type = req.body.type;
        if (type === 'mentee') {
            const user = await MenteeModel.findOne({ token: token });
            if (!user) {
                return res.json({ msg: 'No User Found', color: 'red', isSuccess: false });
            }
            else {
                const imageFilePath = path.join('connectDotImages', token);
                try {
                    if (fs.existsSync(imageFilePath)) {
                        fs.unlinkSync(imageFilePath);
                    }
                } catch (error) {
                    console.log('unable to delete file!', error);
                }
                sharp(file.path)
                    .resize(200)
                    .jpeg({ quality: 30 })
                    .toFile(imageFilePath, (err) => {
                        if (err) {
                            console.log('Error compressing image:', err);
                            return res.json({ msg: 'Failed to compress image', color: 'red', isSuccess: false });
                        }
                        try {
                            fs.unlinkSync(file.path);
                        } catch (error) {
                            console.log('unable to delete file!', error);
                        }
                    });
                user.image = token;
                await user.save();
                return res.json({ msg: 'Image saved successfully', color: 'green', isSuccess: true });
            }
        }
        else {
            const user = await MentorModel.findOne({ token: token });
            if (!user) {
                return res.json({ msg: 'No User Found', color: 'red', isSuccess: false });
            }
            else {
                const imageFilePath = path.join('connectDotImages', token);
                sharp(file.path)
                    .resize(200)
                    .jpeg({ quality: 30 })
                    .toFile(imageFilePath, (err) => {
                        if (err) {
                            return res.json({ msg: 'Failed to compress image', color: 'red', isSuccess: false });
                        }
                    });
                user.image = token;
                await user.save();
                return res.json({ msg: 'Image saved successfully', color: 'green', isSuccess: true });
            }
        }
    } catch (error) {
        console.log(error);
        return res.json({ msg: "Some Error Ocurred!", isSuccess: false, color: "red" });

    }
    // const imageFilePath = path.join(__dirname, 'connectDotImages', req.file.filename);
    // req.file.move(imageFilePath, (err) => {
    //     if (err) {
    //         console.error('Error moving file:', err);
    //         return res.json({ error: 'Failed to save image' });
    //     }
    //     res.json({ message: 'Image saved successfully' });
    // });
});

routes.post("/get-user", async (req, res) => {
    try {
        const type = req.body.type;
        const token = req.body.token;
        if (type === "mentee") {
            const user = await MenteeModel.findOne({ token: token });

            if (user) {
                return res.json({ isSuccess: true, data: user });
            } else {
                return res.json({ isSuccess: false });
            }
        }
        else {
            const user = await MentorModel.findOne({ token: token });
            if (user) {
                return res.json({ isSuccess: true, data: user });
            } else {
                return res.json({ isSuccess: false });
            }
        }
    } catch (error) {
        console.log(error);
        return res.json({ msg: "Some Error Ocurred!", isSuccess: false, color: "red" });
    }
});

routes.post("/mentee-register", async (req, res) => {
    try {
        var user = await MenteeModel.findOne({ email: req.body.email });
        var password = req.body.password.trim();
        const hasp = await bcrypt.hash(password, 12);
        const urlSafeHashedPassword = hasp.replace(/\//g, '_').replace(/\+/g, '-');
        const email = req.body.email.trim().toLowerCase();
        var token = await bcrypt.hash(email, 5);
        token = token.replace(/\//g, '_').replace(/\+/g, '-');
        if (!user) {
            user = new MenteeModel({
                email: email,
                password: urlSafeHashedPassword,
                name: req.body.name.trim(),
                pnumber: req.body.pnumber.trim(),
                dob: req.body.dob.trim(),
                gender: req.body.gender.trim(),
                location: req.body.location.trim(),
                isgoogle: req.body.google,
                token: token,
            });
            const result = await user.save();
            user = await MenteeModel.findOne({ email: req.body.email });
            return res.json({ msg: "Mentee Registered Successfully!", isSuccess: true, userId: user.token, color: "green" });
        } else {
            return res.json({ msg: "user already exists!", isSuccess: false, color: "red" });
        }
    } catch (error) {
        return res.json({ msg: "Some Error Ocurred!", isSuccess: false, color: "red" });
        console.log(error);
    }
});

routes.post("/mentee-login", async (req, res) => {
    try {
        var user = await MenteeModel.findOne({ email: req.body.email.trim() });
        if (user) {
            const ismatch = await bcrypt.compare(req.body.password.trim(), user.password.replace(/_/g, '/').replace(/-/g, '+'))
            if (ismatch) {
                res.json({ msg: "Login Success!!", isSuccess: true, userId: user.token, color: "green" });
            } else {
                res.json({ msg: "Wrong Password!", isSuccess: false, color: "red" });
            }
        }
        else {
            res.json({ msg: "No User With That Mail!!", isSuccess: false, color: "red" });

        }
    } catch (error) {
        return res.json({ msg: "Some Error Ocurred!", isSuccess: false, color: "red" });
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
            return res.json({ msg: "Found User!", isSuccess: true, userId: user.token, color: "green" });
        } else {
            return res.json({ msg: "User not Saved!", isSuccess: false, color: "red" });
        }
    } catch (error) {
        return res.json({ msg: "Some Error Ocurred!", isSuccess: false, color: "red" });
        console.log(error);
    }
});


routes.post("/mentor-register", async (req, res) => {
    try {
        var user = await MentorModel.findOne({ email: req.body.email.trim().toLowerCase() });
        var password = req.body.password.trim();
        var isgoogle = req.body.isgoogle;
        const hasp = await bcrypt.hash(password, 12);
        var email = req.body.email.trim().toLowerCase()
        const urlSafeHashedPassword = hasp.replace(/\//g, '_').replace(/\+/g, '-');
        var token = await bcrypt.hash(email, 5);
        token = token.replace(/\//g, '_').replace(/\+/g, '-');
        if (!user) {
            user = new MentorModel({
                email: email,
                password: urlSafeHashedPassword,
                isgoogle: isgoogle,
                token: token,

            });
            const result = await user.save();
            user = await MentorModel.findOne({ email: email });
            return res.json({ msg: "Mentor Registered Successfully!", isSuccess: true, userId: user.token, color: "green" });
        } else {
            return res.json({ msg: "user already exists!", isSuccess: false, color: "red" });
        }
    } catch (error) {
        console.log(error);
        return res.json({ msg: "Some Error Ocurred!", isSuccess: false, color: "red" });
    }
});

routes.post("/mentor-login", async (req, res) => {
    try {
        var user = await MentorModel.findOne({ email: req.body.email.trim() });
        if (user) {
            const ismatch = await bcrypt.compare(req.body.password.trim(), user.password.replace(/_/g, '/').replace(/-/g, '+'))
            if (ismatch) {
                res.json({ msg: "Login Success!!", isSuccess: true, userId: user.token, color: "green" });
            } else {
                res.json({ msg: "Wrong Password!", isSuccess: false, color: "red" });
            }
        }
        else {
            res.json({ msg: "No User With That Mail!!", isSuccess: false, color: "red" });

        }
    } catch (error) {
        return res.json({ msg: "Some Error Ocurred!", isSuccess: false, color: "red" });
        console.log(error);
    }

});

routes.post("/mentor-updates", async (req, res) => {
    try {
        var user = await MentorModel.findOne({ token: req.body.token });
        if (!user) {
            return res.json({ msg: "Unknown User Id!", isSuccess: false, color: "red" });
        } else {
            const token = req.body.token;
            var details = await MentorDetailsModel.findOne({ token: token });
            const email = req.body.email.trim().toLowerCase();
            const name = req.body.name;
            const phone = req.body.phone;
            const organisationname = req.body.organisationname;
            const jobposiion = req.body.jobposiion;
            const totalyrsofexp = req.body.totalyrsofexp;
            const industryexpertise = req.body.industryexpertise;
            const areasofspecialisation = req.body.areasofspecialisation;
            const prefcommmethod = req.body.prefcommmethod;
            const availofmentorship = req.body.availofmentorship;
            const mentorshipareas = req.body.mentorshipareas;
            const highestqualification = req.body.highestqualification;
            const degreecertification = req.body.degreecertification;
            const uniinstitute = req.body.uniinstitute;
            const linkedinprofileurl = req.body.linkedinprofileurl;
            const briefintro = req.body.briefintro;
            const anyprvsmentoring = req.body.anyprvsmentoring;
            if (!details) {
                details = new MentorDetailsModel({
                    token: token,
                    email: email,
                    name: name,
                    phone: phone,
                    organisationname: organisationname,
                    jobposiion: jobposiion,
                    totalyrsofexp: totalyrsofexp,
                    industryexpertise: industryexpertise,
                    areasofspecialisation: areasofspecialisation,
                    prefcommmethod: prefcommmethod,
                    availofmentorship: availofmentorship,
                    mentorshipareas: mentorshipareas,
                    highestqualification: highestqualification,
                    degreecertification: degreecertification,
                    uniinstitute: uniinstitute,
                    briefintro: briefintro,
                    anyprvsmentoring: anyprvsmentoring,
                    linkedinprofileurl: linkedinprofileurl,
                });
                const result = await details.save();
                return res.json({ msg: "Details saved Successfully!", isSuccess: true, color: "green" });
            }
            else {
                details.email = email;
                details.name = name;
                details.phone = phone;
                details.organisationname = organisationname;
                details.jobposiion = jobposiion;
                details.totalyrsofexp = totalyrsofexp;
                details.industryexpertise = industryexpertise;
                details.areasofspecialisation = areasofspecialisation;
                details.prefcommmethod = prefcommmethod;
                details.availofmentorship = availofmentorship;
                details.mentorshipareas = mentorshipareas;
                details.highestqualification = highestqualification;
                details.degreecertification = degreecertification;
                details.uniinstitute = uniinstitute;
                details.briefintro = briefintro;
                details.anyprvsmentoring = anyprvsmentoring;
                details.linkedinprofileurl = linkedinprofileurl;
                const result = await details.save();
                return res.json({ msg: "Details updated Successfully!", isSuccess: true, color: "green" });
            }
        }
    } catch (error) {
        console.log(error);
        return res.json({ msg: "Some Error Ocurred!", isSuccess: false, color: "red" });
    }
});

routes.post("/mentee-updates", upload.single('file'), async (req, res) => {
    try {
        var user = await MenteeModel.findOne({ token: req.body.token });
        if (!user) {
            return res.json({ msg: "Unknown User Id!", isSuccess: false, color: "red" });
        } else {
            const type = req.body.type;
            if (type === "skilldev") {
                var details = await MenteeSkillDevModel.findOne({ token: req.body.token });
                var email = req.body.email.trim().toLowerCase();
                var recentQualification = req.body.recentQualification.trim();
                var collegeName = req.body.collegeName.trim();
                var areaOfStudy = req.body.areaOfStudy.trim();
                var degree = req.body.degree.trim();
                var yearOfStudy = req.body.yearOfStudy.trim();
                var startDate = req.body.startDate.trim();
                var preferredSlots = req.body.preferredSlots.trim();
                var prevExperiences = req.body.prevExperiences.trim();
                var interestedSkills = req.body.interestedSkills.trim();
                var specificNeeds = req.body.specificNeeds.trim();
                var file = req.file;
                if (!details) {
                    details = new MenteeSkillDevModel({
                        token: req.body.token,
                        email: email,
                        specificNeeds: specificNeeds,
                        interestedSkills: interestedSkills,
                        prevExperiences: prevExperiences,
                        preferredSlots: preferredSlots,
                        yearOfStudy: yearOfStudy,
                        startDate: startDate,
                        degree: degree,
                        areaOfStudy: areaOfStudy,
                        collegeName: collegeName,
                        recentQualification: recentQualification,
                        cvFile: file.path,
                    });
                    const result = await details.save();
                    return res.json({ msg: "Details saved Successfully!", isSuccess: true, color: "green" });
                }
                else {
                    details.email = email;
                    details.specificNeeds = specificNeeds;
                    details.interestedSkills = interestedSkills;
                    details.prevExperiences = prevExperiences;
                    details.preferredSlots = preferredSlots;
                    details.yearOfStudy = yearOfStudy;
                    details.startDate = startDate;
                    details.degree = degree;
                    details.areaOfStudy = areaOfStudy;
                    details.collegeName = collegeName;
                    details.recentQualification = recentQualification;
                    details.cvFile = file.path;
                    const result = await details.save();
                    return res.json({ msg: "Details updated Successfully!", isSuccess: true, color: "green" });
                }
            }
            else if (type === "internship") {
                var details = await MenteeInternshipModel.findOne({ token: req.body.token });
                const token = req.body.token;
                const email = req.body.email.trim().toLowerCase();
                const recentQualification = req.body.recentQualification.trim();
                const collegeName = req.body.collegeName.trim();
                const areaOfStudy = req.body.areaOfStudy.trim();
                const degree = req.body.degree.trim();
                const prefinternshipposition = req.body.prefinternshipposition.trim();
                const departmentorareaofinterest = req.body.departmentorareaofinterest.trim();
                const availabilitytostartinternship = req.body.availabilitytostartinternship.trim();
                const previnternshiporexperience = req.body.previnternshiporexperience.trim();
                const internshipduration = req.body.internshipduration.trim();
                const hopetogainorachieve = req.body.hopetogainorachieve.trim();
                const specificgoalsorareaoflearning = req.body.specificgoalsorareaoflearning.trim();
                const modeofinternship = req.body.modeofinternship.trim();
                const requireaccomodation = req.body.requireaccomodation.trim();
                const file = req.file;
                if (!details) {
                    details = new MenteeInternshipModel({
                        token: token,
                        email: email,
                        recentQualification: recentQualification,
                        collegeName: collegeName,
                        areaOfStudy: areaOfStudy,
                        degree: degree,
                        prefinternshipposition: prefinternshipposition,
                        departmentorareaofinterest: departmentorareaofinterest,
                        availabilitytostartinternship: availabilitytostartinternship,
                        previnternshiporexperience: previnternshiporexperience,
                        internshipduration: internshipduration,
                        hopetogainorachieve: hopetogainorachieve,
                        specificgoalsorareaoflearning: specificgoalsorareaoflearning,
                        modeofinternship: modeofinternship,
                        requireaccomodation: requireaccomodation,
                        cvFile: file.path,
                    });
                    const result = await details.save();
                    return res.json({ msg: "Details saved Successfully!", isSuccess: true, color: "green" });
                }
                else {
                    details.email = email;
                    details.recentQualification = recentQualification;
                    details.collegeName = collegeName;
                    details.areaOfStudy = areaOfStudy;
                    details.degree = degree;
                    details.prefinternshipposition = prefinternshipposition;
                    details.departmentorareaofinterest = departmentorareaofinterest;
                    details.availabilitytostartinternship = availabilitytostartinternship;
                    details.previnternshiporexperience = previnternshiporexperience;
                    details.internshipduration = internshipduration;
                    details.hopetogainorachieve = hopetogainorachieve;
                    details.specificgoalsorareaoflearning = specificgoalsorareaoflearning;
                    details.modeofinternship = modeofinternship;
                    details.requireaccomodation = requireaccomodation;
                    details.cvFile = file.path;

                    const result = await details.save();
                    return res.json({ msg: "Details updated Successfully!", isSuccess: true, color: "green" });
                }
            }
            else {
                const token = req.body.token;
                var details = await MenteeMentorshipModel.findOne({ token: req.body.token });
                const email = req.body.email.trim().toLowerCase();
                const recentQualification = req.body.recentQualification.trim();
                const collegeName = req.body.collegeName.trim();
                const areaOfStudy = req.body.areaOfStudy.trim();
                const degree = req.body.degree.trim();
                const yearOfStudy = req.body.yearOfStudy.trim();
                const startDate = req.body.startDate.trim();
                const prevmentandrelatedexp = req.body.prevmentandrelatedexp.trim();
                const anycoursesorcertification = req.body.anycoursesorcertification.trim();
                const spectopicorskills = req.body.spectopicorskills.trim();
                const areaofinterest = req.body.areaofinterest.trim();
                const hopetoachieve = req.body.hopetoachieve.trim();
                const expectationfrommentor = req.body.expectationfrommentor.trim();
                if (!details) {
                    details = new MenteeMentorshipModel({
                        token: token,
                        email: email,
                        recentQualification: recentQualification,
                        collegeName: collegeName,
                        areaOfStudy: areaOfStudy,
                        degree: degree,
                        yearOfStudy: yearOfStudy,
                        startDate: startDate,
                        prevmentandrelatedexp: prevmentandrelatedexp,
                        anycoursesorcertification: anycoursesorcertification,
                        spectopicorskills: spectopicorskills,
                        areaofinterest: areaofinterest,
                        hopetoachieve: hopetoachieve,
                        expectationfrommentor: expectationfrommentor,
                    });
                    const result = await details.save();
                    return res.json({ msg: "Details saved Successfully!", isSuccess: true, color: "green" });
                }
                else {
                    details.email = email;
                    details.recentQualification = recentQualification;
                    details.collegeName = collegeName;
                    details.areaOfStudy = areaOfStudy;
                    details.degree = degree;
                    details.yearOfStudy = yearOfStudy;
                    details.startDate = startDate;
                    details.prevmentandrelatedexp = prevmentandrelatedexp;
                    details.anycoursesorcertification = anycoursesorcertification;
                    details.spectopicorskills = spectopicorskills;
                    details.areaofinterest = areaofinterest;
                    details.hopetoachieve = hopetoachieve;
                    details.expectationfrommentor = expectationfrommentor;
                    const result = await details.save();
                    return res.json({ msg: "Details updated Successfully!", isSuccess: true, color: "green" });
                }
            }
        }
    } catch (error) {
        console.log(error);
        return res.json({ msg: "Some Error Ocurred!", isSuccess: false, color: "red" });
    }
});

routes.post('/forgot-pass', async (req, res) => {
    try {
        const email = req.body.email.trim().toLowerCase();
        const type = req.body.type;
        var link;
        if (type === 'mentee') {
            const user = await MenteeModel.findOne({ email: email });
            if (!user) {
                return res.json({ msg: "Unknown mail Id!", isSuccess: false, color: "red" })
            }
            else {
                const secret = process.env.JWT_SECRET + user.password;
                const token = jwt.sign({ email: user.email, token: user.token }, secret, { expiresIn: "120m" })
                link = `https://connectdot.vmplay.ml/ResetPassword/${type}/${user.token}/${token}`;
            }
        }
        else {
            const user = await MentorModel.findOne({ email: email });
            if (!user) {
                return res.json({ msg: "Unknown mail Id!", isSuccess: false, color: "red" })
            }
            else {
                const secret = process.env.JWT_SECRET + user.password;
                const token = jwt.sign({ email: user.email, token: user.token, type: type }, secret, { expiresIn: "120m" })
                link = `https://connectdot.vmplay.ml/ResetPassword/${type}/${user.token}/${token}`;
            }
        }
        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: email,
            subject: 'Email Verification',
            text: `Your verification link : ${link}\n\nOnly valid for 2 Hours.`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error(error);
                return res.json({ msg: "Error Ocurred", isSuccess: false, color: "red" });
            } else {
                return res.json({ msg: "Mail Sent", isSuccess: true, color: "green" });
            }
        });
    } catch (error) {
        console.log(error);
        return res.json({ msg: "Error Ocurred", isSuccess: false, color: "red" });
    }
});

routes.post('/reset-pass', async (req, res) => {
    try {
        const token = req.body.token;
        const link = req.body.link;
        const password = req.body.password;
        const type = req.body.type;

        if (type === 'mentee') {
            const user = await MenteeModel.findOne({ token: token });
            if (!user) {
                return res.json({ msg: "Unknown token Id!", isSuccess: false, color: "red" })
            }
            else {
                const secret = process.env.JWT_SECRET + user.password;
                try {
                    const verify = jwt.verify(link, secret);
                    const hasp = await bcrypt.hash(password, 12);
                    const urlSafeHashedPassword = hasp.replace(/\//g, '_').replace(/\+/g, '-');
                    user.password = urlSafeHashedPassword;
                    await user.save();
                    return res.json({ msg: "Password updated Successfully!", isSuccess: true, color: "green" });

                } catch (error) {
                    return res.json({ msg: "Not verified json!", isSuccess: false, color: "red" })
                }
            }
        }
        else {
            const user = await MentorModel.findOne({ token: token });
            if (!user) {
                return res.json({ msg: "Unknown token Id!", isSuccess: false, color: "red" })
            }
            else {
                const secret = process.env.JWT_SECRET + user.password;
                try {
                    const verify = jwt.verify(link, secret);
                    const hasp = await bcrypt.hash(password, 12);
                    const urlSafeHashedPassword = hasp.replace(/\//g, '_').replace(/\+/g, '-');
                    user.password = urlSafeHashedPassword;
                    await user.save();
                    return res.json({ msg: "Password updated Successfully!", isSuccess: true, color: "green" });
                } catch (error) {
                    return res.json({ msg: "Not verified json!", isSuccess: false, color: "red" })
                }
            }
        }
    } catch (error) {
        console.log(error);
        return res.json({ msg: "Error Ocurred", isSuccess: false, color: "red" });
    }
});


routes.post('/update-info', async (req, res) => {
    try {
        const token = req.body.token;
        const type = req.body.type;
        if (type === "mentee") {
            const user = await MenteeModel.findOne({ token: token });
            if (!user) {
                return res.json({ msg: "User not found", isSuccess: false, color: "red" });
            }
            else {
                user.dob = req.body.dob;
                user.pnumber = req.body.pnumber;
                user.gender = req.body.gender;
                user.location = req.body.location;
                user.name = req.body.name;
                await user.save();
                return res.json({ msg: "Info Updated!", isSuccess: true, color: "green" });
            }
        }
    } catch (error) {
        console.log(error);
        return res.json({ msg: "Some Error Occured", isSuccess: false, color: "red" });

    }
})

module.exports = routes;
