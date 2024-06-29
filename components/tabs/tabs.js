export const tabs = () => {
  if (document.querySelector(".tabs")) {
    const buttons = document.querySelectorAll(".tabs__button");
    buttons[0].classList.add("active");
    
    const items = document.querySelectorAll(".tabs__item");
    items[0].classList.add("active");

    buttons.forEach(item => {
     item.addEventListener("click", () => {
      let currentButton = item;
      let tabID = currentButton.getAttribute("data-tab");
      let currentTab = document.querySelector(tabID);

      if (!currentButton.classList.contains("active")) {
        buttons.forEach(item => {
          item.classList.remove("active");
         });
   
         items.forEach(item => {
           item.classList.remove("active");
          });
   
         currentButton.classList.add("active");
         currentTab.classList.add("active");
      };
     });
    });
  };
};