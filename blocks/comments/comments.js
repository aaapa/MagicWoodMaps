import { data } from "./data.js";

export const comments = () => {
  if (document.querySelector(".comments__slider-wrapper")) {
    const cardHTML = data.cards.map((card) => {
      return `
        <li class="comments__slider-slide swiper-slide">
          <div class="comments__card">
            <header class="comments__card-header">
              <img class="comments__card-image" src="${card.image}" alt="">
              <h5 class="comments__card-title">${card.title}</h5>
            </header>
            <footer class="comments__card-footer">
              <span class="comments__card-text">${card.text}</span>
              <div class="comments__card-author">
                <img class="comments__card-author-image" src="${card.author.image}" alt="">
                <div class="comments__card-author-info">
                  <span class="comments__card-author-name">${card.author.name}</span>
                  <time class="comments__card-date-created" datetime="${card.author.date}">${card.author.date}</time>
                </div>
              </div>
            </footer>
          </div>
        </li>
      `;
    }).join("");
  
    const slider = document.querySelector(".comments__slider-wrapper");
    slider.innerHTML = cardHTML;
  
    new Swiper(".comments__slider", {
      navigation: {
        nextEl: ".comments__button.next",
        prevEl: ".comments__button.prev"
      },

      breakpoints: {
        320: {
          spaceBetween: 32,
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
        480: {
          spaceBetween: 50,
          slidesPerView: 2,
          slidesPerGroup: 2,
        }
      }
    });
  };
};