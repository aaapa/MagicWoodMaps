export const header = () => {
  const header = document.querySelector(".header");
  const menu = document.querySelector(".header__menu")
  const menuOpenButton = document.querySelector(".header__menu-button")
  const menuCloseButton = document.querySelector(".header__menu-close-button");

  menuOpenButton.addEventListener("click", () => {
    menu.style.display = "flex";
    header.classList.add("--open");
  });

  menuCloseButton.addEventListener("click", () => {
    menu.style.display = "none";
    header.classList.remove("--open");
  });
};