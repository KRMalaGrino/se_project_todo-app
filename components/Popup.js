class Popup {
  constructor(popup) {
    this._popup = popup;
    // maybe like this
    // this._popup = document.querySelector(".popup");
    // this._popup = document.querySelector(popup);
  }

  open() {
    modal.classList.add("popup_visible");
    document.addEventListener("keydown", _handleEscapeClose());
  }

  close() {
    modal.classList.remove("popup_visible");
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

const PopupWithForm = new Popup(popupSelector, () => {
  _getInputValues(data);
  setEventListeners();
});

export { Popup, PopupWithForm };
