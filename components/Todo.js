class Todo {
  constructor(data, selector) {
    this._data = data;
    this._templateElement = document.querySelector(selector);
  }

  //   _setEventListeners() {
  //     this._element
  //       .querySelector(todoDeleteBtn)
  //       .addEventListener("click", () => {});
  //   }

  getView() {
    this._todoElement = this._templateElement.content
      .querySelector(todo)
      .cloneNode(true);

    const todoNameEl = this._todoElement.querySelector(".todo__name");
    const todoCheckboxEl = this._todoElement.querySelector(".todo__completed");
    const todoLabel = this._todoElement.querySelector(".todo__label");
    const todoDate = this._todoElement.querySelector(".todo__date");
    const todoDeleteBtn = this._todoElement.querySelector(".todo__delete-btn");
    const todo = document.querySelector(".todo");

    todoNameEl.textContent = data.name;

    todoCheckboxEl.checked = data.completed;
    todoCheckboxEl.id = `todo-${data.id}`;
    todoLabel.setAttribute("for", `todo-${data.id}`);

    return this._todoElement;
  }
}

export default Todo;
