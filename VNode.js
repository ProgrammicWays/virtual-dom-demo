export class VNode {
  constructor(tag, props, children) {
    this.tag = tag;
    this.props = props;
    this.children = children;
    this.domNode = null; // Reference to the actual DOM node
  }

  render() {
    const element = document.createElement(this.tag);
    for (const [key, value] of Object.entries(this.props)) {
      element.setAttribute(key, value);
    }
    for (const child of this.children) {
      if (typeof child === "string") {
        element.appendChild(document.createTextNode(child));
      } else {
        element.appendChild(child.render());
      }
    }
    this.domNode = element; // Save reference to the actual DOM node
    return element;
  }
}
