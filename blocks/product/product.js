export const product = () => {

  const productSlider = document.querySelector(".product__slider");

  if (productSlider) {

    const productSliderTop = productSlider.querySelector(".product__slider-top");
    const productSliderThumbs = productSlider.querySelector(".product__slider-thumbs");

    let sliderThumbs = new Swiper(productSliderThumbs, {
      spaceBetween: 10,
    });


    let sliderTop = new Swiper(productSliderTop, {
      navigation: {
        nextEl: ".product__slider-button.next",
        prevEl: ".product__slider-button.prev",
      },
      spaceBetween: 10,
      freeMode: true,
      watchSlidesProgress: true,
      loop: true,

      thumbs: {
        swiper: sliderThumbs,
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