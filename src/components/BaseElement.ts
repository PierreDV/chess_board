export default abstract class BaseElement extends HTMLElement {
	static elementName: string;
  static styleSheets: CSSStyleSheet[];
	static templateString: string; 

	protected render(): void {
		const shadow = this.attachShadow({ mode: "open" });
		const template = document.createElement("template");

		shadow.adoptedStyleSheets = this.constructor.styleSheets;
		template.innerHTML = this.constructor.templateString;
		shadow.append(template.content.cloneNode(true));
  }

	constructor() {
		super();
    this.render();
	}
	
	static register(): void {
		if (!this.elementName) {
			throw new Error("elementName must be defined in subclass");
		}
		customElements.define(this.elementName, this);
	}
}

