/* Rocketseat: LaunchBase Bootcamp
   Foodfy Data Persistence */

const Recipe = require("../../models/Recipe");

module.exports = {
    index(req, res) {
        Recipe.all(function(recipes) {
            return res.render("public/index", { recipes });
        });
    },
    search(req, res) {
        const { filter } = req.query;

        if (filter) {
            Recipe.findBy(filter, function(recipes) {
                return res.render("public/search", { filter, recipes });
            });
        }
    }
};
