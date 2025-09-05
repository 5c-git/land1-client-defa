// Куки уже вшиты в bundle.js

const warehouseTEST = document.querySelector('.warehouse');
if (warehouseTEST) {
  const toggle = warehouseTEST.querySelector('.warehouse__toggle');

  const onSearchEscPress = (evt) => {
    if (evt.code === 'Escape') {
      evt.preventDefault();
      toggle.classList.remove('warehouse__toggle--active');
      document.removeEventListener('keydown', onSearchEscPress);
    }
  };

  const onClickOutside = (evt) => {
    const isClickInside = warehouseTEST.contains(evt.target);
    if (!isClickInside) {
      toggle.classList.remove('warehouse__toggle--active');
      document.removeEventListener('keydown', onSearchEscPress);
    }
  };

  toggle.addEventListener('click', (evt) => {
    evt.stopPropagation(); // предотвратит всплытие до document
    toggle.classList.toggle('warehouse__toggle--active');

    if (toggle.classList.contains('warehouse__toggle--active')) {
      document.addEventListener('keydown', onSearchEscPress);
      document.addEventListener('click', onClickOutside);
    } else {
      document.removeEventListener('keydown', onSearchEscPress);
      document.removeEventListener('click', onClickOutside);
    }
  });
}

// Инициализация для кнопок на вызов модалок.
window.Corners5ProjectLayout.activateRequestButtons((form) => {
  // Это запрос на получение кода.
  const fd = new FormData(form);

  return $.ajax({
    type: 'POST',
    data: fd,
    url: 'https://run.mocky.io/v3/59531f4b-6f78-43cb-9acc-766963fe2512',
    contentType: false,
    processData: false,
    cache: false,
    async: false,
    dataType: 'json',
    success(data) {
      window.Corners5ProjectLayout.summonAlert({
        template: '#alert--request',
        text: data.text,
      });

      return data;
    },
    error(data) {
      window.Corners5ProjectLayout.summonAlert({
        template: '#alert--error',
        text: data.text,
      });
    },
    complete(data) { },
  });
});

// Инициализация для слайдеров на странице.
const sliders = document.querySelectorAll('.slider');
sliders.forEach((el, index) => {
  const slider = window.Corners5ProjectLayout.sliderInit(el);

  // Для обновления слайдера надо взывать .update()
  // slider.update();
});

// Тестовая логика для переключения склада в шапке.
const warehouse = document.querySelector('.warehouse');
if (warehouse) {
  const value = warehouse.querySelector('.warehouse__value');
  const links = warehouse.querySelectorAll('.warehouse__link');
  links.forEach((link) => {
    const name = link.querySelector('.warehouse__name').textContent;

    link.addEventListener('click', () => {
      value.textContent = name;
      alert('common.js 23 строка');
    });
  });
}

// Логика для формы на главной "Поможем в выборе"
const actionСardForm = document.querySelector('.action-card__form');

if (actionСardForm) {
  actionСardForm.addEventListener('bouncerFormValid', () => {
    alert('common.js 33 строка');
  });
}

// Логика для кнопки "В корзину" на детальной странице товара. Начало.
const productBuy = document.querySelector('.product-buy');
if (productBuy) {
  const buyButtonContainer = productBuy.querySelector('.product-buy__cart');
  const countContainer = productBuy.querySelector('.product-buy__count');

  const buyButton = buyButtonContainer.querySelector('button[type="button"]');
  buyButton.addEventListener('click', () => {
    buyButton.setAttribute('disabled', 'disabled');

    // Тут будет логика кодера, чтобы сделать какой-то свой запрос и после успеха заменить кнопку на другой блок или если неуспех то снять атрибут "disabled".
    setTimeout(() => {
      buyButtonContainer.style.display = 'none';
      countContainer.style.display = '';
    }, 1000);
  });
}
// Логика для кнопки "В корзину" на детальной странице товара. Конец.

// Авторизация, восстановление пароля. Начало
const authForms = document.querySelectorAll('.auth__form');
if (authForms.length) {
  authForms.forEach((form) => {
    form.addEventListener('bouncerFormValid', () => {
      console.log('Форма валидна.');
      const fd = new FormData(form);

      return $.ajax({
        type: 'POST',
        data: fd,
        url: 'https://run.mocky.io/v3/59531f4b-6f78-43cb-9acc-766963fe2512',
        contentType: false,
        processData: false,
        cache: false,
        async: false,
        dataType: 'json',
        success() {
          return true;
        },
      });
    });
  });
}
// Авторизация, восстановление пароля. Конец

