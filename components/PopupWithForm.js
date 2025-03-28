import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".popup__form");
    this._inputList = this._popupForm.querySelectorAll(".popup__input");
    this._handleFormSubmit = handleFormSubmit;
  }
  // Finish the _getInputValues method
  _getInputValues() {
    const inputValues = {};
    this._inputList.forEach((input) => {
      // Add key/value pair to the empty object for each input
      // use bracket notation. Not dot. Only 1 line of code needed
      input["name"] input["date"];
    });
    return inputValues;
  }
  setEventListeners() {
    super.setEventListeners();

    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();

      const inputValues = this._getInputValues();

      // pass result of _getInputValues to the submission handler
      this._getInputValues(inputValues);

      this._handleFormSubmit(evt);
    });
  }
}

export default PopupWithForm;
