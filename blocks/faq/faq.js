export const faq = () => {
  if (document.querySelector(".faq__accordion")) {
    const buttonsMore = document.querySelectorAll(".faq__accordion-button-more");
    const contents = document.querySelectorAll(".faq__accordion-content");

    buttonsMore.forEach((button, index) => {
      button.addEventListener("click", () => {
        button.classList.toggle("active");
        contents[index].classList.toggle("active");
      });
    });
  }
}