// Регистрация.Начало
const registrationForms = document.querySelectorAll('.registration__form');
if (registrationForms.length) {
  registrationForms.forEach((registrationForm) => {
    registrationForm.addEventListener('bouncerFormValid', () => {
      console.log('Форма валидна.');
    });
  });
}
// Регистрация.Конец

// Смена телефона в ЛК.
window.Corners5ProjectLayout.personalDataFormPhoneInit(
  (form) => {
    // Это запрос на получение кода.
    const fd = new FormData(form);

    return $.ajax({
      type: 'POST',
      data: fd,
      url: 'https://run.mocky.io/v3/59531f4b-6f78-43cb-9acc-766963fe2512',
      contentType: false,
      processData: false,
      cache: false,
      async: false,
      dataType: 'json',
      success() {
        return true;
      },
    });
  },
  (form) => {
    // Это отправка кода для смены телефона.
    const fd = new FormData(form);

    return $.ajax({
      type: 'POST',
      data: fd,
      url: 'https://run.mocky.io/v3/93676f0a-11bd-4fb4-a418-3e1116a345dc',
      // url: 'https://run.mocky.io/v3/59531f4b-6f78-43cb-9acc-766963fe2512',
      contentType: false,
      processData: false,
      cache: false,
      async: false,
      dataType: 'json',
      success(data) {
        // if (data.status === 'success') {
        //   form.reset();
        // }
        window.Corners5ProjectLayout.summonAlert({
          template: '#alert--request',
          text: data.text,
        });
      },
      error(data) {
        window.Corners5ProjectLayout.summonAlert({
          template: '#alert--error',
        });
      },
      complete(data) { },
    });
  },
);

// Смена пароля в ЛК.
window.Corners5ProjectLayout.personalDataFormPasswordInit((form) => {
  const fd = new FormData(form);

  return $.ajax({
    type: 'POST',
    data: fd,
    url: 'https://run.mocky.io/v3/59531f4b-6f78-43cb-9acc-766963fe2512',
    contentType: false,
    processData: false,
    cache: false,
    async: false,
    dataType: 'json',
    success(data) {
      form.reset();
      window.Corners5ProjectLayout.summonAlert({
        template: '#alert--request',
        text: data.text,
      });

      return true;
    },
    error(data) {
      window.Corners5ProjectLayout.summonAlert({
        template: '#alert--error',
      });
    },
    complete(data) { },
  });
});

// Смена склада отгрузки в ЛК.
window.Corners5ProjectLayout.personalDataFormWarehouseInit((form) => {
  const fd = new FormData(form);

  return $.ajax({
    type: 'POST',
    data: fd,
    url: 'https://run.mocky.io/v3/59531f4b-6f78-43cb-9acc-766963fe2512',
    contentType: false,
    processData: false,
    cache: false,
    async: false,
    dataType: 'json',
    success(data) {
      window.Corners5ProjectLayout.summonAlert({
        template: '#alert--request',
        text: data.text,
      });

      return true;
    },
    error(data) {
      window.Corners5ProjectLayout.summonAlert({
        template: '#alert--error',
      });
    },
    complete(data) { },
  });
});

// Смена ФИО в ЛК.
window.Corners5ProjectLayout.personalDataFormInit((form) => {
  const fd = new FormData(form);

  return $.ajax({
    type: 'POST',
    data: fd,
    url: 'https://run.mocky.io/v3/59531f4b-6f78-43cb-9acc-766963fe2512',
    contentType: false,
    processData: false,
    cache: false,
    async: false,
    dataType: 'json',
    success(data) {
      window.Corners5ProjectLayout.summonAlert({
        template: '#alert--request',
        text: data.text,
      });

      return true;
    },
    error(data) {
      window.Corners5ProjectLayout.summonAlert({
        template: '#alert--error',
      });
    },
    complete(data) { },
  });
});

// Логика для добавления нового адреса доставки в личном кабинете.
window.Corners5ProjectLayout.addNewDeliveryAddressInit((suggestion) => {
  console.log(suggestion); // Получаем данные с дадаты.

  // console.log(suggestion.value === 'г Москва, поселение Краснопахорское, село Красная Пахра, ул Ленина, д 24');
  // if (suggestion.value === 'г Москва, поселение Краснопахорское, село Красная Пахра, ул Ленина, д 24') {
  //   return false;
  // }
  // return true; // Возвращаем true - если адрес входит в зону доставки.

  const fd = suggestion;

  return $.ajax({
    type: 'POST',
    data: fd,
    url: 'https://run.mocky.io/v3/59531f4b-6f78-43cb-9acc-766963fe2512?mocky-delay=1000ms',
    contentType: false,
    processData: false,
    cache: false,
    async: false,
    dataType: 'json',
    success(data) {
      return true;
    },
    error(data) {
      return false;
    },
    complete(data) {
      return false;
    },
  });
});

