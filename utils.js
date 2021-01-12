
export function compareNumbers(guess, correctNumber) {
    if (guess === correctNumber) {
        return 0;
    } else if (guess > correctNumber) {
        return 1;
    } else if (guess < correctNumber) {
        return -1;
    }

}



//     if (booger1 === booger2) {
//         showResults.textContent = `You guessed it! Congrats!`;
//     } else if (booger1 > booger2) {
//         showResults.textContent = `Too High!`;
//     }
//     else if (booger1 < booger2) {
//         showResults.textContent = `Too Low!!`;

//     }
//     console.log(compareNumber(booger1, booger2));
// }



