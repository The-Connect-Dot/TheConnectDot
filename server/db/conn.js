
require("dotenv").config();
const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://omsrirao14:om140103@cluster0.rznsdeu.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true
})

const db = mongoose.connection;
db.on("error", (error) => {
    console.error(error);
});
db.once("open", () => {
    console.log("Db Connected");
});

module.exports = db;