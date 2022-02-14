// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8080;
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const session = require('express-session');
const jwt = require('jsonwebtoken')

// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

// allows api to parse json // both .json works but you need to use one
app.use(express.json());
// app.use(bodyParser.json())

// allow api to receive data from client app // can use either
// app.use(express.urlencoded({extended: true}))
app.use(bodyParser.urlencoded({ extended: true }));

// must add this if you use cookies/session
app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST", "DELETE"],
  credentials: true
}));

//routes

// register
app.post("/register", (req, res) => {
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
  const bracket = req.body.bracket;
  

  db.query(`INSERT INTO users (username, password, email, money_bracket) VALUES ($1, $2, $3, $4)`, [username, bcrypt.hashSync(password, 10), email, bracket])
  .then((response) => {
    console.log("res", response);
  })
  .catch((err) => {
    console.log(err);
  });
})

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  return db
    .query(`SELECT * FROM users WHERE username = $1`, [username])
    .then((result) => {
      console.log("LOGGED IN", result.rows)
      if (result.rows.length > 0) {
        bcrypt.compare(password, result.rows[0].password, (error, response) => {
          if (response) {
            const token = jwt.sign({userID: result.rows[0].id}, 'secretString')
            const loginData = {
              userID: result.rows[0].id,
              username,
              token
            }
            res.send(loginData)
          } else {
            res.send({message: "Wrong username/password"})
          }
        })
      } else {
        res.send({message: "User doesn't exist"})
      } 
    })
    .catch(err => console.log(err));
})



// connect to PORT
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});