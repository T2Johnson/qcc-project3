const input = document.querySelector('#guess'); // Input field for guesses
const btnCheck = document.querySelector('#check'); // Check button
const btnReset = document.querySelector('#reset'); // Reset button
const secretNumberEl = document.querySelector('#secret'); // Secret number element
const scoreEl = document.querySelector('#score'); // Current score element
const highScoreEl = document.querySelector('#high-score'); // High score element
const messageEl = document.querySelector('#message'); // Message element

// Set the correct secret numbers
const correctNumbers = [10];
let secretNumber = correctNumbers[Math.floor(Math.random() * correctNumbers.length)]; // Randomly select 8 or 10
let score = 10;
let highScore = 0;

// Convert user input to a number
btnCheck.addEventListener('click', function () {
    const userGuess = Number(input.value); 

// Handle invalid input
    if (!userGuess || userGuess < 1 || userGuess > 100) {
        document.querySelector('#message').textContent = '⛔ Please enter a valid number between 1 and 100.';
        document.querySelector('#message').style.color = 'orange';
        return;
    }

// Check if the guess is correct
    if (userGuess === secretNumber) {
        document.querySelector('#message').textContent = '🎉 Correct Number! You win!';
        document.querySelector('#message').style.color = 'green';

        document.querySelector('#secret').textContent = secretNumber;
        document.querySelector('#secret').style.visibility = 'visible';
        document.querySelector('#secret').style.backgroundColor = 'green';
        document.querySelector('#secret').style.color = 'white';

        document.body.style.backgroundColor = '#d4edda';

// Update high score
        if (score > highScore) {
            highScore = score;
            document.querySelector('#high-score').textContent = highScore;
        }

        btnCheck.disabled = true; // Disable the check button
    } else {
// Handle incorrect guess
        if (score > 1) {
            document.querySelector('#message').textContent =
                userGuess > secretNumber ? 'Too high! Try again.' : 'Too low! Try again.';
            document.querySelector('#message').style.color = 'red';

            score--;
            document.querySelector('#score').textContent = score;
        } else {
// Handle game over
            document.querySelector('#message').textContent = `💔 Game Over! The correct number was ${secretNumber}.`;
            document.querySelector('#message').style.color = 'red';

            document.querySelector('#secret').textContent = secretNumber;
            document.querySelector('#secret').style.visibility = 'visible';

            document.body.style.backgroundColor = '#f8d7da';
            btnCheck.disabled = true; // Disable the check button
        }
    }
});

btnReset.addEventListener('click', function () {
    score = 10;
    secretNumber = correctNumbers[Math.floor(Math.random() * correctNumbers.length)]; 

    input.value = '';
    document.querySelector('#score').textContent = score;
    document.querySelector('#message').textContent = 'Start guessing!';
    document.querySelector('#message').style.color = '#555';

    document.querySelector('#secret').textContent = '?';
    document.querySelector('#secret').style.visibility = 'hidden';
    document.querySelector('#secret').style.backgroundColor = '#333';
    document.querySelector('#secret').style.color = '#fff';

    document.body.style.backgroundColor = '#ffecd2';
    btnCheck.disabled = false; // Re-enable the check button
});
