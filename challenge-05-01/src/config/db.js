/* Rocketseat: LaunchBase Bootcamp
   Challenge 05-01: Application Refactoring and Database Configuration */

const { Pool } = require("pg");

module.exports = new Pool({
    user: "ricardomiguez",
    passward: "password",
    host: "localhost",
    port: 5432,
    database: "my_teacher"
});
