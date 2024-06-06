// Створи слайдер за допомогою ES6 класу
// Під час ініціалізації екземпляра класу він має приймати
// 1 Посилання на контейнер в середині якого буде генеруватись слайдер
// 2 Масив з посиланнями на зображення які потрібно відмалювати
// Слайдер має мати кнопки для навігації "Вперед" "Назад"
// Слайдер має показувати на якому ми зображені з загальної кількості зображень ми знаходимось

const cats = [
  'https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg',
  'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png',
  'https://static.scientificamerican.com/sciam/cache/file/32665E6F-8D90-4567-9769D59E11DB7F26_source.jpg?w=1200',
];

class Slider {
  constructor(container, array) {
    this.container = container;
    this.array = array;
  }

  init() {
    if (!Array.isArray(this.array) || !this.array.length) {
      alert('Gimme an array of images!');
      return;
    }

    const sliderEl = document.querySelector(this.container);

    const markUp = `
    <ul class="slider-container">
      <li><button class="js-prev">&larr;</button></liv>
      <li class="active" data-index="0">
        <img src="${this.array[0]}">
        <span class="js-pagination">${1} of ${this.array.length}</span>
      </li>
      <li><button class="js-next">&rarr;</button></liv>
    </ul>
    `;
    sliderEl.insertAdjacentHTML('afterbegin', markUp);

    this.prevEl = document.querySelector('.js-prev');
    this.nextEl = document.querySelector('.js-next');
    this.active = document.querySelector('.active');

    this.#handleArrowsDisabling();

    this.prevEl.addEventListener('click', this.#handlerPrev);
    this.nextEl.addEventListener('click', this.#handlerNext);
  }

  #updateImage(direction) {
    this.active.dataset.index =
      direction === 'next'
        ? Number(this.active.dataset.index) + 1
        : Number(this.active.dataset.index) - 1;

    this.active.innerHTML = `<img src="${
      this.array[Number(this.active.dataset.index)]
    }" alt="image" /><span>${Number(this.active.dataset.index) + 1} of ${
      this.array.length
    }</span>`;
  }

  #handlerPrev = () => {
    if (this.active.dataset.index > 0) {
      this.#updateImage('prev');
    }
    this.#handleArrowsDisabling();
  };

  #handlerNext = () => {
    if (this.active.dataset.index < this.array.length - 1) {
      this.#updateImage('next');
    }
    this.#handleArrowsDisabling();
  };

  #handleArrowsDisabling() {
    if (this.active.dataset.index == this.array.length - 1) {
      this.nextEl.setAttribute('disabled', 'true');
    } else {
      this.nextEl.removeAttribute('disabled');
    }

    if (this.active.dataset.index == 0) {
      this.prevEl.setAttribute('disabled', 'true');
    } else {
      this.prevEl.removeAttribute('disabled');
    }
  }
}

const slider = new Slider('.js-slider', cats);
slider.init();

console.log(slider);
