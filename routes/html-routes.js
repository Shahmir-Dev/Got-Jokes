var path = require('path');
var giveMeAJoke = require('give-me-a-joke');
var jokes = require("../models/joke");
var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;
// Routes

// =============================================================
module.exports = function(app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.
    var jokes = require("../models/joke");
    // index route loads view.html
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/blog.html"));
    });

    app.post("/", function(req, res) {
        db.Jokes.create(req.body).then(function(dbjoke) {
            res.json(dbjoke);
        });
        res.sendFile(path.join(__dirname, "../public/blog.html"));
    });

    // app.get("/g", function(req, res) {
    //     var 
    //     randomjoke.all(function(data) {
    //         var hbsObject = {
    //             jokes: data
    //         };
    //         console.log(hbsObject);
    //         res.render('g', hbsObject);
    //     });
    // });

    app.get("/pg", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/blog.html"));
    });

    app.get("/pg13", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/blog.html"));
    });



};