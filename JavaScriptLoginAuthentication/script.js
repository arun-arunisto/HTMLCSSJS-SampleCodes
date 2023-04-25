// function for rules
function show(id) {
    if (document.getElementById(id).style.display == 'none') {
        document.getElementById(id).style.display = 'block';
    }
    else {
        document.getElementById(id).style.display = 'none';
    }
};


// function for login

function verify() {
    try {
        var uname = "arunisto"; //username
        var pword = "1234567890"; //password

        var user = document.getElementById("username").value;
        var pass = document.getElementById("password").value;
        if (user == '' || pass == '') {
            throw "Username/Password Empty!";
        }
        if (user == uname && pass == pword){
            alert("Login Successfully!");
        }
        else {
            throw "Username/Password is incorrect!";
        }
    }
    catch (error) {
        alert(error);
    }
};