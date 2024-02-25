import { VNode } from "./VNode.js";
import { reconcile } from "./reconcile.js";

let rootVNode = null;
let count = 0;

function render() {
  const root = document.getElementById("root");
  const newVNode = new VNode("div", {}, [String(count)]);
  reconcile(root, rootVNode, newVNode);
  rootVNode = newVNode;
}

export function increment() {
  count++;
  render();
}
window.increment = increment;

export function decrement() {
  count--;
  render();
}
window.decrement = decrement;

// Initial render
render();
