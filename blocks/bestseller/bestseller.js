import { data } from "./data.js";

export const bestseller = () => {
  const cardHTML = data.cards.map((card) => {
    return `
     <li class="bestseller__slider-slide swiper-slide">
      <div class="bestseller__card">
       <img class="bestseller__card-image" src="${card.image}" alt="">
       <div class="bestseller__card-content">
        <header class="bestseller__header">
         <div class="bestseller__slider-info">
         ${card.rating}
          <i class="bestseller__current-slide"></i>             
         </div>
         <div class="bestseller__header-bottom">
          <h6 class="title small decor">Хит продаж</h6>
          <h4 class="bestseller__card-title">${card.title}</h4>
         </div>
       </header>
       <footer class="bestseller__footer">
        <span class="bestseller__desc">
         ${card.text}
        </span>
        <a class="bestseller__slider-button button transparent long" href="#">
         <span>Заказать</span>
         <i class="fa-solid fa-arrow-right-long"></i>
        </a>
       </footer>             
       </div>
      </div>
     </li>
    `;
  }).join("");

  const slider = document.querySelector(".bestseller__slider-wrapper");
  slider.innerHTML = cardHTML;

  const currentSlideElements = document.querySelectorAll(".bestseller__current-slide");

  new Swiper(".bestseller__slider", {
    navigation: {
      nextEl: ".bestseller__menu-button.next",
      prevEl: ".bestseller__menu-button.prev"
    },
    on: {
      init: function() {
        currentSlideElements.forEach((element, index) => {
          element.innerHTML = `${index + 1}/${data.cards.length}`;
        });
      },
      slideChange: function() {
        currentSlideElements.forEach((element, index) => {
          element.innerHTML = `${index + 1}/${data.cards.length}`;
        });
      },
    },
  });
};