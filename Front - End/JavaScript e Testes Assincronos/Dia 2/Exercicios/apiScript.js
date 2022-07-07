// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';
const joker = document.getElementById('jokeContainer');

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => joker.innerText = data.joke);
};

window.onload = () => fetchJoke();