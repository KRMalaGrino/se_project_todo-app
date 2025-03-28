class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._popupCloseBtn = this._popupElement.querySelector(".popup__close");
  }
  // Check work
  open() {
    this._popupElement.classList.add("popup_visible");
    document.addEventListener("keydown", this._handleEscapeClose());
  }
  // Check work
  close() {
    this._popupElement.classList.remove("popup_visible");
    document.removeEventListener("keydown", this._handleEscapeClose());
  }
  // Check work
  _handleEscapeClose(evt) {
    if (evt.key === "Escape") {
      this.close(this._popupElement);
    }
  }
  // Check work
  setEventListeners() {
    // this._popupCloseBtn.addEventListener("click", () => {
    //   this.open();
    // });

    this._popupElement.addEventListener("mousedown", (evt) => {
      if (
        evt.target.classList.contains("popup") ||
        evt.target.classList.contains("popup__close")
      ) {
        this.close(this._popupElement);
      }
    });
  }
}

export default Popup;
