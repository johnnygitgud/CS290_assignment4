//This script redirects user to the create account page. This is the fastest version compared to one in a previous committ.
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("signup-button").addEventListener("click", function() {
        window.location.href = "sign_up_page.html"; // Redirect to sign-up page
});
})



//This is the array for usernames and passwords. It contains a couple of test usernames and passswords
var siteUsersList = [
	{ // Object @ 0 index
		username: "turtlecode",
		password: "codechannel"
	},
	{ // Object @ 1 index
		username: "monkeycode",
		password: "codechannel"
	}
]


//Function to authenticate existing user
function login() {
	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;

	for (var i = 0; i < siteUsersList.length; i++) {
        // check is user input matches username and password of a current index of the objPeople array
		if (username === siteUsersList[i].username && password === siteUsersList[i].password) {
			console.log(username + " is logged in!!!");
			window.location.href = 'http://www.google.com';
			return;
		}
	}
	console.log("Incorrect username or password");
	alert("You entered the incorrect username or password.");
}
