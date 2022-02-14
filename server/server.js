// declarations
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors');
// const db = require('./db/index')

// environment variables
const {PORT, ENVIRONMENT, DEV_URL} = process.env;

// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect((err) => {
    console.log('Connected to db');
    if (err) {
        return console.log('Error with connect' , err)
    }
})

// middleware
const app = express();
app.use(cors({ origin: [DEV_URL]}));
app.use(morgan(ENVIRONMENT));
app.use(bodyParser.json());

// require routes
const dashboardRoutes = require('./routes/dashboard');

//routes
app.use('/dashboard', dashboardRoutes(db));


app.get('/', (req,res) => {
    res.json({greetings: 'hello'});
})

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));