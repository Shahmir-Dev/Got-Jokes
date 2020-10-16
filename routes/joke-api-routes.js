const db = require("../models");
const { response } = require("express");
var giveMeAJoke = require('give-me-a-joke');
var path = require("path");

module.exports = function (app) {
    // app.get("/api/:g?", function(req, res) {
    //     console.log("clicked");
    // });
    app.get("/randomjoke", function (req, res) {
        console.log("requestedjoke");

        giveMeAJoke.getRandomDadJoke(function (joke) {
            console.log(joke);
            res.json(joke);
        });
    });

    app.post("/api/Jokes", (req, res) => {
        console.log(req.body);
        db.Jokes.create(req.body)
            .then((newJoke) => {
                res.json({
                    error: false,
                    data: newJoke,
                    message: "Successfully created new thing.",
                });
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json({
                    error: true,
                    data: null,
                    message: "Unable to create new thing.",
                });
            });
    });


};