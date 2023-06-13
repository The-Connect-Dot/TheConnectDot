
require("dotenv").config();
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO, {
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
