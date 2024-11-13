const jokeButton = document.getElementById("jokeButton");
const output = document.getElementById("output");
const jokeAPI = "https://api.chucknorris.io/jokes/random";

jokeButton.addEventListener("click", getJoke);

async function getJoke() {
    console.log("Button clicked! Fetching a joke...");
    try {
        const response = await fetch(jokeAPI);
        if (!response.ok) throw new Error("Network response was not ok.");
        
        const joke = await response.json();
        console.log(joke.value);
        
        displayRes(joke.value);
    } catch (error) {
        console.error("Error fetching joke:", error);
        alert("Failed to fetch a joke. Please try again later.");
    }
}

function displayRes(text) {
    output.textContent = text;
}

getJoke();
