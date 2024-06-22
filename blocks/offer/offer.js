export const offer = () => {
  if (document.querySelector(".offer__slider")) {
    new Swiper(".offer__slider", {
      pagination: {
        el: ".offer__pagination",
        clickable: true,
      },
    });
  }
};