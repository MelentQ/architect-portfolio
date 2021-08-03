export default class ModalPanel {
  constructor({selector, onOpen, onClose}) {
    this._element = document.querySelector(selector);
    this._closeBtn = this._element.querySelector('.modal__close-btn');
    this._handleOpen = onOpen;
    this._handleClose = onClose;

    this._handleCloseModalByEsc = this._handleCloseModalByEsc.bind(this);
    this._handleOverlayClickClose = this._handleOverlayClickClose.bind(this);
  }

  openModalPanel() {
    this._element.classList.add('modal_opened');
    this._handleOpen();
    document.addEventListener('keydown', this._handleCloseModalByEsc);
    document.addEventListener('click', this._handleOverlayClickClose);
  }

  closeModalPanel() {
    this._element.classList.remove('modal_opened');
    this._handleClose();
    document.removeEventListener('keydown', this._handleCloseModalByEsc);
    document.removeEventListener('click', this._handleOverlayClickClose);
  }

  _handleCloseModalByEsc(evt) {
    if (evt.key === "Escape") {
      this.closeModalPanel();
    }
  }

  _handleOverlayClickClose(evt) {
    if(evt.target.classList.contains('modal_opened')) {
      this.closeModalPanel();
    }
  }

  setEventListeners() {
    this._closeBtn.addEventListener('click', this.closeModalPanel.bind(this))
  }
}