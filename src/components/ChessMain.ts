import BaseElement from './BaseElement';
import cssText from '../style/components/main.css?inline';

const sheet = new CSSStyleSheet();
sheet.replaceSync(cssText);

const template = document.createElement("template");
template.innerHTML = `<main class="main"><slot></slot></main>`;


export default class ChessMain extends BaseElement {
  static elementName = "chess-main";
  private sheet: CSSStyleSheet | null = null;

  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" })
    shadow.adoptedStyleSheets = [sheet];
    shadow.append(template.content.cloneNode(true));
  }
}

