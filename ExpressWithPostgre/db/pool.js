const { Pool } = require('pg');

module.exports = new Pool ({
    host: 'localhost',
    user: 'postgres',
    database: 'top_users',
    password: 'Valencia!01',
    port: 5432
});