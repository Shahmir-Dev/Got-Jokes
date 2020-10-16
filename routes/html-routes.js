var path = require('path');
var giveMeAJoke = require('give-me-a-joke');
var jokes = require("../models/joke");
var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;
// // Routes

// =============================================================
module.exports = function(app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.

    // index route loads view.html
    app.get("/", function(req, res) {
        // db.Jokes.findAll().then((jokes) => {
        res.render("index");
        // });
    });



};