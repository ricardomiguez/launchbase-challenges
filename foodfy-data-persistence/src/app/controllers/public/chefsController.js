/* Rocketseat: LaunchBase Bootcamp
   Foodfy Data Persistence */

const Chef = require("../../models/Chef");

module.exports = {
    index(req, res) {
        Chef.all(function(chefs) {
            return res.render("public/chefs/index", { chefs });
        });
    }
};
