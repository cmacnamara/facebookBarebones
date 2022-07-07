var database = [
	{
		username: "cmac",
		password: "pw"
	},
	{
		username: "Joe",
		password: "123"
	},
	{
		username: "snailGuy",
		password: "slime"
	}
];

var newsFeed = [
	{
		username: "Joe",
		timeline: "Cool stuff",
	},
	{
		username: "Katie",
		timeline: "More interesting stuff",
	},
	{
		username: "Charlie",
		timeline: "Even cooler links!",
	}
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function isUserValid(username, password){
	for(var i = 0; i < database.length; i++){
		if(database[i].username === username &&
			database[i].password === password){
			return true;
		}
	}
	return false;
}

function signIn(username, password){
	if(isUserValid(username, password)){
		console.log(newsFeed);
	}
	else{
		alert("Sorry, wrong username and password!");
	}
};

signIn(userNamePrompt, passwordPrompt);
