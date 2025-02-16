const COLUMNS = ["a", "b", "c", "d", "e", "f", "g", "h"];
const ROWS = ["1", "2", "3", "4", "5", "6", "7", "8"];
const board = document.querySelector(".board");

for (let [row_index, row] of ROWS.reverse().entries()) {
  for (let [column_index, column] of COLUMNS.entries()) {
    const square = document.createElement("div");
    const classList = [
      "square",
      `square--${(row_index + column_index) % 2 ? "white" : "black"}`,
    ];
    square.classList.add(...classList);
    square.setAttribute("id", column + row);
    board.appendChild(square);
  }
}

document.getElementById("a1").append("♞");
