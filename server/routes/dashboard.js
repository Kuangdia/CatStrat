const router = require('express').Router();

const dashboard = (db) => {
//  define our routes
    router.get('/', async (req, res) => {
        try {
            const data = await db.query('SELECT * FROM strategies')
            console.log('db query')
            console.log(data.rows)
            return res.json(data.rows)
        } catch(err) {
            console.log(err)
        }
    })
    return router;
}

module.exports = dashboard;