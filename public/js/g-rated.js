$(document).ready(function() {

    var blogContainer = $("#blog-container");
    const jokeSection = $("#joke-section");



    $('#g-rated').click(function() {
        console.log('clicked');
        // $.get("/g", function(data) {
        //     console.log('clicked!!');

        // });
        $.ajax({
            method: "GET",
            url: "/randomjoke"
        }).then(function(data) {
            console.log(data);
            jokeSection.empty();
            jokeSection.append($(`<h2>${data}</h2>`));

        });
    });
    $("#newuser").click(function() {
        var newuser = newuser;
        fetch('/', {
            method: 'POST',
            body: new FormData(newuser),
            credentials: 'include',
            url: "passport"
        });

        var newuser = document.querySelector('#newuser');
        var creds = new PasswordCredential(newuser);
        // Store the credentials.
        navigator.credentials.store(creds)
            .then(function(creds) {
                // Do something with the credentials if you need to.
                jokeSection.append($(`<h4>${newuser}</h4>`));
            });
    });

    $("#login").click(function() {
        console.log("click");
        var attempt = 3; // Variable to count number of attempts.
        // Below function Executes on click of login button.
        function validate() {
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;
            if (username == "123" && password == "") {
                alert("Login successfully");
                window.location = "success.html"; // Redirecting to other page.
                return false;
            } else {
                attempt--; // Decrementing by one.
                alert("You have left " + attempt + " attempt;");
                // Disabling fields after 3 attempts.
                if (attempt == 0) {
                    document.getElementById("username").disabled = true;
                    document.getElementById("password").disabled = true;
                    document.getElementById("submit").disabled = true;
                    return false;
                }
            }
        }

    });
    $("#like").click(function() {
        console.log("click");
        var data = $("#like").serialize();
        $.ajax({
            data: data,
            type: "post",
            url: data,
            success: function(data) {
                console.log("Data Save: " + data);
            }
        }).then(function(data) {
            console.log(data);
            jokeSection.empty();
            jokeSection.append($(`<h2>${data}</h2>`));

        });
    });
    $("#delete").click(function() {
        console.log("click");
        $.ajax({
            method: "GET",
            url: "/randomjoke"
        }).then(function(data) {
            console.log(data);
            const jokeSection = $("#joke-section");
            jokeSection.empty();
            jokeSection.append($(`<h2>${data}</h2>`));

        });
    });
    $("#thumbup").click(function() {
        console.log("click");
    });
    $("#thumbdown").click(function() {
        console.log("click");
    });
    $("#userfav").click(function() {
        console.log("click");
    });
    $("#userdelete").click(function() {
        console.log("click");
    });
    $("#userfav1").click(function() {
        console.log("click");
    });
    $("#userdelete1").click(function() {
        console.log("click");
    });
    $("#userfav2").click(function() {
        console.log("click");
    });
    $("#userdelete2").click(function() {
        console.log("click");
    });
    $("#userfav3").click(function() {
        console.log("click");
    });
    $("#userdelete4").click(function() {
        console.log("click");
    });

});