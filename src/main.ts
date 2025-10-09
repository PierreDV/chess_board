import "./style/index.css";
import "./components/index.ts"

const board = document.querySelector(".board");

[...Array(25).keys()].forEach((x) => {
  const square = document.createElement("div");
  square.classList.add("square");
  board !== null && board.append(square);
});
