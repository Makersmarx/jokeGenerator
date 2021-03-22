// * grab ids from html ;

const setupDiv = document.getElementById('setup');
const punchlineDiv = document.getElementById('punchline');
const punchlineBtn = document.getElementById('punchlineBtn');
const newJokeBtn = document.getElementById('newJokeBtn');

// * global joke punchline variable

let jokePunchline;

// * api

const jokes = 'https://official-joke-api.appspot.com/jokes/programming/random';

// * async function to get data from api using fetch

const getJoke = async () => {
  try {
    const response = await fetch(jokes);
    const data = await response.json();
    console.log(data);

    // * setup for joke
    setupDiv.innerHTML = data[0].setup;

    // * punchline for joke reassigned
    jokePunchline = data[0].punchline;

    // * Clear punchline div
    punchlineDiv.innerHTML = '';
    punchlineDiv.classList.remove('bubble');

    punchlineBtn.classList.toggle('hidden');
    newJokeBtn.classList.toggle('hidden');
  } catch (error) {
    console.log(error);
  }
};

// * event listener & function for punchline button

const getPunchline = () => {
  punchlineDiv.innerHTML = jokePunchline;
  punchlineDiv.classList.add('bubble');
  punchlineBtn.classList.toggle('hidden');
  newJokeBtn.classList.toggle('hidden');
};

punchlineBtn.addEventListener('click', getPunchline);

// * event listener for new joke button

newJokeBtn.addEventListener('click', getJoke);

getJoke();
