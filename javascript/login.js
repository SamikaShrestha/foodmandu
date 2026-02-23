// Login Alert
function validateLogin() {
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();

    if(email === "" && password === "") {
        alert("Please enter email and password!");
    }
    else if(email === "") {
        alert("Please enter your email!");
    }
    else if(password === "") {
        alert("Please enter your password!");
    }
    else {
        alert("Login Successful!");
    }
}