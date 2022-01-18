function Alert() {
    var a = document.getElementById("Username").value;
    var b = document.getElementById("e-mail").value;
    var c = document.getElementById("password").value;
    var d = document.getElementById("number").value;
    var e = document.getElementById("area").value;

    if (a == "") {
        alert("Please enter your username. ");
        return false;
    }

    if (b == "") {
        alert("Please enter your E-mail.");
        return false;
    }

    if (c == "") {
        alert("Please enter your Bank Detail. ");
        return false;
    }
    if (d == "") {
        alert("Please enter your Phone No.");
        return false;
    }

    if (e == "") {
        alert("Please enter your Address. ");
        return false;
    }

    alert(
        "Your data is valid! All your data will get transferred to our server. Thanks For Shopping😁"
    );
    return True;
}