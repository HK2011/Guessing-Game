let randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

let guessingNumber = randomNumber(1, 100);
let submit = document.querySelector(".submit");
console.log(guessingNumber);
document.querySelector(".guess_number").textContent = guessingNumber;

document.querySelector(".guess_number").style.display = "none";
let score = 100;

function guessedAnswer() {
  let guessingValue = document.getElementById("guessing_value").value;
  console.log(guessingValue);

  if (guessingValue < guessingNumber) {
    document.getElementById("result").textContent = "Too Low😦";
    score = score - 10;
    document.getElementById("score").textContent = score;
  } else if (guessingValue > guessingNumber) {
    document.getElementById("result").textContent = "Too High🤔";
    score = score - 10;
    document.getElementById("score").textContent = score;
  } else {
    document.getElementById("result").textContent = "You Won😊";
    document.querySelector(".guess_number").style.display = "block";
  }
  if (score == 0) {
    document.getElementById("result").textContent =
      "you lost .Click restart to keep playing";
  }
  // if (score == 0) {
  //   submit.style.display = "none";
  //   document.getElementById("score").textContent = "you lost";
  // }
  if (score == -10) {
    location.reload();
  }
}
function restart() {
  guessingNumber = randomNumber(1, 100);
  score = 100;
  document.getElementById("score").textContent = score;
  document.getElementById("result").textContent = "Result";
  document.querySelector(".guess_number").style.display = "none";
  document.getElementById("guessing_value").value = "";
  console.log(guessingNumber);
}
