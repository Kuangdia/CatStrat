const router = require('express').Router();

const dashboard = (db) => {
  //  define our routes
  router.get('/', (req, res) => {
    console.log('req.query', req.query)
    // console.log('req.body', req.body)
    const userID = req.query.user_id;

    // const query = `SELECT DISTINCT records.* FROM records
    //   JOIN strategies ON records.strategy_id = strategies.id
    //   JOIN users_strategies ON strategies.id = users_strategies.strategy_id
    //   WHERE records.user_id = $1
    //   ORDER BY records.id`

    const query = `SELECT DISTINCT records.*, strategy_name FROM records
          JOIN strategies ON records.strategy_id = strategies.id
          WHERE user_id = $1
          ORDER BY records.day`

    return db
      .query(query, [userID])
      .then((result) => {
        // console.log("res post", result.rows)
        res.send(result.rows);
      })
      .catch((err) => {
        console.log(err);
      });
  })


  router.get('/top-stock', (req, res) => {
    console.log('req.query', req.query)
    // console.log('req.body', req.body)
    const userID = req.query.user_id;

    const query = `SELECT DISTINCT records.*, strategy_name FROM records
        JOIN strategies ON records.strategy_id = strategies.id
        WHERE user_id = $1
        ORDER BY records.day`

    return db
      .query(query, [userID])
      .then((result) => {
        // console.log("res post", result.rows)
        res.send(result.rows);
      })
      .catch((err) => {
        console.log(err);
      });
  })
  return router;


}

module.exports = dashboard;