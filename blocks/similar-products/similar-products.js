import { data } from "./data.js";

export const similarProducts = () => {
  if (document.querySelector(".similar-products__list")) {
   const cardHTML = data.cards.map((card) => {
     return `
         <li class="similar-products__list-item">
          <div class="similar-products__card">
           <header class="similar-products__card-header">
            <img class="similar-products__card-image" src="${card.image}" alt="">
            ${card.rating}
           </header>
           <div class="similar-products__card-main">
            <h5 class="similar-products__card-title">${card.title}</h5>
           </div>
           <footer class="similar-products__card-footer">
            <strong class="similar-products__card-price">${card.price} ₴</strong>
            <a class="similar-products__card-link" href="${card.link}"></a>
           </footer>
          </div>
         </li>
     `;
   }).join("");
 
   const list = document.querySelector(".similar-products__list");
   list.innerHTML = cardHTML;    
  };
};