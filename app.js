// 
import { compareNumbers } from './utils.js';


// import functions and grab DOM elements
const userGuess = document.getElementById('guess-input');
const magicButton = document.getElementById('magic-button');
const guessesLeft = document.getElementById('remaining-guesses');
const showResults = document.getElementById('feedback-window');
const youWin = document.getElementById('you-win');
const playAgainButton = document.getElementById('play-again-button');



// initialize state
let numberToGuess = Math.ceil(Math.random() * 20);
let guessesRemaining = 4;
console.log(numberToGuess);

// set event listeners to update state and DOM
magicButton.addEventListener('click', () => {
    guessesRemaining--;

    const userInput = Number(userGuess.value);

    let magicNumber = compareNumbers(userInput, numberToGuess);
    guessesLeft.textContent = `You have ${guessesRemaining} guesses remaining`;

    if (magicNumber === 1) {
        showResults.textContent = 'Bogus! Way Too High!'
    } else if (magicNumber === -1) {
        showResults.textContent = `Most Heinous! You Guessed Too Low!!`;

    } else {
        showResults.textContent = 'Most Triumphant! You Win, Dude';
        youWin.classList.remove('hidden');
        youWin.textContent = 'YOU DID IT, DUDE!';
        magicButton.disabled = true;
        guessesLeft.textContent = "";
    }


    if (guessesRemaining === 0) {
        showResults.textContent = `You have failed.`
        magicButton.disabled = true;
    }
});

playAgainButton.addEventListener('click', () => {
    guessesRemaining = 4;
    magicButton.disabled = false;
    numberToGuess = Math.ceil(Math.random() * 20);
    userGuess.value = "";
    showResults.textContent = "";
    youWin.textContent = "";
    guessesLeft.textContent = "";
    console.log(numberToGuess);
})