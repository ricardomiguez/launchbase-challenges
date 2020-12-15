/* Rocketseat: LaunchBase Bootcamp
   Challenge 05-03: Database Relationships and Filters */

const { Pool } = require("pg");

module.exports = new Pool({
    user: "rgodoyfonseca",
    passward: "password",
    host: "localhost",
    port: 5432,
    database: "my_teacher"
});
