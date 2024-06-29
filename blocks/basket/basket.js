export const basket = () => {
   if (document.querySelector(".basket__item-counter")) {
     const counterInputs = document.querySelectorAll(".basket__item-counter-input");
     const counterAddButtons = document.querySelectorAll(".basket__item-counter-button.add");
     const counterDeleteButtons = document.querySelectorAll(".basket__item-counter-button.delete");
 
     counterInputs.forEach(input => {
       input.addEventListener("input", () => {
         input.value = input.value.replace(/\D/g, '');
       });
     });
 
     counterAddButtons.forEach(button => {
       button.addEventListener("click", () => {
         counterInputs.forEach(input => {
           let value = parseInt(input.value) || 0;
           input.value = value + 1;
         });
       });
     });
 
     counterDeleteButtons.forEach(button => {
       button.addEventListener("click", () => {
         counterInputs.forEach(input => {
           let value = parseInt(input.value) || 1;
           input.value = Math.max(value - 1, 1);
         });
       });
     });
   }
 };