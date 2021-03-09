/* Rocketseat: LaunchBase Bootcamp
   Foodfy Data Persistence */

const Chef = require("../../models/Chef");

module.exports = {
    index(req, res) {
        Chef.all(function(chefs) {
            return res.render("admin/chefs/index", { chefs });
        });
    },
    create(req, res) {
        return res.render("admin/chefs/create");
    },
    show(req, res) {
        Chef.find(req.params.id, function(chef) {
            if (!chef) {
                return res.send("Chef not found"); // TODO: Replace with a message displayed through the frontend
            }

            Chef.chefRecipes(req.params.id, function(chefRecipes) {
                return res.render("admin/chefs/show", { chef, chefRecipes });
            });
        });
    },
    edit(req, res) {
        Chef.find(req.params.id, function(chef) {
            if (!chef) {
                return res.send("Chef not found"); // TODO: Replace with a message displayed through the frontend
            }

            return res.render("admin/chefs/edit", { chef });
        });
    },
    post(req, res) {
        const keys = Object.keys(req.body);

        for(let key of keys) {
            if (req.body[key] == "") {
                return res.send("Please fill in all the required fields"); // TODO: Replace with a message displayed through the frontend
            }
        }

        Chef.create(req.body, function(chef) {
            return res.redirect(`/admin/chefs/${chef.id}`);
        });
    },
    put(req, res) {
        const keys = Object.keys(req.body);

        for(let key of keys) {
            if (req.body[key] == "") {
                return res.send("Please fill in all the required fields"); // TODO: Replace with a message displayed through the frontend
            }
        }

        Chef.update(req.body, function() {
            return res.redirect(`/admin/chefs/${req.body.id}`);
        });
    },
    delete(req, res) {
        Chef.chefRecipes(req.body.id, function(chefRecipes) {
            if (chefRecipes.length > 0) {
                return res.send("This chef cannot be deleted because he has recipes attached to him"); // TODO: Replace with a message displayed through the frontend
            }

            Chef.delete(req.body.id, function() {
                return res.redirect("/admin/chefs");
            });
        });
    }
};
