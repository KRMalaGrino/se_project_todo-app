class FormValidator {
  constructor(settings, formEl) {
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._errorClass = settings.errorClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._formEl = formEl;
  }

  _showInputError(formElement, inputElement) {
    this._errorElementId = `#${inputElement.id}-error`;
    this._errorElement = formElement.querySelector(errorElementId);
    this._inputElement.classList.add(settings.inputErrorClass);
    this._errorElement.textContent = errorMessage;
    this._errorElement.classList.add(settings.errorClass);
  }

  _hideInputError(formElement, inputElement) {
    this._errorElementId = `#${inputElement.id}-error`;
    // this._errorElement = formElement.querySelector(errorElementId);
    // this._inputElement.classList.remove(settings.inputErrorClass);
    // this._errorElement.classList.remove(settings.errorClass);
    // this._errorElement.textContent = "";
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
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _disableSubmitButton() {
    this._buttonElement.classList.add(this._inactiveButtonClass);
    this._buttonElement.disabled = true;
  }

  _enableSubmitButton() {
    this._buttonElement.classList.remove(this._inactiveButtonClass);
    this._buttonElement.disabled = false;
  }

  _toggleButtonState = () => {
    if (this._hasInvalidInput()) {
      this._disableSubmitButton();
    } else {
      this._enableSubmitButton();
    }
  };

  resetValidation() {
    this._inputList.forEach((inputElement, settings) => {
      this._hideInputError(inputElement, settings);
    });
    this._inputSelector.reset;
    this._disableSubmitButton();
  }

  _setEventListeners(settings) {
    this._inputList = Array.from(
      this._formEl.querySelectorAll(this._inputSelector)
    );
    this._buttonElement = this._formEl.querySelector(
      this._submitButtonSelector
    );

    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  enableValidation(settings) {
    this._formEl.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners(settings);
  }
}

export default FormValidator;
