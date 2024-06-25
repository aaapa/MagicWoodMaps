import { data } from "./data.js";

export const productCategory = () => {
  if (document.querySelector(".product-category")) {
    const cardsPerSlide = 3;
    const slides = [];
    
    for (let i = 0; i < data.cards.length; i += cardsPerSlide) {
      const slideCards = data.cards.slice(i, i + cardsPerSlide);
      const slideHTML = slideCards.map((card) => {
        return `
        <div class="product-category__card">
          <img class="product-category__card-image" src="${card.image}" alt="">
          <div class="product-category__card-info">
            <h5 class="product-category__card-title">${card.title}</h5>
            <div class="product-category__card-price">
              <strong class="product-category__card-price-text new">${card.price.discount}</strong>
              <del class="product-category__card-price-text old">${card.price.old}</del>
              ${card.rating}
            </div>
            <span class="product-category__desc">
              ${card.text}
            </span>
            <menu class="product-category__card-menu">
              <li>
                <a class="product-category__card-button button transparent" href="#!">
                  <span>Купить в 1 клик</span>
                </a>
              </li>
              <li>
                <button class="product-category__card-menu-button" type="button" aria-label="Добавить в корзину" data-tippy-content="Добавить в корзину">
                  <i class="fa-solid fa-bag-shopping"></i>
                </button>
              </li>
              <li>
                <button class="product-category__card-menu-button" type="button" aria-label="Добавить в избранное" data-tippy-content="Добавить в избранное">
                  <i class="fa-regular fa-heart"></i>
                </button>
              </li>
              <li>
                <a class="product-category__card-link" href="#!">
                  <span>Просмотреть</span>
                  <i class="fa-solid fa-arrow-right"></i>
                </a>
              </li>
            </menu>
          </div>
        </div>
        `;
      }).join("");
      
      slides.push(`<div class="product-category__slider-slide swiper-slide">${slideHTML}</div>`);
    }

    const sliderHTML = slides.join("");
    
    const slider = document.querySelector(".product-category__slider-wrapper");
    slider.innerHTML = sliderHTML;

    const totalCards = data.cards.length;
    let foundHTML = `<span>Всего позиций: ${totalCards}</span>`;

    const totalCardsElement = document.querySelector(".product-category__total-cards");
    totalCardsElement.innerHTML = foundHTML;

    new Swiper(".product-category__slider", {
      pagination: {
        el: ".product-category__pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return `<span class="${className}">${index + 1}</span>`;
        },
      },
    });
  }
}