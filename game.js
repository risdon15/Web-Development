const gameButton = document.getElementById('game-button');
const gameContainer = document.getElementById('game-container');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');

let score = 0;
let timeLeft = 30;
let gameInterval;

// Update the score when the button is clicked
gameButton.addEventListener('click', () => {
  score++;
  scoreDisplay.textContent = `Score: ${score}`;
  moveButton();
});

// Move the button to a random position
function moveButton() {
  const containerWidth = gameContainer.offsetWidth;
  const containerHeight = gameContainer.offsetHeight;
  const buttonWidth = gameButton.offsetWidth;
  const buttonHeight = gameButton.offsetHeight;

  const maxLeft = containerWidth - buttonWidth;
  const maxTop = containerHeight - buttonHeight;

  const randomLeft = Math.random() * maxLeft;
  const randomTop = Math.random() * maxTop;

  gameButton.style.left = `${randomLeft}px`;
  gameButton.style.top = `${randomTop}px`;
}

// Start the game
function startGame() {
  gameInterval = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = `Time Left: ${timeLeft}`;
    if (timeLeft <= 0) {
      clearInterval(gameInterval);
      endGame();
    }
  }, 1000);
}

// End the game
function endGame() {
  alert(`Game over! Your final score is: ${score}`);
  score = 0;
  timeLeft = 30;
  scoreDisplay.textContent = `Score: ${score}`;
  timerDisplay.textContent = `Time Left: ${timeLeft}`;
}

// Start the game when the page loads
startGame();
