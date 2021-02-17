/* Rocketseat: LaunchBase Bootcamp
   Foodfy Data Persistence */

const fs = require("fs");
const data = require("../data.json");

exports.index = function(req, res) {
    return res.render("admin/index", { recipes: data.recipes });
}

exports.create = function(req, res) {
    return res.render("admin/create");
}

exports.show = function(req, res) {
    const { id } = req.params;

    const foundRecipe = data.recipes.find(function(recipe) {
        return recipe.id == id;
    })

    if (!foundRecipe) {
        return res.send("Recipe not found");
    }

    const recipe = {
        ...foundRecipe
    };

    return res.render("admin/show", { recipe });
}

exports.edit = function(req, res) {
    const { id } = req.params;

    const foundRecipe = data.recipes.find(function(recipe) {
        return recipe.id == id;
    })

    if (!foundRecipe) {
        return res.send("Recipe not found");
    }

    const recipe = {
        ...foundRecipe
    };

    return res.render("admin/edit", { recipe });
}

exports.post = function(req, res) {
    let id = 1;

    const lastRecipe = data.recipes[data.recipes.length - 1];

    if (lastRecipe) {
        id = lastRecipe.id + 1;
    }

    data.recipes.push({
        id,
        ...req.body
    });

    fs.writeFile("data.json", JSON.stringify(data, null, 2).concat("\n"), function(error) {
        if (error) {
            return res.send("Error while writing the file");
        }

        return res.redirect("/admin/recipes");
    });
}

exports.put = function(req, res) {
    const { id } = req.body;

    let index = 0;

    const foundRecipe = data.recipes.find(function(recipe, foundIndex) {
        if (recipe.id == id) {
            index = foundIndex;

            return true;
        }
    });

    if (!foundRecipe) {
        return res.send("Recipe not found");
    }

    const recipe = {
        ...foundRecipe,
        ...req.body,
        id: Number(id)
    };

    data.recipes[index] = recipe;

    fs.writeFile("data.json", JSON.stringify(data, null, 2).concat("\n"), function(error) {
        if (error) {
            return res.send("Error while writing the file");
        }

        return res.redirect(`recipes/${id}`);
    });
}

exports.delete = function(req, res) {
    const { id } = req.body;

    const filteredRecipes = data.recipes.filter(function(recipe) {
        return recipe.id != id;
    });

    data.recipes = filteredRecipes;

    fs.writeFile("data.json", JSON.stringify(data, null, 2).concat("\n"), function(error) {
        if (error) {
            return res.send("Error while writing the file");
        }

        return res.redirect("/admin/recipes");
    });
}
