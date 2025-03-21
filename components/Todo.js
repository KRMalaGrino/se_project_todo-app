const todo = document.querySelector(".todo");

class Todo {
  constructor(data, selector) {
    this._name = data.name;
    this._id = data.id;
    this._completed = data.completed;
    this._date = data.date;

    this._selector = selector;
  }

  _setEventListeners() {
    this._todoDeleteBtn.addEventListener("click", () => {
      this._todoElement.remove();
    });

    this._todoCheckboxEl._setEventListener("change", () => {
      this._data.completed = !this._data.completed;
    });

    this._element
      .querySelector(todoDeleteBtn)
      .addEventListener("click", () => {});

    this._element
      .querySelector(todoCheckboxEl)
      .addEventListener("click", () => {});
  }

  _generateCheckboxEl() {
    this._todoCheckboxEl = this._todoElement.querySelector(".todo__completed");
    this._todoLabel = this._todoElement.querySelector(".todo__label");
    this._todoCheckboxEl.checked = this._data.completed;
    this._todoCheckboxEl.id = `todo-${data.id}`;
    this._todoLabel.setAttribute("for", `todo-${data.id}`);
  }

  generateDueDate() {
    this._dueDate = new Date(this._data.date);
    if (!isNaN(this._dueDate)) {
      this._todoDate.textContent = `Due: ${this._dueDate.toLocaleString(
        "en-US",
        {
          year: "numeric",
          month: "short",
          day: "numeric",
        }
      )}`;
    }
  }

  _getTemplate() {
    return document
      .querySelector(this._selector)
      .content.querySelector(".todo")
      .cloneNode(true);
  }

  getView() {
    this._todoElement = this._getTemplate();
    this._todoDeleteBtn = this._todoElement.querySelector(".todo__delete-btn");
    this._todoNameEl = this._todoElement.querySelector(".todo__name");
    this._todoNameEl.textContent = this._data.name;
    this._todoDate = this._todoElement.querySelector(".todo__date");
    this._todoDate.textContent = this._data.date;
    this._generateDueDate();
    this._generateCheckboxEl();
    this._setEventListeners();

    return this._element;
  }
}

export default Todo;
