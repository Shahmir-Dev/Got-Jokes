const jokes = require("../models/joke");
const { response } = require("express");
var giveMeAJoke = require('give-me-a-joke');
var path = require("path");

module.exports = function(app) {
    // app.get("/api/:g?", function(req, res) {
    //     console.log("clicked");
    // });
    app.get("/randomjoke", function(req, res) {
        console.log("requestedjoke");

        giveMeAJoke.getRandomDadJoke(function(joke) {
            console.log(joke);
            res.json(joke);
        });
    });


};