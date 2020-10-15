const jokes = require("../models/joke");
const { response } = require("express");

module.exports = function(app) {
    app.get("/api/:g?", function(req, res) {
        console.log("clicked");
    });

};