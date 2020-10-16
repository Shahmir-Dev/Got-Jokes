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
        $("#delete").click(function () {
            console.log("click");
            $.ajax({
                method: "GET",
                url: "/randomjoke"
            }).then(function (data) {
                console.log(data);
                const jokeSection = $("#joke-section");
                jokeSection.empty();
                jokeSection.append($(`<h2>${data}</h2>`));

            });
        });
        $("#thumbup").click(function () {
            console.log("click");
        });
        $("#thumbdown").click(function () {
            console.log("click");
        });
        $("#userfav").click(function () {
            console.log("click");
        });
        $("#userdelete").click(function () {
            console.log("click");
        });
        $("#userfav1").click(function () {
            console.log("click");
        });
        $("#userdelete1").click(function () {
            console.log("click");
        });
        $("#userfav2").click(function () {
            console.log("click");
        });
        $("#userdelete2").click(function () {
            console.log("click");
        });
        $("#userfav3").click(function () {
            console.log("click");
        });
        $("#userdelete4").click(function () {
            console.log("click");
        });

    });

});