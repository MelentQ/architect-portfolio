const animatedItems = document.querySelectorAll('.animated-element');
if (animatedItems.length > 0) {
  animateOnScroll();
  window.addEventListener('scroll', animateOnScroll, {passive: true});
  function animateOnScroll() {
    animatedItems.forEach(item => {
      const itemHeight = item.offsetHeight;
      const itemOffset = offset(item).top;
      const animationStart = 4;

      let itemPoint = window.innerHeight - itemHeight / animationStart;

      if (itemHeight > window.innerHeight) {
        itemPoint = window.innerHeight - window.innerHeight / animationStart;
      }

      if ((pageYOffset > itemOffset - itemPoint) && pageYOffset < (itemOffset + itemHeight)) {
        item.classList.add('animated-element_active')
      }
      else {
        // item.classList.remove('.animated-element_active')
      }
    })
  }
  function offset(el) {
    let rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }
}