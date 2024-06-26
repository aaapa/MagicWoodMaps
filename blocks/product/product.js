export const product = () => {
  if (document.querySelector(".product")) {
   const productSlider = new Swiper(".product__slider", {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });
    new Swiper(".product__slider-bottom", {
      spaceBetween: 10,
      navigation: {
        nextEl: ".product__slider-button.next",
        prevEl: ".product__slider-button.prev",
      },
      thumbs: {
        swiper: productSlider,
      },
    });
  };
};