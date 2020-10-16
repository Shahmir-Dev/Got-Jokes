var path = require('path');
var giveMeAJoke = require('give-me-a-joke');
var db = require("../models");
// var passport = require('passport'),
//     LocalStrategy = require('passport-local').Strategy;
// // Routes

// =============================================================
module.exports = function (app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.

    app.get("/", function (req, res) {
        db.Jokes.findAll({ raw: true }).then((jokes) => {
            console.log(jokes);
            res.render("index", { Jokes: jokes })

        })
    });



};