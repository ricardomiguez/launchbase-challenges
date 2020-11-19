/* Rocketseat: LaunchBase Bootcamp
   Challenge 04-03: Teacher Form and Registration Route */

const express = require("express");
const teachers = require("./teachers");
const routes = express.Router();

routes.get("/", function(req, res) {
    return res.redirect("/teachers");
});

routes.get("/teachers", function(req, res) {
    return res.render("teachers/index");
});

routes.get("/teachers/registration", function(req, res) {
    return res.render("teachers/registration");
});

routes.post("/teachers", teachers.post);

routes.get("/students", function(req, res) {
    return res.send("students");
});

module.exports = routes;
