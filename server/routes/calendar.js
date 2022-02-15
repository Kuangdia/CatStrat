const router = require("express").Router();

const calendar = (db) => {
  router.get("/", (req, res) => {
    // const userID = req.body.userID;
    const userID = req.query.userID;
    return db.query(`SELECT * FROM records WHERE user_id = $1;`, [userID])
    .then((data) => {
      res.send(data.rows);
    })
  });

  return router;
}

module.exports = calendar;