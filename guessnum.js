const readline = require("readline");

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
let score = 100;

console.log("Guess the number (between 1 and 100):");

const askGuess = () => {
    rl.question("Enter your guess: ", (input) => {
        const userGuess = parseInt(input.trim(), 10);

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            console.log("Please enter a valid number between 1 and 100.");
        } else if (userGuess === randomNumber) {
            console.log(`Congratulations! You guessed the correct number ${randomNumber}.`);
            console.log(`Your score is: ${score}`);
            rl.close();
            return;
        } else if (userGuess > randomNumber) {
            console.log("Too high! Try again.");
            score--;
        } else if (userGuess < randomNumber) {
            console.log("Too low! Try again.");
            score--;
        }

        if (score <= 0) {
            console.log("You ran out of guesses! Game over.");
            console.log(`The correct number was: ${randomNumber}`);
            rl.close();
        } else {
            askGuess();
        }
    });
};

// Start the game
askGuess();
