import Swiper from '../vendor/swiper/swiper-bundle.min.js';
import '../pages/index.scss';

import '../utils/smoothScroll';
import {gallerySliderSelector, gallerySliderSettings} from '../utils/constants';

import ImageModalPanel from '../components/ImageModalPanel';
import ModalPanel from '../components/ModalPanel.js';

const gallerySlider = new Swiper(gallerySliderSelector, gallerySliderSettings);

const header = document.querySelector('.header');
let isModalOpen = false;
let scrollPrev = 0;

// Header hiding on scroll down
// or when modal is open
document.addEventListener('scroll', () => {
  let scrolled = window.pageYOffset;
  if (isModalOpen || scrolled > 60 && scrolled > scrollPrev) {
    header.classList.add('header_hidden');
  }
  else {
    header.classList.remove('header_hidden');
  }
  scrollPrev = scrolled;
}, {passive: true})

const setIsModalOpen = (isOpen) => {
  isModalOpen = isOpen;
}
const onOpenModal = () => {
  header.classList.add('header_hidden');
  setIsModalOpen(true);
}
const onCloseModal = () => {
  setIsModalOpen(false);
}

// Modal panel for menu
const menuModal = new ModalPanel({
  selector: '#menuModal',
  onOpen: onOpenModal,
  onClose: onCloseModal
})
menuModal.setEventListeners();
const openMenuBtn = document.querySelector('.header__menu-btn');
openMenuBtn.addEventListener('click', menuModal.openModalPanel.bind(menuModal));
const menuLinks = document.querySelectorAll('.menu__link');
menuLinks.forEach(link => link.addEventListener('click', menuModal.closeModalPanel.bind(menuModal)))

// Modal panel for gallery
const cardModal = new ImageModalPanel({
  selector: '#cardModal',
  onOpen: onOpenModal,
  onClose: onCloseModal
})
cardModal.setEventListeners();

const galleryCards = document.querySelectorAll('.slide');
galleryCards.forEach(card => {
  const cardPath = card.querySelector('.slide__image').src;
  const cardDescription = card.querySelector('.slide__description').textContent;
  card.addEventListener('click', () => {
    cardModal.openModalPanel(cardPath, cardDescription)
  })
})
