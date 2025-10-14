import BaseElement from "./BaseElement.ts";
import cssText from "../style/components/board.css?inline";

const styleSheet = new CSSStyleSheet();
styleSheet.replaceSync(cssText);

export default class ChessBoard extends BaseElement {
	static elementName = "chess-board";
	static styleSheets = [styleSheet];
	static templateString = `<div class="board"><slot></slot></div>`;

	connectedCallback() {
		this.renderBoard();
	}

	renderBoard() {
		const board = this.shadowRoot.querySelector(".board") as HTMLElement;

		const files = "abcdefgh".split("");
		const ranks = "87654321".split("");

		for (const rank of ranks) {
			for (const file of files) {
				const square = document.createElement("chess-square");
				square.setAttribute("file", file);
				square.setAttribute("rank", rank);
				board.appendChild(square);
			}
		}
	}
}
