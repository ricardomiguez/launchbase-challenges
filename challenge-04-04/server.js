/* Rocketseat: LaunchBase Bootcamp
   Challenge 04-04: Teacher's Presentation, Editing and Formatting */

const express = require("express");
const server = express();
const routes = require("./routes");
const port = 3000;

const nunjucks = require("nunjucks");

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
});

server.listen(port, function() {
    console.log("Server listening on Port", port);
});

server.use(express.urlencoded({ extended: true }));

server.use(express.static("public"));

server.use(routes);

server.set("view engine", "njk");
