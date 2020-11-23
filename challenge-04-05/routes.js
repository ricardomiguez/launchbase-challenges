/* Rocketseat: LaunchBase Bootcamp
   Challenge 04-05: Put and Delete */

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

routes.get("/teachers/:id", teachers.show);

routes.get("/teachers/:id/edit", teachers.edit);

routes.put("/teachers", teachers.update);

routes.delete("/teachers", teachers.delete);

routes.get("/students", function(req, res) {
    return res.send("students");
});

module.exports = routes;
