let randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

let guessingNumber = randomNumber(1, 100);
let submit = document.querySelector(".submit");
let reset = document.querySelector(".reset");
console.log(guessingNumber);
document.querySelector(".guess").textContent = "?";

let score = 100;
// document.getElementById("trumpetStartSound").play();

function restart() {
  document.getElementById("trumpetStartSound").play();
  let restartElement = document.querySelector(".reset_sub");
  let startElement = document.querySelector(".reset");
  startElement.style.pointerEvents = "none";
  startElement.style.backgroundColor = "green";
  startElement.textContent = "Game In Progress";

  restartElement.style.pointerEvents = "none";
  restartElement.style.backgroundColor = "limegreen";
  restartElement.textContent = "Game In Progress";
}

function guessedAnswer() {
  let guessingValue = document.getElementById("guessing_value").value;
  console.log(guessingValue);

  if (guessingValue < guessingNumber) {
    document.getElementById("result").textContent = "Too Low😔";
    score = score - 10;
    document.querySelector(".score").textContent = score;
    document.getElementById("fail_sound").play();
  } else if (guessingValue > guessingNumber) {
    document.getElementById("result").textContent = "Too High🤔";
    score = score - 10;
    document.querySelector(".score").textContent = score;
    document.getElementById("fail_sound").play();
  } else {
    document.getElementById("result").textContent = "You Won😊";
    document.querySelector(".guess").style.display = "block";
    document.querySelector(".guess").textContent = guessingValue;
    document.querySelector(".guess").style.justifyContent = "center";
    document.querySelector(".guess").style.display = "flex";
    document.querySelector(".guess").style.alignItems = "center";
    document.getElementById("yay_sound").play();
  }
  if (score == 0) {
    document.getElementById("result").textContent =
      "you lost .Click restart to keep playing";

    submit.style.pointerEvents = "none";
    restartElement.textContent = "Start/Restart";
  }

  if (score == -10) {
    location.reload();
    restartElement.textContent = "Start/Restart";
  }

  console.log(score);
}
