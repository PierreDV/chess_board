export default function Square(coordinate: string) {
  const square = document.createElement("div");

  const classList = [
    "square",
    `square--${(row_index + column_index) % 2 ? "white" : "black"}`,
  ];
  square.classList.add(...classList);
  square.setAttribute("id", coordinate);
}

function determineColor(coordinate: string) {
  const [column, row] = coordinate.split("");
}
