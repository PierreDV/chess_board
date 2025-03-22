const COLUMNS = ["a", "b", "c", "d", "e", "f", "g", "h"];
const ROWS = ["1", "2", "3", "4", "5", "6", "7", "8"];

export default function appendBoard(element: string) {
  const board: HTMLDivElement | null = document.querySelector(element);

  for (let [row_index, row] of ROWS.reverse().entries()) {
    for (let [column_index, column] of COLUMNS.entries()) {
      const square = document.createElement("div");
      const classList = [
        "square",
        `square--${(row_index + column_index) % 2 ? "white" : "black"}`,
      ];
      square.classList.add(...classList);
      square.setAttribute("id", column + row);
      if (board !== null) {
        board.appendChild(square);
      }
    }
  }
}
