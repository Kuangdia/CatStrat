const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'james',
    password: 'labber',
    database: 'catdb',
    port: 5432,
})

pool.connect(() => {
    console.log('Connected to db');
})

module.exports = pool;