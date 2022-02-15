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
const morgan = require('morgan');

// Environment variables
const { ENVIRONMENT, DEV_URL } = process.env;

// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect((err) => {
  console.log('Connected to db');
  if (err) {
  return console.log('Error with db connection:', err)
  }
});

// Middleware
app.use(cors({
  origin: [DEV_URL],
  methods: ["GET", "POST", "DELETE"],
  credentials: true
}));
app.use(morgan(ENVIRONMENT));

// allows api to parse json // both .json works but you need to use one
app.use(express.json());
// app.use(bodyParser.json())

// allow api to receive data from client app // can use either
// app.use(express.urlencoded({extended: true}))
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());


// Require routes
const dashboardRoutes = require('./routes/dashboard');

// Routes
app.use('/dashboard', dashboardRoutes(db));

app.get('/', (req, res) => {
  res.json({ greetings: 'hello' });
})

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
    // console.log("LOGGED IN", result.rows)
    if (result.rows.length > 0) {
      bcrypt.compare(password, result.rows[0].password, (error, response) => {
      if (response) {
        const token = jwt.sign({ userID: result.rows[0].id }, 'secretString')
        const loginData = {
            userID: result.rows[0].id,
            username,
                token
            }
            res.send(loginData)
            } else {
            res.send({ message: "Wrong username/password" })
            }
        })
      } else {
        res.send({ message: "User doesn't exist" })
      }
    })
    .catch(err => console.log(err));
})


// app.get("/strategies", (req, res) => {
//   const userID = req.body.userID
//   console.log(userID)

//   return db
//   .query(`SELECT strategies.*, users_strategies.* FROM strategies JOIN users_strategies ON strategy_id = strategies.id WHERE users_strategies.user_id = $1`, [userID])
//   .then((result) => {
//   console.log("res", result.rows)
//   res.send(result.rows);
//   })
//   .catch((err) => {
//   console.log(err);
//   });
// })

// app.get("/dashboard", (req, res) => {
//   console.log('req.body', req.body)
//   const userID = req.body.user_id;
//   console.log("post", userID)

//   const query = `SELECT DISTINCT records.* FROM records
//     JOIN strategies ON records.strategy_id = strategies.id
//     JOIN users_strategies ON strategies.id = users_strategies.strategy_id
//     WHERE records.user_id = $1
//     ORDER BY records.id`

//   return db
//     .query(query, [userID])
//     .then((result) => {
//       console.log("res post", result.rows)
//       res.send(result.rows);
//     })
//     .catch((err) => {
//     console.log(err);
//     });
// })


// connect to PORT
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
