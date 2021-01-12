// 
import { compareNumbers } from './utils.js';


// import functions and grab DOM elements
const userGuess = document.getElementById('guess-input');
const magicButton = document.getElementById('magic-button');
const guessesLeft = document.getElementById('remaining-guesses');
const showResults = document.getElementById('feedback-window');


// initialize state
let numberToGuess = Math.ceil(Math.random() * 20);
let guessesRemaining = 4;

console.log(numberToGuess, guessesRemaining);
// set event listeners to update state and DOM
magicButton.addEventListener('click', () => {
    guessesRemaining--;

    const userInput = Number(userGuess.value);




    guessesLeft.textContent = `You have ${guessesRemaining} guesses remaining`;

    if (guessesRemaining === 0) {
        showResults.textContent = `You have failed.`
        magicButton.disabled = true;
    }



});