/* Rocketseat: LaunchBase Bootcamp
   Foodfy Data Persistence */

const Recipe = require("../../models/Recipe");

module.exports = {
    index(req, res) {
        Recipe.all(function(recipes) {
            return res.render("public/recipes/index", { recipes });
        });
    },
    search(req, res) {
        const { filter } = req.query;

        if (filter) {
            Recipe.findBy(filter, function(recipes) {
                return res.render("public/recipes/search", { filter, recipes });
            });
        }
    },
    show(req, res) {
        Recipe.find(req.params.id, function(recipe) {
            if (!recipe) {
                return res.send("Recipe not found"); // TODO: Replace with a message displayed through the frontend
            }

            return res.render("public/recipes/show", { recipe });
        });
    }
};
