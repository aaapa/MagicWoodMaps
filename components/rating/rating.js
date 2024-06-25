export const rating = () => {
  if (document.querySelector(".rating")) {
    const processRatings = () => {
      const ratingElements = document.querySelectorAll(".rating:not(.processed)");
  
      ratingElements.forEach((ratingElement) => {
        const [filledStars, unfilledStars] = ratingElement.dataset.ratingStars.split(",").map(Number);
  
        let starHTML = "";
  
        for (let i = 0; i < filledStars; i++) {
          starHTML += `
            <span class="rating__star">
              <i class="fa-solid fa-star"></i>
            </span>
          `;
        }
  
        ratingElement.innerHTML = starHTML;
  
        const starElements = ratingElement.querySelectorAll(".rating__star");
  
        for (let i = 0; i < unfilledStars; i++) {
          starElements[filledStars - 1 - i].innerHTML = `
            <i class="fa-regular fa-star"></i>
          `;
        }
  
        ratingElement.classList.add('processed');
      });
    };
  
    processRatings();
  
    const observer = new MutationObserver(() => {
      processRatings();
    });
  
    observer.observe(document.body, { childList: true, subtree: true });
  }
};

rating();
