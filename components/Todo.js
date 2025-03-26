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
    this._todoElement.addEventListener("click", () => {});
    this._todoElement.addEventListener("click", () => {});
  }

  _generateName() {
    this._todoNameEl = this._todoElement.querySelector(".todo__name");
    this._todoNameEl.textContent = this._name;
  }

  _generateCheckboxEl() {
    this._todoCheckboxEl = this._todoElement.querySelector(".todo__completed");
    this._todoLabel = this._todoElement.querySelector(".todo__label");
    this._todoCheckboxEl.checked = this._completed;
    this._todoCheckboxEl.id = `todo-${this._id}`;
    this._todoLabel.setAttribute("for", `todo-${this._id}`);
  }

  generateDueDate() {
    this._todoDateElement = this._todoElement.querySelector(".todo__date");
    this._todoDate = new Date(this._date);
    if (!isNaN(this._todoDate)) {
      this._todoDateElement.textContent = `Due: ${this._todoDate.toLocaleString(
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
    this._generateName();
    this.generateDueDate();
    this._generateCheckboxEl();
    this._setEventListeners();
    return this._todoElement;
  }
}

export default Todo;
