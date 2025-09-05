import './header.scss';

const header = document.querySelector('header');
if (header) {
  // Скрывает шапку при скроле вниз
  const hideHeaderOnMove = () => {
    let scrollPosition = 0;
    let hideChecker = 0;
    let showChecker = 0;
    window.addEventListener('scroll', () => {
      if (window.pageYOffset >= scrollPosition && window.pageYOffset >= header.offsetHeight) {
        showChecker = 0;
        hideChecker += (window.pageYOffset - scrollPosition);
        scrollPosition = window.pageYOffset;
      } else {
        showChecker += (scrollPosition - window.pageYOffset);
        hideChecker = 0;
        scrollPosition = window.pageYOffset;
      }

      if (showChecker >= 300) {
        header.classList.remove('header--hidden');
        hideChecker = 0;
      } else if (hideChecker >= 300) {
        header.classList.add('header--hidden');
      }
    });
  };

  hideHeaderOnMove();

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 0 && !header.classList.contains('header--fixed')) {
      header.classList.add('header--fixed');
    } else if (window.pageYOffset === 0) {
      header.classList.remove('header--fixed');
    }
  });
}
