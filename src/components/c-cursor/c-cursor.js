import './c-cursor.scss';
import { gsap } from 'gsap';

const magneticInit = () => {
  // Кастомный курсор
  const cursor = document.querySelector('.c-cursor__pointer');
  const page = document.body;

  gsap.set(cursor, { autoAlpha: 1 });

  // Быстрые функции для плавного движения курсора
  const cursorX = gsap.quickTo(cursor, "x", { duration: 0.3 });
  const cursorY = gsap.quickTo(cursor, "y", { duration: 0.3 });

  // Движение мыши
  function moveMousePos(e) {
    if (e.target.classList.contains('button-magnetic')) return;

    cursorX(e.clientX);
    cursorY(e.clientY);
  }

  // Ховеры по ссылкам / кнопкам
  function updateOnHover(e) {
    const { tagName, classList, parentElement } = e.target;

    if (
      tagName === 'LABEL' ||
      tagName === 'A' ||
      tagName === 'BUTTON' ||
      classList.contains('is-cursor-hover') ||
      (parentElement?.tagName === 'A' && tagName === 'IMG')
    ) {
      document.documentElement.classList.toggle('is-hover');
    }
  }

  // Подключаем обработчики движения и ховеров
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  if (!isTouchDevice) {
    page.addEventListener('mousemove', moveMousePos);
    page.addEventListener('mouseover', updateOnHover);
    page.addEventListener('mouseout', updateOnHover);
  }


  // Магнитное притяжение
  const magneticButtons = [...document.querySelectorAll('.button-magnetic')];

  magneticButtons.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const relX = e.clientX - rect.left;
      const relY = e.clientY - rect.top;

      // Курсор прилипает к кнопке
      const cursorTargetX = rect.left + rect.width / 2 + (relX - rect.width / 2) / 1.5;
      const cursorTargetY = rect.top + rect.height / 2 + (relY - rect.height / 2) / 1.5;
      cursorX(cursorTargetX);
      cursorY(cursorTargetY);

      // Сама кнопка слегка тянется к курсору
      gsap.to(btn, {
        x: ((relX - rect.width / 2) / rect.width) * 50,
        y: ((relY - rect.height / 2) / rect.height) * 50,
        duration: 0.3,
        ease: 'power2.out'
      });
    });

    btn.addEventListener('mouseout', () => {
      // Возвращаем кнопку на место с пружинкой
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: 'elastic.out(1, 0.4)'
      });
    });
  });
};


// const magneticInit = () => {
//   // Проверяем, есть ли мышь (не тач)
//   const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
//   if (isTouchDevice) {
//     // на планшетах/телефонах магнит не нужен
//     return;
//   }

//   // Находим все кнопки, которые должны магнититься
//   const magneticButtons = [...document.querySelectorAll('.button-magnetic')];

//   magneticButtons.forEach(btn => {
//     btn.addEventListener('mousemove', (e) => {
//       const rect = btn.getBoundingClientRect();
//       const relX = e.clientX - rect.left;
//       const relY = e.clientY - rect.top;

//       // Случайный «разброс» силы, чтобы кнопка вела себя живее
//       const randomForce = 45 + Math.random() * 10; // 45–55 px

//       gsap.to(btn, {
//         x: ((relX - rect.width / 2) / rect.width) * randomForce,
//         y: ((relY - rect.height / 2) / rect.height) * randomForce,
//         duration: 0.3,
//         ease: 'power2.out'
//       });
//     });

//     btn.addEventListener('mouseout', () => {
//       // Возвращаем кнопку на место с пружинкой
//       gsap.to(btn, {
//         x: 0,
//         y: 0,
//         duration: 0.6,
//         ease: 'elastic.out(1, 0.4)'
//       });
//     });
//   });
// };

magneticInit();
