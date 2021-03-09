/* Rocketseat: LaunchBase Bootcamp
   Foodfy Data Persistence */

const Recipe = require("../../models/Recipe");

module.exports = {
    index(req, res) {
        Recipe.all(function(recipes) {
            return res.render("admin/recipes/index", { recipes });
        });
    },
    create(req, res) {
        Recipe.chefOptions(function(chefs) {
            if (!chefs) {
                return res.send("There are no chefs"); // TODO: Replace with a message displayed through the frontend
            }

            return res.render("admin/recipes/create", { chefs });
        });
    },
    show(req, res) {
        Recipe.find(req.params.id, function(recipe) {
            if (!recipe) {
                return res.send("Recipe not found"); // TODO: Replace with a message displayed through the frontend
            }

            return res.render("admin/recipes/show", { recipe });
        });
    },
    edit(req, res) {
        Recipe.find(req.params.id, function(recipe) {
            if (!recipe) {
                return res.send("Recipe not found"); // TODO: Replace with a message displayed through the frontend
            }

            Recipe.chefOptions(function(chefs) {
                if (!chefs) {
                    return res.send("There are no chefs"); // TODO: Replace with a message displayed through the frontend
                }

                return res.render("admin/recipes/edit", { recipe, chefs });
            });
        });
    },
    post(req, res) {
        const keys = Object.keys(req.body);

        for(let key of keys) {
            if (req.body[key] == "") {
                return res.send("Please fill in all the required fields"); // TODO: Replace with a message displayed through the frontend
            }
        }

        Recipe.create(req.body, function(recipe) {
            return res.redirect(`/admin/recipes/${recipe.id}`);
        });
    },
    put(req, res) {
        const keys = Object.keys(req.body);

        for(let key of keys) {
            if (req.body[key] == "") {
                return res.send("Please fill in all the required fields"); // TODO: Replace with a message displayed through the frontend
            }
        }

        Recipe.update(req.body, function() {
            return res.redirect(`/admin/recipes/${req.body.id}`);
        });
    },
    delete(req, res) {
        Recipe.delete(req.body.id, function() {
            return res.redirect("/admin/recipes");
        })
    }
};
