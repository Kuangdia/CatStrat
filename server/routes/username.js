const router = require("express").Router();

const username = (db) => {
  router.get("/", (req, res) => {

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

  return router;
}

module.exports = username;