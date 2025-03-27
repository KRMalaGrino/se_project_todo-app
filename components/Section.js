import { initialTodos } from "../utils/constants.js";

class Section {
  constructor({ items, renderer, containerSelector }) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }
  // Check work 1 // replaces the forEach repetition
  renderItems() {
    initialTodos.forEach((item) => {
      renderTodo(item);
    });
  }
  // Check work 1 // replaces the append repetition
  addItem(item) {
    const todo = generateTodo(item);
    todosList.append(todo);
  }
}

export default Section;
