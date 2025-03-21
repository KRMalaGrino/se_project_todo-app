class FormValidator {
  constructor(settings, formEl) {
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._errorClass = settings.errorClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._formEl = formEl;
  }

  _showInputError() {
    this._errorElementId = `#${inputElement.id}-error`;
    this._errorElement = formElement.querySelector(errorElementId);
    this._inputElement.classList.add(settings.inputErrorClass);
    this._errorElement.textContent = errorMessage;
    this._errorElement.classList.add(settings.errorClass);
  }

  _hideInputError() {
    this._errorElementId = `#${inputElement.id}-error`;
    this._errorElement = formElement.querySelector(errorElementId);
    this._inputElement.classList.remove(settings.inputErrorClass);
    this._errorElement.classList.remove(settings.errorClass);
    this._errorElement.textContent = "";
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(
        formElement,
        inputElement,
        inputElement.validationMessage,
        settings
      );
    } else {
      this._hideInputError(formElement, inputElement, settings);
    }
  }

  _hasInvalidInput() {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  toggleButtonState() {
    if (hasInvalidInput(inputList)) {
      this._buttonElement.classList.add(settings.inactiveButtonClass);
      this._buttonElement.disabled = true;
    } else {
      this._buttonElement.classList.remove(settings.inactiveButtonClass);
      this._buttonElement.disabled = false;
    }
  }

  resetValidation() {
    const form = document.getElementById(formSelector);
    form.reset();
    submitButtonSelector.disabled = true;
  }

  _setEventListeners() {
    this._inputList = Array.from(
      this._formEl.querySelectorAll(this._inputSelector)
    );
    this._buttonElement = this._formElement.querySelector(
      settings.submitButtonSelector
    );

    toggleButtonState(inputList, buttonElement, settings);

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        toggleButtonState(inputList, buttonElement, settings);
      });
    });
  }

  enableValidation() {
    this._formEl.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}

export default FormValidator;
