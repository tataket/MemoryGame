const getGameButton = document.getElementsByClassName("game");

let gameLetters = ["A", "A", "B", "B", "C", "C", "D", "D", "E", "E", "F", "F"];

function randomValue() {
  return Math.random() * gameLetters.length;
}

console.log(randomValue);
console.log();
