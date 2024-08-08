    window.addEventListener("load", function() {
        let form = document.querySelector("form");
        form.addEventListener("submit", function(event) {
        let usernameInput = document.querySelector("input[name=username]");
        // alert the current value found in the username input
        alert("username: " + usernameInput.value);
        });
    });