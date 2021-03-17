const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "adventure_works",
    password: "abc123pin",
    port: 5432
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};