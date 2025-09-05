import './footer.scss';

const accordions = document.querySelectorAll('.footer__nav-block');
if (accordions.length > 0) {
  accordions.forEach((accordion) => {
    const button = accordion.querySelector('.footer__nav-title');
    const inner = accordion.querySelector('.footer__list');

    button.addEventListener('click', () => {
      if (window.innerWidth < 768) {
        accordion.classList.toggle('footer__nav-block--active');

        if (accordion.classList.contains('footer__nav-block--active')) {
          inner.style.maxHeight = `${inner.scrollHeight}px`;
        } else {
          inner.style.maxHeight = '';
        }
      }
    });
  });
}
