let cells = document.querySelectorAll("#cell");
let resetBtn = document.querySelector("#reset");
let gameBoard = document.querySelector("#game");
let currPlayerX = true;
let winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (currPlayerX) {
      cell.innerText = "O";
      currPlayerX = false;
    } else {
      cell.innerText = "X";
      currPlayerX = true;
    }
    cell.style.pointerEvents = "none";
    checkWinner();
  });
});

const checkWinner = () => {
  let winner = null;
  winPatterns.forEach((pattern) => {
    const cell0 = cells[pattern[0]].innerText;
    const cell1 = cells[pattern[1]].innerText;
    const cell2 = cells[pattern[2]].innerText;
    if (cell0 && cell0 === cell1 && cell0 === cell2) {
      cells[pattern[0]].style.color = "red";
      cells[pattern[1]].style.color = "red";
      cells[pattern[2]].style.color = "red";
      cells.forEach((cell) => {
        cell.style.pointerEvents = "none";
      });
      winner = cell0;
    }
  });
  if (winner) {
    displayMessage(`${winner} is the winner`);
  } 
};

const displayMessage = (msg) => {
  let message = document.createElement("div");
  message.id = "message";
  message.style.position = "absolute";
  message.style.top = "50%";
  message.style.left = "50%";
  message.style.transform = "translate(-50%, -50%)";
  message.style.padding = "20px";
  message.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  message.style.color = "white";
  message.style.fontSize = "24px";
  message.style.textAlign = "center";
  message.style.borderRadius = "10px";
  message.innerText = msg;
  gameBoard.appendChild(message);
};

resetBtn.addEventListener("click", () => {
  cells.forEach((cell) => {
    cell.innerText = "";
    cell.style.pointerEvents = "auto";
    cell.style.color = "white";
  });
  currPlayerX = true;
  let message = document.querySelector("#message");
  if (message) {
    message.remove();
  }
});

