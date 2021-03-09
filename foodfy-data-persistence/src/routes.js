/* Rocketseat: LaunchBase Bootcamp
   Foodfy Data Persistence */

const express = require("express");

const routes = express.Router();

const adminChefs = require("./app/controllers/admin/chefsController");
const adminRecipes = require("./app/controllers/admin/recipesController");

const publicHome = require("./app/controllers/public/homeController");
const publicChefs = require("./app/controllers/public/chefsController");
const publicRecipes = require("./app/controllers/public/recipesController");

/* Admin */

/* Admin Chefs */

routes.get("/admin/chefs", adminChefs.index);
routes.get("/admin/chefs/create", adminChefs.create);
routes.get("/admin/chefs/:id", adminChefs.show);
routes.get("/admin/chefs/:id/edit", adminChefs.edit);

routes.post("/admin/chefs", adminChefs.post);
routes.put("/admin/chefs", adminChefs.put);
routes.delete("/admin/chefs", adminChefs.delete);

/* Admin Recipes */

routes.get("/admin/recipes", adminRecipes.index);
routes.get("/admin/recipes/create", adminRecipes.create);
routes.get("/admin/recipes/:id", adminRecipes.show);
routes.get("/admin/recipes/:id/edit", adminRecipes.edit);

routes.post("/admin/recipes", adminRecipes.post);
routes.put("/admin/recipes", adminRecipes.put);
routes.delete("/admin/recipes", adminRecipes.delete);

/* Public */

/* Public Home */

routes.get("/", publicHome.index);

routes.get("/about", function(req, res) {
    return res.render("public/about");
});

routes.get("/search", publicHome.search);

/* Public Chefs */

routes.get("/chefs", publicChefs.index);

/* Public Recipes */

routes.get("/recipes", publicRecipes.index);
routes.get("/recipes/search", publicRecipes.search);
routes.get("/recipes/:id", publicRecipes.show);

module.exports = routes;
