"use strict";
// elements
const check = document.querySelector(".check");
const input = document.querySelector(".imput-number");
const guessingText = document.querySelector(".guessing-text");
const correctAns = document.querySelector(".game-correct-ans");
const score = document.querySelector(".score");
const highScore = document.querySelector(".high-score");
const palyAgain = document.querySelector(".play-again");
const gameTitle = document.querySelector(".game-title");
const between = document.querySelector(".between");

// varialbles
let SECRET_NUMBER = Math.floor(Math.random() * 20 + 1);
let SCORE = 20;
let HIGH_SCORE = 0;

// Guessing text
function displayGuessingText(text) {
  guessingText.textContent = text;
  // guessingText.style.color = "red";
}

// checking
check.addEventListener("click", function () {
  const inputNumer = Number(input.value);
  guessingText.style.color = "#222";
  // empty value
  if (!inputNumer) {
    displayGuessingText("Input a valid number! 😡");
    guessingText.style.color = " #dc3545";
  }
  // players win
  else if (inputNumer === SECRET_NUMBER) {
    displayGuessingText("Correcr Answer ✔");
    correctAns.textContent = SECRET_NUMBER;
    // correctAns.style.backgroundColor = "#28a745";

    correctAns.style.boxShadow =
      " 2rem 2rem 2rem rgba(0, 0, 0, 0.1), -0.5rem -1rem 2rem rgba(0, 0, 0, 0.1)";
    document.body.style.backgroundColor = "teal";
    guessingText.style.color = "#28a745";
    gameTitle.style.color = "#dc3545";
    gameTitle.textContent = "Congratulations 🏆";
    gameTitle.style.textShadow = "4px 6px rgba(0, 0, 0, 0.8)";
    input.style.visibility = "hidden";
    check.style.visibility = "hidden";
    if (SCORE > HIGH_SCORE) {
      HIGH_SCORE = SCORE;
      highScore.textContent = HIGH_SCORE;
    }
  }
  // when gues is wrong
  else if (inputNumer !== SECRET_NUMBER) {
    guessingText.style.color = " #dc3545";
    if (SCORE > 1) {
      displayGuessingText(
        inputNumer > SECRET_NUMBER ? "To high ❌" : "To low ❌"
      );
      SCORE--;
      score.textContent = SCORE;
    } else {
      displayGuessingText("Game is over");
      score.textContent = 0;
    }
  }
});
// Play again
palyAgain.addEventListener("click", function () {
  SCORE = 20;
  SECRET_NUMBER = Math.floor(Math.random() * 20 + 1);

  displayGuessingText("Start Guessing...");
  document.body.style.backgroundColor = "#222";
  correctAns.style.backgroundColor = "teal";
  input.style.visibility = "visible";
  check.style.visibility = "visible";
  input.value = " ";
  correctAns.textContent = "?";
  score.textContent = SCORE;
  guessingText.style.color = "#eaeaea";
  gameTitle.textContent = "Gues My Number";
  gameTitle.style.color = "#eaeaea";
});
