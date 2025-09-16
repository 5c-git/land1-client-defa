// Обработик от кликов, передаём 2 аргументы, второй опциональный "debounce = (cb, delay = 500)".
const debounce = window.Corners5ProjectLayout.debounce;

// Логика для формы на главной "Перезвоните мне"
const requestForm = document.querySelector('.request__form');
if (requestForm) {
  requestForm.addEventListener('bouncerFormValid', debounce((evt) => {

    window.Corners5ProjectLayout.summonAlert({
      template: '#alert--blue',
      text: 'Логика для формы на главной "Перезвоните мне"',
    });

    requestForm.reset();

    // const fd = new FormData(evt.target);

    // return $.ajax({
    //   type: 'POST',
    //   data: fd,
    //   url: '/local/ajax/formHelp.php',
    //   contentType: false,
    //   processData: false,
    //   cache: false,
    //   async: false,
    //   dataType: 'json',
    //   success(data) {
    //     // var msg = JSON.parse(data);
    //     if (data.success == true) {
    //       ym(84981199, 'reachGoal', 'help_in_choise');

    //       window.Corners5ProjectLayout.summonAlert({
    //         template: '#alert--blue',
    //         text: data.text,
    //       });

    //       requestForm.reset();
    //     }
    //   },
    // });
  }, 500));
}