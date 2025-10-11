import "./style/index.css";
import "./components/index.ts"

const board = document.querySelector(".board");

[...Array(25).keys()].forEach(() => {
  const square = document.createElement("div");
  square.classList.add("square");
  if (board !== null) {
    board.append(square);
  }
});