// Событие для получения значения кол-ва в карточке товара.
window.addEventListener('changeStatusDeliveryAddress', (evt) => {
  const data = evt.detail;
  console.log(data);
});

// Логика для кнопки Отправить на странице товара в Скан-копии спецификации. Начало
const scanWrappers = document.querySelectorAll('.order-detail__scan');
if (scanWrappers) {
  scanWrappers.forEach((scanWrapper) => {
    const scanForm = scanWrapper.querySelector('.order-detail__form');

    if (scanForm) {
      scanForm.addEventListener('submit', (evt) => {
        evt.preventDefault();
        alert('common.js строка 232');
      });
    }
  });
}
// Логика для кнопки Отправить на странице товара в Скан-копии спецификации. Конец

// Логика для выбора всех в Корзине. Начало.
const cart = document.querySelector('.cart');
if (cart) {
  const cartNav = cart.querySelector('.cart-nav');
  const checkboxForAll = cartNav.querySelector('.cart-nav__checkbox input');
  const deleteAll = cartNav.querySelector('.cart-nav__delete');

  if (checkboxForAll) {
    const itemCards = cart.querySelectorAll('.cart-card');
    const itemArray = Array.from(itemCards);

    checkboxForAll.addEventListener('change', () => {
      if (checkboxForAll.checked) {
        itemCards.forEach((el) => {
          const input = el.querySelector('input[type="checkbox"]');
          console.log(input);
          if (input) {
            input.checked = true;
          }
        });
      } else {
        itemCards.forEach((el) => {
          const input = el.querySelector('input[type="checkbox"]');
          if (input) {
            input.checked = false;
          }
        });
      }
    });

    itemCards.forEach((el) => {
      const input = el.querySelector('input[type="checkbox"]');
      if (input) {
        input.addEventListener('change', (evt) => {
          if (!evt.checked) {
            checkboxForAll.checked = false;
          }
        });
      }
    });
  }
}
// Логика для выбора всех в Корзине. Конец.

// Логика для добавления организации в личном кабинете.
const organizationForm = document.querySelector('.organization-form');
if (organizationForm) {
  const form = organizationForm;
  const innInput = form.querySelector('#inn');
  const kppInput = form.querySelector('#kpp');
  const ogrnInput = form.querySelector('#ogrn');
  const companyInput = form.querySelector('#company');
  const federalDistrict = form.querySelector('#federal_district');
  const slug_firstInput = form.querySelector('#slug_first');
  const addressInput = form.querySelector('#address');
  const checkingAccount = form.querySelector('#checking-account');

  window.Corners5ProjectLayout.innOrganizationFormInit((suggestion) => {
    console.log(suggestion.data);

    if (innInput) {
      innInput.value = suggestion.data.inn;
    }

    if (kppInput && suggestion.data.kpp) {
      kppInput.value = suggestion.data.kpp;
      kppInput.nextElementSibling.value = kppInput.value;
    }

    if (ogrnInput && suggestion.data.ogrn) {
      ogrnInput.value = suggestion.data.ogrn;
      ogrnInput.nextElementSibling.value = ogrnInput.value;
    }

    if (companyInput && suggestion) {
      companyInput.value = suggestion.value;
      companyInput.nextElementSibling.value = companyInput.value;
    }

    if (federalDistrict && suggestion.data.address.data.federal_district) {
      federalDistrict.value = suggestion.data.address.data.federal_district;
      federalDistrict.nextElementSibling.value = federalDistrict.value;
    }

    if (slug_firstInput && suggestion.data.slug_first) {
      slug_firstInput.value = suggestion.data.slug_first.value;
      slug_firstInput.nextElementSibling.value = slug_firstInput.value;
    }

    if (addressInput && suggestion.data.address) {
      addressInput.value = suggestion.data.address.value;
      addressInput.nextElementSibling.value = addressInput.value;
    }

    if (checkingAccount) {
      checkingAccount.value = 'Не знаю где брать Расчетный счет';
      checkingAccount.nextElementSibling.value = checkingAccount.value;
    }
  });

  form.addEventListener('bouncerFormValid', () => {
    const fd = new FormData(form);

    return $.ajax({
      type: 'POST',
      data: fd,
      url: 'https://run.mocky.io/v3/59531f4b-6f78-43cb-9acc-766963fe2512',
      contentType: false,
      processData: false,
      cache: false,
      async: false,
      dataType: 'json',
      success() {
        return true;
      },
    });
  });
}

