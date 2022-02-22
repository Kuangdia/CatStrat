
   
const router = require("express").Router();

const like = (db) => {

  router.post("/", (req, res) => {
    const userID = req.body.userID;
    const targetUserID = req.body.id;
  
    db.query(`update users set likes = (select likes from users where id = $1)+ 1, coins = (select coins from users where id = $1) + 1 where id = $1`, [targetUserID])
      .then((result) => {
        res.send(result.rows);
        db.query(`UPDATE users SET coins = (SELECT coins FROM users WHERE id = $1) - 1 WHERE id = $1`, [userID])
          .then(db.query(`INSERT INTO transactions (user_id, target_user, description, amount) VALUES
          ($1, $2, $3, 1)`, [userID, targetUserID, `Like other's   profile`])
          )
      })
      .catch(err => console.log(err))
  })

  return router;
}

module.exports = like;