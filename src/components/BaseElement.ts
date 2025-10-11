export default class BaseElement extends HTMLElement {
  static elementName: string | null = null;

  static register() {
    if (!BaseElement.elementName) {
      throw new Error("elementName must be defined in subclass");
    }
    return customElements.define(BaseElement.elementName, BaseElement)
  };
}
