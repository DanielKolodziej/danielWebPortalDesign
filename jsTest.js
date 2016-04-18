function myFunction() {
    var emailVal = document.getElementById("userN").value;
	var passVal = document.getElementById("password").value;
	var warning = document.createElement('div');
	var text = document.createTextNode('Invalid Username or Password. Try again');
	var child = document.getElementById('userN');
    // If the username is "testuser" and pass is "testpass"
    if (emailVal === "testuser" && passVal === "testpass") {
        document.getElementById("userN").style.background="#00FF00";
		document.getElementById("password").style.background="#00FF00";
    // If the username is "testuser" and pass is wrong
    } 
	else if(emailVal === "testuser" && passVal !== "testpass")
	{
		document.getElementById("userN").style.background="#00FF00";
		document.getElementById("password").style.background="#ff3333";
	}
	else {
        document.getElementById("userN").style.background="#ff3333";
		document.getElementById("password").style.background="#ff3333";
		child.parentNode.insertBefore(text, child);
		document.body.appendChild(warning);
    }
}

var alertButton = document.getElementById('log');
var textInput = document.getElementById('userN');
var passInput = document.getElementById('password');
alertButton.addEventListener('click', function(){
	if (textInput.value === "testuser" && passInput.value === "testpass")
	{
		alert("You have successfully logged in, " + textInput.value + "!");
	}
	else if(textInput.value === "testuser" && passInput.value !== "testpass")
	{
		alert("Error: password does not match");
	}
	else{
		alert("Error: credentials not found");
	}
});

