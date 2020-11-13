/* Rocketseat: LaunchBase Bootcamp
   Refactoring Foodfy Challenge */

const express = require("express");
const server = express();
const port = 3000;

const nunjucks = require("nunjucks");

const recipes = require("./data");

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.listen(port, function() {
    console.log("Server listening on Port", port);
})

server.use(express.static("public"));

server.set("view engine", "njk");

server.get("/", function(req, res) {
    return res.render("home", { recipes: recipes });
})

server.get("/about", function(req, res) {
    return res.render("about");
})

server.get("/recipes", function(req, res) {
    return res.render("recipes", { recipes: recipes });
})

server.get("/recipe/:index", function (req, res) {
    const recipeIndex = req.params.index;

    return res.render("recipe-details", { recipeDetails: recipes[recipeIndex] });
})
