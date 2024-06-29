export const product = () => {
  if (document.querySelector(".product__slider")) {
    let sliderTop = new Swiper(".product__slider-top", {
      spaceBetween: 10,
      freeMode: true,
      watchSlidesProgress: true,
    });
    let sliderThumbs = new Swiper(".product__slider-thumbs", {
      spaceBetween: 10,
      navigation: {
        nextEl: ".product__slider-button.next",
        prevEl: ".product__slider-button.prev",
      },
      thumbs: {
        swiper: sliderTop,
      },
    });

    const thumbs = document.querySelectorAll(".product__slider-thumb");
    thumbs.forEach(item => {
     item.addEventListener("click", () => {
       let currentButton = item;
  
       if (!currentButton.classList.contains("active")) {
        thumbs.forEach(item => {
           item.classList.remove("active");
          });
     
          currentButton.classList.add("active");
       };
      });
     });
  };
};