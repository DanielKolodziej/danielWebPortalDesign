function myFunction() {
    var emailVal = document.getElementById("userN").value;
	var passVal = document.getElementById("password").value;
    // If the username is "testuser" and pass is "testpass"
    
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
