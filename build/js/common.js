// Обработик от кликов, передаём 2 аргументы, второй опциональный "debounce = (cb, delay = 500)".
const debounce = window.Corners5ProjectLayout.debounce;

// Логика для формы на главной "Перезвоните мне"
const requestForm = document.querySelector('.request__form');

if (requestForm) {
  requestForm.addEventListener('bouncerFormValid', debounce(() => {
    console.log('bouncerFormValid');
  }, 500));
}