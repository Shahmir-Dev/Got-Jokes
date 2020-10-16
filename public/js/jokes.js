$(document).ready(function() {
    const giveMeAJoke = require("give-me-a-joke");

    $("#g-rated").click(function() {
        // To get a random dad joke
        console.log("Clicked");
        giveMeAJoke.getRandomDadJoke(function(joke) {
            console.log(joke);
        });
        console.log("clicked");
        $.get("/g", function(data) {
            console.log("clicked!!");
        });
    });

    $("#delete").click(function() {
        console.log("clicked!!");
        giveMeAJoke.getRandomDadJoke(function(joke) {
            console.log(joke);
        });
    });
    $("#like").click(function() {
        giveMeAJoke.getRandomDadJoke(function(joke) {
            console.log(joke);
        });
        $.get("/g", function(data) {
            console.log("clicked!!");
        });
    });
    $("#newuser").click(function() {
        console.log("clicked!!");

    });

});