/* Rocketseat: LaunchBase Bootcamp
   Foodfy Administration Challenge */

const express = require("express");
const server = express();
const routes = require("./routes");
const port = 3000;

const methodOverride = require("method-override");

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

server.use(methodOverride("_method"));

server.use(routes);

server.set("view engine", "njk");
