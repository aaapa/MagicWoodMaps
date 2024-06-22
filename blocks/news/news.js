import { data } from "./data.js";

export const news = () => {
  if (document.querySelector(".news__list")) {
    const cardHTML = data.cards.map((card) => {
      return `
        <li>
         <article class="news__card">
          <header class="news__card-header">
           <img class="news__card-image" src="${card.image}" alt="">
          </header>
          <div class="news__card-main">
           <time class="news__card-date" datetime="${card.date}">${card.date}</time>
           <h4 class="news__card-title">${card.title}</h4>
          </div>
          <footer class="news__card-footer">
           <a class="news__card-link" href="${card.link}">
            <span>Читать</span>
            <i class="news__card-link-icon fa-solid fa-arrow-right-long"></i>
           </a>
          </footer>
         </article>
        </li>
      `;
    }).join("");
  
    const list = document.querySelector(".news__list");
    list.innerHTML = cardHTML;
  };
};