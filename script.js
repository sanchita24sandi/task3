// Theme toggle functionality
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
});

// Load saved theme from localStorage
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

// Joke fetching functionality
document.getElementById("getJokeBtn").addEventListener("click", () => {
  fetchJoke();
});

function fetchJoke() {
  const jokeText = document.getElementById("jokeText");
  jokeText.classList.add("loading");
  jokeText.textContent = "Loading joke...";

  fetch("https://official-joke-api.appspot.com/random_joke")
    .then((response) => {
      if (!response.ok) throw new Error("Network error");
      return response.json();
    })
    .then((data) => {
      jokeText.classList.remove("loading");
      jokeText.innerHTML = `<span class="setup">${data.setup}</span><span class="punchline">${data.punchline}</span>`;
    })
    .catch((error) => {
      jokeText.classList.remove("loading");
      jokeText.classList.add("error");
      jokeText.innerHTML = `Oops, something went wrong! <button onclick="fetchJoke()">Try Again</button>`;
      console.error("Error:", error);
    });
}