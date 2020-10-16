$(document).ready(function () {

    var blogContainer = $("#blog-container");
    const jokeSection = $("#joke-section");



    $('#g-rated').click(function () {
        console.log('clicked');
        $.ajax({
            method: "GET",
            url: "/randomjoke"
        }).then(function (data) {
            console.log(data);
            jokeSection.empty();
            jokeSection.append($(`<h2>${data}</h2>`));

        });
    });
    $("#newuser").click(function () {
        console.log("you clicked me");
        const joke = $("#submit-joke").val();
        const username = $("#username").val();
        $.ajax({
            url: `/api/Jokes`,
            method: "POST",
            data: {
                joke: joke,
                username: username,
            }

        }).then(function () {
            window.location.reload();
        });

        $("#login").click(function () {
            console.log("click");
            var attempt = 3;

        });
        $("#like").click(function () {
            console.log("click");
            var data = $("#like").serialize();
            $.ajax({
                data: data,
                type: "post",
                url: data,
                success: function (data) {
                    console.log("Data Save: " + data);
                }
            }).then(function (data) {
                console.log(data);
                jokeSection.empty();
                jokeSection.append($(`<h2>${data}</h2>`));
            });

        });
        $("#userdelete").on("click", function () {
            const idToDelete = $(this).data("id");
            console.log("click bitch");
            $.ajax({
                url: `/api/Jokes/${idToDelete}`,
                type: "DELETE"
            }).then(function () {
                location.reload();
            });
        });
    });

});