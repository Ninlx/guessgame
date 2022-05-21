// random number between 1 and 100
let randomNum = Math.floor(Math.random() * 100) + 1;

// getting the elemens of result from the dom
const guesses = document.getElementById("guesses");
const result = document.getElementById("result");
const promptLetter = document.getElementById("promptLetter");

// getting the input elements from the dom
const inputGuess = document.getElementById("inputGuess");
const submitGuess = document.getElementById("submitGuess");

let guessCount = 1;
let resetBtn;

// creating a function with the name of checkGuess();
function checkGuess(e) {
  e.preventDefault();
  const userGuess = Number(inputGuess.value);
  if (guessCount === 1) {
    guesses.innerText = "previous guesses : ";
  }
  guesses.textContent += userGuess + " ";
  if (userGuess === randomNum) {
    result.textContent = "congratulations! you got it right";
    promptLetter.textContent = "better luck next game";
    setGameOver();
  } else if (guessCount === 10) {
    result.textContent = "Game Over";
    promptLetter.textContent = "better luck next game";
    setGameOver();
  } else {
    result.textContent = "wrong!";
    if (userGuess < randomNum) {
      promptLetter.textContent = "your guess was too low!";
    } else if (userGuess > randomNum) {
      promptLetter.textContent = "your guess was too high!";
    }
  }
  guessCount++;
  inputGuess.value = "";
  inputGuess.focus();
}

submitGuess.addEventListener("click", checkGuess);

function setGameOver() {
  inputGuess.disabled = true;
  submitGuess.disabled = true;
  resetBtn = document.getElementById("resetGame");
  resetBtn.addEventListener("click", resGame);
  if ((guessCount = 10)) {
    resetBtn.style.display = "block";
  }
}

function resGame() {
  guessCount = 1;

  const resetParams = document.querySelectorAll(".result p");
  for (const resetParam of resetParams) {
    resetParam.textContent = "get ready!";
  }
  const resetParams0 = document.querySelectorAll(".result span");
  for (const resetParam0 of resetParams0) {
    resetParam0.textContent = "Previous Guesses : ";
  }

  resetBtn.parentNode.removeChild(resetBtn);
  inputGuess.disabled = false;
  submitGuess.disabled = false;
  inputGuess.value = "";
  inputGuess.focus();

  randomNum = Math.floor(Math.random() * 100) + 1;
}
