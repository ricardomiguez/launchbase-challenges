/* Rocketseat: LaunchBase Bootcamp
   Challenge 03-01: First Server */

const express = require("express");
const server = express();
const port = 3000;

const nunjucks = require("nunjucks");

nunjucks.configure("views", {
    express: server
});

server.listen(port, function() {
    console.log("Server listening on Port", port);
});

server.use(express.static("public"));

server.set("view engine", "njk");

server.get("/", function(req, res) {
    return res.render("home");
});

server.get("/about", function(req, res) {
    return res.render("about");
});

server.get("/content", function(req, res) {
    return res.render("content");
});

server.use(function(req, res) {
    res.status(404).render("not-found");
});
