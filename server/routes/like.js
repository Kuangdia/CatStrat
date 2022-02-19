const router = require("express").Router();

const like = (db) => {

  router.post("/", (req, res) => {
    const id = req.body.id
  
    db.query(`update users set likes = (select likes from users where id = $1)+ 1 where id = $1`, [id])
      .then((result) => {
        res.send(result.rows)
      })
      .catch(err => console.log(err))
  })

  return router;
}

module.exports = like;