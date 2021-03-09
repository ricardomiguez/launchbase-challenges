/* Rocketseat: LaunchBase Bootcamp
   Foodfy Data Persistence */

const { Pool } = require("pg");

module.exports = new Pool ({
    user: "rgodoyfonseca",
    password: "password",
    host: "localhost",
    port: 5432,
    database: "foodfy"
});
