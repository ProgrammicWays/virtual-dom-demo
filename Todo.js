import { VNode } from "./VNode.js";
import { reconcile } from "./reconcile.js";

let rootVNode = null;
let todos = [];

function render(newVNode) {
  const root = document.getElementById("root");
  reconcile(root, rootVNode, newVNode);
  rootVNode = newVNode;
}

function createTodoList() {
  return new VNode(
    "ul",
    { id: "todo-list" },
    todos.map((todo) => new VNode("li", {}, [todo]))
  );
}

export function addTodo() {
  const newTodoInput = document.getElementById("newTodo");
  const newTodo = newTodoInput.value.trim();
  if (newTodo) {
    todos.push(newTodo);
    newTodoInput.value = "";
    const updatedTodoList = createTodoList();
    render(updatedTodoList);
  }
}
window.addTodo = addTodo;

const initialTodoList = createTodoList();
render(initialTodoList);
