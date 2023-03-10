const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const playerScoreDisplay = document.querySelector("#player-score");
const computerScoreDisplay = document.querySelector("#computer-score");
const resultsDisplay = document.querySelector(".result");
const modal = document.querySelector(".modal-overlay");
const finalResult = document.querySelector(".final-game-result");
const resetBtn = document.querySelector("#game-reset-btn");

let playerScore = 0;
let computerScore = 0;

const computerSelection = () => {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
  }

function playRound(playerSelection, computerSelection) {

 if (playerSelection === computerSelection) {
    resultsDisplay.textContent = "It's a tie!";
  } else if (
    playerSelection === "rock" && computerSelection === "scissors" ||
    playerSelection === "paper" && computerSelection === "rock" ||
    playerSelection === "scissors" && computerSelection === "paper"
  ) {
    resultsDisplay.textContent = "You win this round!";
    playerScore++;
  } else {
    resultsDisplay.textContent = "Computer wins this round!";
    computerScore++;
  }

  // Update the scoreboard
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;

  // Check for a winner
  if (playerScore === 5) {
    modal.classList.toggle("active");
    finalResult.textContent = "You won the game!";
    resultsDisplay.classList.add("active");
    disableButtons();
  } else if (computerScore === 5) {
    modal.classList.toggle("active");
    finalResult.textContent = "You lost the game!";
    resultsDisplay.classList.add("active");
    disableButtons();
  }
}

function disableButtons() {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true; 
}

rockBtn.addEventListener("click", () => {
    playRound("rock", computerSelection());
  });

paperBtn.addEventListener("click", () => {
  playRound("paper", computerSelection());
});

scissorsBtn.addEventListener("click", () => {
  playRound("scissors", computerSelection());
});

function resetGame() {
  modal.classList.remove("active");
  playerScore = 0;
  computerScore = 0;
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
  resultsDisplay.textContent = "";
  resultsDisplay.style.background = "";
  rockBtn.disabled = false;
  paperBtn.disabled = false;
  scissorsBtn.disabled = false;
}

resetBtn.addEventListener("click", () => {
  resetGame();
});

modal.addEventListener("click", (event) => {
  if(event.target.classList.contains("active")) {
    resetGame();
  }
})