export function reconcile(parentNode, oldVNode, newVNode) {
  if (!oldVNode) {
    parentNode.appendChild(newVNode.render());
  } else {
    parentNode.replaceChildren(newVNode.render());
  }
}
