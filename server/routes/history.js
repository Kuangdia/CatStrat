const router = require("express").Router();

const history = (db) => {

  router.get("/", (req, res) => {
    const userID = req.query.userID
  
    db.query(`SELECT * FROM transactions WHERE user_id = $1 ORDER BY id desc;`, [userID])
      .then((result) => {
        res.send(result.rows);
      })
      .catch(err => console.log(err.message));
  })

  return router;
}

module.exports = history;