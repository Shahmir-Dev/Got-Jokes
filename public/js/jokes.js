$(document).ready(function() {

    var blogContainer = $("#blog-container");
    var jokeSection = $("#joke-section");

    $('#g-rated').click(function() {
        console.log('clicked');
        console.log('clicked');
        $.get("/g", function(data) {
            console.log('clicked!!');
        });

    });

    $('#pg-rated').click(function() {
        console.log('clicked!!');
    });
    $('#pg13-rated').click(function() {
        console.log('clicked!!');
    });
    $('#r-rated').click(function() {
        console.log('clicked!!');
    });

});