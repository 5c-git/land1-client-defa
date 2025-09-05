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

// Логика для каталога в шапке.
document.querySelectorAll('.header__catalog').forEach((catalog) => {
  const toggle = catalog.querySelector('.header__catalog-toggle');

  if (!toggle) return;

  const onEscPress = (evt) => {
    if (evt.code === 'Escape') {
      evt.preventDefault();
      toggle.classList.remove('header__catalog-toggle--active');
      document.removeEventListener('keydown', onEscPress);
    }
  };

  document.addEventListener('click', (evt) => {
    const isToggleClick = evt.target === toggle;

    if (isToggleClick) {
      toggle.classList.toggle('header__catalog-toggle--active');

      if (toggle.classList.contains('header__catalog-toggle--active')) {
        document.addEventListener('keydown', onEscPress);
      } else {
        document.removeEventListener('keydown', onEscPress);
      }
    } else if (!catalog.contains(evt.target)) {
      // Клик вне конкретного каталога — закрываем его
      toggle.classList.remove('header__catalog-toggle--active');
      document.removeEventListener('keydown', onEscPress);
    }
  });
});
