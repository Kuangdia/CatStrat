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
  methods: ["GET", "POST", "DELETE", "PUT"],
  credentials: true
}));
app.use(morgan(ENVIRONMENT));

// allows api to parse json // both .json works but you need to use one
app.use(express.json());
// app.use(bodyParser.json())

// allow api to receive data from client app // can use either

app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());


// Require routes
const dashboardRoutes = require('./routes/dashboard');
const calendarRoutes = require("./routes/calendar");
const stockRoutes = require("./routes/stock");

// Routes
app.use('/dashboard', dashboardRoutes(db));
app.use("/calendar", calendarRoutes(db));
app.use("/stock", stockRoutes(db));


const secret = "secretString12345"

app.get('/', (req, res) => {
  res.json({ greetings: 'hello' });
})

app.post("/register", (req, res) => {
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
  const bracket = req.body.bracket;
  
  db.query(`INSERT INTO users (username, password, email, money_bracket) VALUES ($1, $2, $3, $4)`, [username, bcrypt.hashSync(password, 10), email, bracket])
  .then((result) => {
    const token = jwt.sign({userID: result.insertedId}, 'secretString');
    const loginData = {
      userID: result.insertedId,
      username,
      token
    }

    res.send(loginData);
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
            const token = jwt.sign({userID: result.rows[0].id}, secret);
            const loginData = {
              userID: result.rows[0].id,
              username,
              token
            }
            res.send(loginData);
          } else {
            res.send({message: "Wrong username/password"});
          }
        })
      } else {
        res.send({message: "User doesn't exist"});
      } 
    })
    .catch(err => console.log(err));
})



app.post("/strategies", (req, res) => {
  const userID = req.body.loginUserID
  // console.log("post", userID)

  return db
  .query(`SELECT strategies.*, users_strategies.* FROM strategies JOIN users_strategies ON strategy_id = strategies.id WHERE users_strategies.user_id = $1`, [userID])
  .then((result) => {
    // console.log("res post", result.rows)
    res.send(result.rows);
  })
  .catch((err) => {
    console.log(err);
  });
})

app.get("/strategies", (req, res) => {
  return db
  .query(`SELECT strategies.*, users_strategies.* FROM strategies JOIN users_strategies ON strategy_id = strategies.id WHERE users_strategies.user_id = 1`)
  .then((result) => {
    res.send(result.rows);
  })
  .catch((err) => {
    console.log(err);
  });
})

app.get("/profile/:id", (req, res) => {
  const userID = req.query.id;
  console.log("profileid query", userID)

  return db.query(`SELECT users.*, (SELECT COUNT(follower_id) AS followers from followers WHERE user_id = $1), (SELECT COUNT(user_id) AS following from followers WHERE follower_id = $1), (SELECT sum(profit) AS profit from records WHERE user_id = $1) from users JOIN followers on users.id = followers.user_id JOIN records on users.id = records.user_id WHERE users.id = $1 GROUP BY users.id`, [userID])
  .then((data) => {
    // console.log("profile", data.rows)
    res.send(data.rows);
  })
})

app.get("/username", (req, res) => {

  db
  .query(`SELECT id, username, avatar_url FROM users`)
  .then((result) => {
    console.log("res post", result.rows)
    res.send(result.rows)
  })
  .catch((err) => {
    console.log(err);
  });
})

app.post("/following", (req, res) => {
  const userID = req.body.userID
  const followID = req.body.id
  console.log("requery", req.query)
  console.log("follow values", userID, followID)

  db.query(`INSERT INTO followers (follower_id, user_id) VALUES ($1, $2)`, [userID, followID])
    .then((result) => {
      res.send({added: true})
    })
    .catch(err => console.log(err))
})

app.post("/unfollow", (req, res) => {
  const userID = req.body.userID
  const followID = req.body.id
  console.log("unfollow values", userID, followID)

  db.query(`delete from followers where follower_id = $1 AND user_id = $2`, [userID, followID])
    .then((result) => {
      res.send({added: false})
    })
    .catch(err => console.log(err))
})

// app.get('/api', function(req, res){
//   var token = req.query.token;
//   jwt.verify(token, secret, function(err, decoded){
//     if(!err){
//       db.query(`SELECT * from users where id = $1`, [decoded.userID])
//         .then((result) => res.json({...result.rows[0], userID: decoded.userID}))
//       // res.json(decoded);
//     } else {
//       res.send(err);
//     }
//   })
// })


// connect to PORT
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});