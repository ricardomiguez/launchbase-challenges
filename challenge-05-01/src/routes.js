/* Rocketseat: LaunchBase Bootcamp
   Challenge 05-01: Application Refactoring and Database Configuration */

const express = require("express");
const teachers = require("./app/controllers/teachers");
const students = require("./app/controllers/students");
const routes = express.Router();

routes.get("/", function(req, res) {
    return res.redirect("/teachers");
});

routes.get("/teachers", teachers.list);
routes.get("/teachers/registration", teachers.registration);
routes.post("/teachers", teachers.post);
routes.get("/teachers/:id", teachers.show);
routes.get("/teachers/:id/edit", teachers.edit);
routes.put("/teachers", teachers.put);
routes.delete("/teachers", teachers.delete);

routes.get("/students", students.list);
routes.get("/students/registration", students.registration);
routes.post("/students", students.post);
routes.get("/students/:id", students.show);
routes.get("/students/:id/edit", students.edit);
routes.put("/students", students.put);
routes.delete("/students", students.delete);

module.exports = routes;
