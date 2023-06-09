const express = require('express')
const app = express()
const Routes = require('./routes/Routes.js')
require("dotenv").config();
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client')));
app.use(express.json());
app.use('/', Routes)

const PORT = process.env.PORT || 5100;

const server = app.listen(PORT, () => {
    console.log('Server started on ', PORT);
})