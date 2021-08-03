import ModalPanel from "./ModalPanel"

export default class ImageModalPanel extends ModalPanel {
  constructor({selector, onOpen, onClose}) {
    super({selector, onOpen, onClose});

    this._imageContainer = this._element.querySelector('.modal__image-container');
    this._image = this._imageContainer.querySelector('.modal__image');
    this._description = this._imageContainer.querySelector('.modal__image-name');
  }

  openModalPanel(image, description) {
    this._image.src = image;
    this._description.textContent = description;

    super.openModalPanel();
  }
}