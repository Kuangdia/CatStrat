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
const secret = "secretString12345"

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
const { renderSync } = require("sass");
const loginRoutes = require("./routes/login");
const registerRoutes = require("./routes/register");
const strategiesRoutes = require("./routes/strategies");
const profileRoutes = require("./routes/profile");
const usernameRoutes = require("./routes/username");
const followingRoutes = require("./routes/following");
const unfollowRoutes = require("./routes/unfollow");
const likeRoutes = require("./routes/like");
const dislikeRoutes = require("./routes/dislike");

// Routes
app.use('/dashboard', dashboardRoutes(db));
app.use("/calendar", calendarRoutes(db));
app.use("/stock", stockRoutes(db));
app.use("/login", loginRoutes(db))
app.use("/register", registerRoutes(db))
app.use("/strategies", strategiesRoutes(db))
app.use("/profile", profileRoutes(db))
app.use("/username", usernameRoutes(db))
app.use("/following", followingRoutes(db))
app.use("/unfollow", unfollowRoutes(db))
app.use("/like", likeRoutes(db))
app.use("/dislike", dislikeRoutes(db))


// Test Routes DO NOT DELETE
app.post("/strategy/:id", (req, res) => {
  const id = req.body.id
  const strategy_id = req.params.id
  console.log("strat", strategy_id)

  db.query(`update strategies set upvotes = (select upvotes from strategies where id = $1)+ 1`, [strategy_id])
    .then((result) => {
      console.log("success!")
      res.send(result.rows)
    })
    .catch(err => console.log(err))
})

// How to authenticate JWT TOKEN - Don't DELETE //
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