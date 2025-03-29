// Imports ----------------------------------------------------------
import { v4 as uuidv4 } from "https://jspm.dev/uuid";

import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import Popup from "../components/Popup.js";
import PopupWithForm from "../components/PopupWithForm.js";
import TodoCounter from "../components/TodoCounter.js";
// Global Variables ---------------------------------------------------
const addTodoButton = document.querySelector(".button_action_add");
const addTodoForm = document.forms["add-todo-form"];
// TodoCounter  -------------------------------------------------------
// finish calling the TodoCounter
const todoCounter = new TodoCounter(initialTodos, ".counter__text");

function handleCheck(completed) {
  todoCounter.updateCompleted(completed);
}

function handleDelete(completed) {
  if (completed) {
    todoCounter.updateCompleted(false);
  }
}
// Generate Todo  -----------------------------------------------------
const generateTodo = (data) => {
  const todo = new Todo(data, "#todo-template", handleCheck, handleDelete);
  const todoElement = todo.getView();
  return todoElement;
};
// Section  -----------------------------------------------------------
const section = new Section({
  items: initialTodos,
  renderer: (item) => {
    const element = generateTodo(item);
    section.addItem(element); // section inside section ??
  },
  containerSelector: ".todos__list",
});

section.renderItems();
// PopupWithForm  ----------------------------------------------------
// Finish calling the PopupWithForm class code
const addTodoPopup = new PopupWithForm({
  popupSelector: "#add-todo-popup",
  handleFormSubmit: (inputValues) => {
    // const name = evt.target.name.value;
    // const dateInput = evt.target.date.value;

    const date = new Date(dateInput);
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

    const id = uuidv4();
    const values = { name, date, id };
    generateTodo(values);
    this._popupElement.close();
  },
});

addTodoPopup.setEventListeners();
// why not the open added to serEventListeners also ? 2
addTodoButton.addEventListener("click", () => {
  addTodoPopup.open();
});
// FormValidator ------------------------------------------------------
const newTodoValidator = new FormValidator(validationConfig, addTodoForm);
newTodoValidator.enableValidation();
