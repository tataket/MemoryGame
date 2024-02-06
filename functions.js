const getGameButton = document.getElementsByClassName("game");
const editPoints = document.getElementById("editPoints");
const playAgain = document.getElementsByClassName("playAgain");

let gameLetters = [
  "🥁",
  "🥁",
  "🪇",
  "🪇",
  "🪕",
  "🪕",
  "🎹",
  "🎹",
  "🪗",
  "🪗",
  "🪈",
  "🪈",
  "🎺",
  "🎺",
  "🎷",
  "🎷",
  "🪘",
  "🪘",
  "🎻",
  "🎻",
];

let numbersLeft = 20;

function randomValue() {
  return Math.floor(Math.random() * gameLetters.length);
}

let n1;
let n2;
let played = false;
let element1;
let element2;
let gameIsFinished = false;

for (let i = 0; i < getGameButton.length; i++) {
  let number = randomValue();
  getGameButton[i].textContent = gameLetters[number];
  gameLetters.splice(number, 1);

  getGameButton[i].addEventListener("click", (e) => {
    if (n2 == null) {
      if (!played) {
        e.target.style.color = "black";
        n1 = getGameButton[i].textContent;
        element1 = i;
        played = true;
      } else {
        e.target.style.color = "black";
        n2 = getGameButton[i].textContent;
        element2 = i;
        if (n1 == n2) {
          numbersLeft -= 2;
          editPoints.textContent = eval(Number(editPoints.textContent) + 15);
          setTimeout(function () {
            getGameButton[element1].style.opacity = 0;
            getGameButton[element2].style.opacity = 0;
          }, 700);
          setTimeout(function () {
            n1 = null;
            n2 = null;
            element1 = null;
            element2 = null;
          }, 800);
        } else {
          if (editPoints.textContent > 0) {
            editPoints.textContent = eval(Number(editPoints.textContent) - 5);
          }
          setTimeout(function () {
            getGameButton[element1].style.color = "transparent";
            getGameButton[element2].style.color = "transparent";
          }, 700);
          setTimeout(function () {
            n1 = null;
            n2 = null;
            element1 = null;
            element2 = null;
          }, 800);
        }
        played = false;
      }
    }
    if (numbersLeft == 0) {
      location.href = "/victory.html";
    }
    if (editPoints.textContent == 0) {
      location.href = "/defeat.html";
    }
  });
}
