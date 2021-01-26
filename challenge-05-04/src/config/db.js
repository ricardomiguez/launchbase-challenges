/* Rocketseat: LaunchBase Bootcamp
   Challenge 05-04: Database Results Pagination */

const { Pool } = require("pg");

module.exports = new Pool({
    user: "rgodoyfonseca",
    passward: "password",
    host: "localhost",
    port: 5432,
    database: "my_teacher"
});