// Пример вызова модального окна.
// window.Corners5ProjectLayout.summonPopUp('#modal--act', true);
// window.Corners5ProjectLayout.setTextareaAutoHeight('.modal__form textarea');
// const modal = document.querySelector('.modal--act');
// const form = modal.querySelector('.modal__form');
// const validatedForm = window.Corners5ProjectLayout.validation.validateForm('.modal__form');

// form.addEventListener('bouncerFormValid', () => {
//   console.log('bouncerFormValid');
// });

// // Пример вызова окна для смены склада.
// if (window.innerWidth > 767) {
//   window.Corners5ProjectLayout.summonPopUp('#warehouse-first', false);
// } else {
//   window.Corners5ProjectLayout.summonPopUp('#warehouse-first', true);
// }
// const warehouseFirstModal = document.querySelector('.warehouse-first');
// if (warehouseFirstModal) {
//   const cancelFirstModal = warehouseFirstModal.querySelector('.warehouse-first__cancel');
//   const acceptFirstModal = warehouseFirstModal.querySelector('.warehouse-first__accept');

//   const inputId = warehouseFirstModal.querySelector('input[name="id"]');
//   const inputRadioList = warehouseFirstModal.querySelectorAll('input[type="radio"]');
//   inputRadioList.forEach((inputRadio) => {
//     inputRadio.addEventListener('change', () => {
//       const { id } = inputRadio.dataset;
//       inputId.value = id;
//     });
//   });

//   if (cancelFirstModal) {
//     cancelFirstModal.addEventListener('click', () => {
//       if (window.innerWidth > 767) {
//         window.Corners5ProjectLayout.removePopUp('.warehouse-first', false);
//       } else {
//         window.Corners5ProjectLayout.removePopUp('.warehouse-first', true);
//       }
//     });
//   }

//   if (acceptFirstModal) {
//     acceptFirstModal.addEventListener('click', () => {
//       const form = document.querySelector('.warehouse-first__form');
//       const fd = new FormData(form);

//       window.Corners5ProjectLayout.summonPopUp('#modal--switch', true);
//       const warehouseSwitchModal = document.querySelector('.modal--switch');
//       if (warehouseSwitchModal) {
//         const form = warehouseSwitchModal.querySelector('.modal__form');
//         form.addEventListener('submit', (evt) => {
//           evt.preventDefault();

//           return $.ajax({
//             type: 'POST',
//             data: fd,
//             url: 'https://run.mocky.io/v3/59531f4b-6f78-43cb-9acc-766963fe2512',
//             contentType: false,
//             processData: false,
//             cache: false,
//             async: false,
//             dataType: 'json',
//             success() {
//               return true;
//             },
//           });
//         });
//       }
//     });
//   }
// }

// Пример вызова логики для добавления адреса в Оформлении заказа.
window.Corners5ProjectLayout.deliveryAddressInit((form) => {
  console.log(form);
});

// Пример вызова логики для загрузки документа в Документы по заказу.
window.Corners5ProjectLayout.copySpecificationInit((form) => {
  console.log();
  const fd = new FormData(form);

  return $.ajax({
    type: 'POST',
    data: fd,
    url: 'https://run.mocky.io/v3/59531f4b-6f78-43cb-9acc-766963fe2512',
    contentType: false,
    processData: false,
    cache: false,
    async: false,
    dataType: 'json',
    success(data) {
      window.Corners5ProjectLayout.summonAlert({
        template: '#alert--request',
        text: data.text,
      });

      return true;
    },
    error(data) {
      window.Corners5ProjectLayout.summonAlert({
        template: '#alert--error',
      });
    },
    complete(data) { },
  });
});

// Пример обработки формы в блоке "Не нашли ответа на свой вопрос? Напишите нам!".
const requestForm = document.querySelector('.request__form');
if (requestForm) {
  requestForm.addEventListener('bouncerFormValid', () => {
    const fd = new FormData(requestForm);

    return $.ajax({
      type: 'POST',
      data: fd,
      url: 'https://run.mocky.io/v3/59531f4b-6f78-43cb-9acc-766963fe2512',
      contentType: false,
      processData: false,
      cache: false,
      async: false,
      dataType: 'json',
      success(data) {
        window.Corners5ProjectLayout.summonAlert({
          template: '#alert--request',
          text: data.text,
        });
        requestForm.reset();
      },
      error(data) {
        window.Corners5ProjectLayout.summonAlert({
          template: '#alert--error',
        });
      },
      complete(data) { },
    });
  });
}

