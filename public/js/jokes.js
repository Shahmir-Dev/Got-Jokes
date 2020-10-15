$(document).ready(function () {
  const giveMeAJoke = require("give-me-a-joke");

  $("#g-rated").click(function () {
    // To get a random dad joke
    giveMeAJoke.getRandomDadJoke(function (joke) {
      console.log(joke);
    });
    console.log("clicked");
    $.get("/g", function (data) {
      console.log("clicked!!");
    });
  });

  $("#pg-rated").click(function () {
    console.log("clicked!!");
  });
  $("#pg13-rated").click(function () {
    console.log("clicked!!");
  });
  $("#r-rated").click(function () {
    console.log("clicked!!");
  });
});
