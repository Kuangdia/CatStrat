const router = require("express").Router();

const strategies = (db) => {
  router.get("/", (req, res) => {

    return db
    .query(`SELECT * FROM strategies`)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log(err);
    });
  })

  return router;
}

module.exports = strategies;