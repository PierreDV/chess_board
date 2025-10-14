import BaseElement from "./BaseElement.ts";
import cssText from "../style/components/square.css?inline";

const styleSheet = new CSSStyleSheet();
styleSheet.replaceSync(cssText);

export default class ChessSquare extends BaseElement {
	static elementName = "chess-square";
	static styleSheets = [styleSheet];
	static templateString = `<div class="square"></div>`;
}
