/* Rocketseat: LaunchBase Bootcamp
   Challenge 03-03: Course Description Page */

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
    };

    return res.render("about", { about });
});

server.get("/content", function(req, res) {
    return res.render("content", { cards: cards });
});

server.get("/content/:id", function(req, res) {
    const id = req.params.id;

    const card = cards.find(function(card) {
        return card.id == id;
    });

    if (!card) {
        return res.send("Card not found");
    }

    return res.render("description", { card });
});

server.use(function(req, res) {
    res.status(404).render("not-found");
});
