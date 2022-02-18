const router = require("express").Router();

const strategy = (db) => {

  router.get("/:userID", (req, res) => {
    const userID = req.params.userID;
    // const userID = req.query.userID;
    //get token
    //decode token with secret, if token expired?
      //get userID --> obj.userID 
    return db.query(`
      SELECT strategies.* FROM users_strategies
      JOIN strategies ON strategies.id = strategy_id
      JOIN users ON user_id = users.id
      WHERE user_id = $1;`, [userID])
    .then((data) => {
      res.send(data.rows);
    })
  });

  return router;
}

module.exports = strategy;