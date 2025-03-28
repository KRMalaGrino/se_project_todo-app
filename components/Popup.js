class Popup {
  constructor({ popupSelector }) {
    this._popupSelector = document.querySelector(popupSelector);
  }

  open() {
    this._popupSelector.classList.add("popup_visible");
    document.addEventListener("keydown", _handleEscapeClose());
  }

  close() {
    this._popupSelector.classList.remove("popup_visible");
    document.removeEventListener("keydown", _handleEscapeClose());
  }

  _handleEscapeClose() {
    if (evt.key === "Escape") {
      const activePopup = document.querySelector(".popup_visible");
      closeModal(activePopup);
    }
  }

  setEventListeners() {}
}

export default Popup;
