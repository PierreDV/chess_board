import "./style/index.css";
const board = document.querySelector(".board");
[...Array(25).keys()].forEach(() => {
  const square = document.createElement("div");
  square.classList.add("square");
  board !== null && board.append(square);
});
