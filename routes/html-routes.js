var path = require("path");
const express = require("express");
const router = express.Router();

//Models
const db = require("../models");

//Routes
router.get("/", function(req, res) {
    db.Jokes.findAll().then((joke) => {
        console.log(joke)
        res.render("index", {joke: joke})
    }).catch((err) => {
        console.log(err);
        res.status(500);
        res.json({
          error: true,
        });
    })
});


module.exports = router;

// Routes
// =============================================================
// module.exports = function(app) {

//     // Each of the below routes just handles the HTML page that the user gets sent to.

//     // index route loads view.html
//     app.get("/", function(req, res) {
//         res.sendFile(path.join(__dirname, "../public/blog.html"));
//     });

//     app.get("/g", function(req, res) {
//         res.sendFile(path.join(__dirname, "../public/blog.html"));
//     });

//     app.get("/pg", function(req, res) {
//         res.sendFile(path.join(__dirname, "../public/blog.html"));
//     });

//     app.get("/pg13", function(req, res) {
//         res.sendFile(path.join(__dirname, "../public/blog.html"));
//     });



// };