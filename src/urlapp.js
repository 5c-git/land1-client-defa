const ROUTES = {
  Media: {
    // URL для медиафайлов(картиники, видео и тп)

    // локальный
    urlLocal: './assets/images/',

    // удаленный
    urlRemote: '',
  },
  DeliveryData: {
    requests: {
      getDeliveryData: {
        // Карта и цены доставки
        // screenshot: http://joxi.ru/J2bM9RqiMlyzZm

        // локальный
        urlLocal: './assets/images/',

        // удаленный
        urlRemote: '',
      },
    },
  },
  WarehousesMap: {
    requests: {
      getWarehousesData: {
        // Карта доступных складов
        // screenshot: http://joxi.ru/1A5Ny3oHwpQb1r
        // GET

        // локальный успешный
        urlLocal: 'https://run.mocky.io/v3/9c0dc1e9-2639-4f2a-89f2-8c1e14e85de1',

        // локальный неудачный
        // urlLocal: 'https://run.mocky.io/v3/57a10e21-9caa-4f00-8e23-af80eb2a9805'
      },
    },
  },
  RequestContacts: {
    requests: {
      sendRequestContacts: {
        // Форма написать нам.
        // screenshot: https://skr.sh/sIqhyMB4XzE
        // POST

        // локальный успешный
        urlLocal:
          'https://run.mocky.io/v3/59531f4b-6f78-43cb-9acc-766963fe2512',

        // локальный неудачный
        // urlLocal:
        // 'https://run.mocky.io/v3/93676f0a-11bd-4fb4-a418-3e1116a345dc',

        // удаленный
        urlRemote: '',
      },
    },
  },
  Modal: {
    requests: {
      sendModal: {
        // Все модальные окна с проекта, для каждого модального окна своё значение type, считывается с data-type=""
        // screenshot: https://skr.sh/sIqZRp5g1Xv
        // POST

        // локальный успешный
        urlLocal:
          'https://run.mocky.io/v3/59531f4b-6f78-43cb-9acc-766963fe2512',

        // локальный неудачный
        // urlLocal:
        // 'https://run.mocky.io/v3/93676f0a-11bd-4fb4-a418-3e1116a345dc',

        // удаленный
        urlRemote: '',
      },
    },
  },
};

window.routes5 = ROUTES;
