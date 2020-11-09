/* Rocketseat: LaunchBase Bootcamp
   Challenge 03-02: Nunjuck Files and Dynamic Data */

const express = require("express");
const server = express();
const port = 3000;

const nunjucks = require("nunjucks");

const cards = require("./data");

nunjucks.configure("views", {
    express: server
});

server.listen(port, function() {
    console.log("Server listening on Port", port);
});

server.use(express.static("public"));

server.set("view engine", "njk");

server.get("/", function(req, res) {
    return res.render("home");
});

server.get("/about", function(req, res) {
    const about = {
            company: {
            icon: "/images/rocketseat.svg",
            name: "Rocketseat",
            description: "More than an education platform focused on technology, we are a community where programmers grow together to the next level.",
            technologies: [
                "HTML",
                "CSS",
                "JavaScript"
            ],
            social_networks: [
                { name: "Facebook", url: "https://fb.com/rocketseat" },
                { name: "Instagram", url: "https://instagram.com/rocketseat_oficial" },
                { name: "YouTube", url: "https://youtube.com/rocketseat" }
            ]
        }
    }

    return res.render("about", { about });
});

server.get("/content", function(req, res) {
    return res.render("content", { cards: cards });
});

server.use(function(req, res) {
    res.status(404).render("not-found");
});
