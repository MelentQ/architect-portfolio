import Swiper from '../vendor/swiper/swiper-bundle.min.js';
import '../pages/index.scss';

import '../utils/smoothScroll';
import {gallerySliderSelector, gallerySliderSettings} from '../utils/constants';

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
