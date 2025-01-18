// Отримуємо модальне вікно і його елементи
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");

// Додаємо подію для кожного клікабельного зображення
document.querySelectorAll(".clickable").forEach(img => {
  img.addEventListener("click", function () {
    modal.style.display = "flex"; // Відобразити модальне вікно
    modalImg.src = this.src; // Встановити джерело зображення
  });
});

// Закриваємо модальне вікно при кліку на хрестик
closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

// Закриваємо модальне вікно при кліку за межами зображення
modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Знаходимо елементи галереї та кнопки
const gallery = document.querySelector('.gallery');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');

// Встановлюємо початкову позицію скролу
let scrollPosition = 0;

// Додаємо обробники подій для кнопок
leftBtn.addEventListener('click', () => {
  scrollPosition += 500; // Скроли вліво на 200px
  gallery.style.transform = `translateX(${scrollPosition}px)`;
  checkButtons();
});

rightBtn.addEventListener('click', () => {
  scrollPosition -= 500; // Скроли вправо на 200px
  gallery.style.transform = `translateX(${scrollPosition}px)`;
  checkButtons();
});

// Перевірка меж скролу
function checkButtons() {
  const maxScroll = -(gallery.scrollWidth - gallery.parentElement.offsetWidth); // Максимальний скрол
  if (scrollPosition >= 0) {
    scrollPosition = 0; // Зупинка на початку
  } else if (scrollPosition <= maxScroll) {
    scrollPosition = maxScroll; // Зупинка в кінці
  }
  gallery.style.transform = `translateX(${scrollPosition}px)`;
}