// Пример обработки формы в блоке "Отмена заказа".
const orderCancelForm = document.querySelector('#order-cancel-form');
if (orderCancelForm) {
  orderCancelForm.addEventListener('bouncerFormValid', () => {
    const fd = new FormData(orderCancelForm);

    return $.ajax({
      type: 'POST',
      data: fd,
      url: 'https://run.mocky.io/v3/59531f4b-6f78-43cb-9acc-766963fe2512',
      contentType: false,
      processData: false,
      cache: false,
      async: false,
      dataType: 'json',
      success(data) {
        window.Corners5ProjectLayout.summonAlert({
          template: '#alert--request',
          text: data.text,
        });
        orderCancelForm.reset();
      },
      error(data) {
        window.Corners5ProjectLayout.summonAlert({
          template: '#alert--error',
        });
      },
      complete(data) { },
    });
  });
}

// Пример обработки формы в блоке "Оставить рекламацию".
const reviewForm = document.querySelector('#review-form');
if (reviewForm) {
  reviewForm.addEventListener('bouncerFormValid', () => {
    const fd = new FormData(reviewForm);

    const files = fd.getAll('photo');
    files.forEach((file, index) => {
      fd.append(`photo-${index}`, file);

      fd.delete('photo');
    });

    return $.ajax({
      type: 'POST',
      data: fd,
      url: 'https://run.mocky.io/v3/59531f4b-6f78-43cb-9acc-766963fe2512',
      contentType: false,
      processData: false,
      cache: false,
      async: false,
      dataType: 'json',
      success(data) {
        window.Corners5ProjectLayout.summonAlert({
          template: '#alert--request',
          text: data.text,
        });
        reviewForm.reset();
      },
      error(data) {
        window.Corners5ProjectLayout.summonAlert({
          template: '#alert--error',
        });
      },
      complete(data) { },
    });
  });
}

// Пример вызова логики для добавления меркурикода в Оформлении заказа.
window.Corners5ProjectLayout.deliveryMercuryInit((form) => {
  console.log(form);
});

// Пример инициализации поля ввода кода для списания бонусов.
const codeActionForm = document.querySelector('.code-action__form--code');
// Таймер
const CODE_TIME = 56;

const codeMask = new Inputmask('9{4}', {
  autoUnmask: true,
  showMaskOnHover: false,
  showMaskOnFocus: false,
  placeholder: '',
});

if (codeActionForm) {
  codeMask.mask(document.querySelector('.code-action__form--code .input-code'));

  const validatedForm = window.Corners5ProjectLayout.validation.validateForm(
    '.code-action__form--code',
  );

  window.Corners5ProjectLayout.codeActionInit(CODE_TIME, codeActionForm);
}

// Тестовая логика вывода сообщения с промокодом.
window.Corners5ProjectLayout.summonAlert({
  template: '#alert--star',
});
const alertStar = document.querySelector('.alert--star');
if (alertStar) {
  window.Corners5ProjectLayout.promoCodeCopyInit(alertStar);
}

// MAPS Это массив объектов из файла libsJQ/map-pins.js
// Передаём в функцию массив объектов с координатами, если надо что-то выводить при клике на пин то нужна доработка.
const find = document.querySelector('.find');
if (find) {
  window.Corners5ProjectLayout.multiMapInit(MAPS);
}

// Логика для кнопки "В корзину" на странице Каталога списком. Начало.
const itemCardRowList = document.querySelectorAll('.item-card-row');
if (itemCardRowList.length > 0) {
  itemCardRowList.forEach((itemCardRow) => {
    const buyButtonContainer = itemCardRow.querySelector(
      '.item-card-row__cart',
    );
    const countContainer = itemCardRow.querySelector('.item-card-row__count');

    const buyButton = buyButtonContainer.querySelector('button[type="button"]');
    buyButton.addEventListener('click', () => {
      buyButton.setAttribute('disabled', 'disabled');

      // Тут будет логика кодера, чтобы сделать какой-то свой запрос и после успеха заменить кнопку на другой блок или если неуспех то снять атрибут "disabled".
      setTimeout(() => {
        buyButtonContainer.style.display = 'none';
        countContainer.style.display = '';
      }, 1000);
    });
  });
}
// Логика для кнопки "В корзину" на странице Каталога списком. Конец.

const hawk = new HawkCatcher({
  token:
    'eyJpbnRlZ3JhdGlvbklkIjoiZGI3NzE2NWMtNzFjZi00NWZlLWJkMmEtNTFjYmI1NTY5MzIxIiwic2VjcmV0IjoiNmViNWE5NTktNTIzMC00ZWUxLThiMzEtNTMyMDJmZjY1Y2FkIn0=',
});
