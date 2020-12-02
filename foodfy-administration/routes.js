/* Rocketseat: LaunchBase Bootcamp
   Foodfy Administration Challenge */

const express = require("express");
const data = require("./data.json");
const admin = require("./controllers/admin");
const routes = express.Router();

routes.get("/", function(req, res) {
    return res.render("home", { recipes: data.recipes });
});

routes.get("/about", function(req, res) {
    return res.render("about");
});

routes.get("/recipes", function(req, res) {
    return res.render("recipes", { recipes: data.recipes });
});

routes.get("/recipes/:index", function (req, res) {
    const recipeIndex = req.params.index;

    return res.render("recipe-details", { recipeDetails: data.recipes[recipeIndex] });
});

/* Admin */

routes.get("/admin/recipes", admin.index);
routes.get("/admin/recipes/create", admin.create);
routes.get("/admin/recipes/:id", admin.show);
routes.get("/admin/recipes/:id/edit", admin.edit);

routes.post("/admin/recipes", admin.post);
routes.put("/admin/recipes", admin.put);
routes.delete("/admin/recipes", admin.delete);

module.exports = routes;
