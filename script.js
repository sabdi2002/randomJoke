var displayJoke = document.getElementById('displayJokes');
var dadJokes = document.getElementById('Dad Jokes');
getJoke();
// ra();

async function getJoke() {
	var res = await fetch("https://api.icndb.com/jokes/random");
	var data = await res.json();
	
	displayJoke.innerHTML = data.value.joke;
}

dadJokes.addEventListener('click', getJoke);


var displayJokes = document.getElementById('random');
var dadJokess = document.getElementById('Random Jokes');
getJokes();


async function getJokes() {
	var res = await fetch("https://api.icndb.com/jokes/random");
	var data = await res.json();
	
	displayJokes.innerHTML = data.value.joke;
}

dadJokess.addEventListener('click', getJokes);







