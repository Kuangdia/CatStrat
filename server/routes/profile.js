const router = require("express").Router();

const profile = (db) => {

  router.get("/:id", (req, res) => {
    const userID = req.query.id;
  
    return db.query(`SELECT users.*, (SELECT COUNT(follower_id) AS followers from followers WHERE user_id = $1), (SELECT COUNT(user_id) AS following from followers WHERE follower_id = $1), (SELECT sum(profit) AS profit from records WHERE user_id = $1) from users JOIN followers on users.id = followers.user_id JOIN records on users.id = records.user_id WHERE users.id = $1 GROUP BY users.id`, [userID])
    .then((data) => {
      res.send(data.rows);
    })
  })

  return router;

}

module.exports = profile;