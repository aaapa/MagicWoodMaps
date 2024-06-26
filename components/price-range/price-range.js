export const priceRange = () => {
  if (document.querySelector(".price-range")) {
    const range = document.querySelector(".price-range__slider");
    const inputMin = document.querySelector(".price-range__input.min");
    const inputMax = document.querySelector(".price-range__input.max");
  
    if (!range || !inputMin || !inputMax) return;
  
    const inputs = [inputMin, inputMax];
    
    noUiSlider.create(range, {
        start: [20, 900],
        connect: true,
        range: {
          "min": 0,
          "max": 900
        },
        step: 1
      }
    );
    
    range.noUiSlider.on("update", function (values, handle) {
      inputs[handle].value = parseInt(values[handle]);
      updateTippyContent(inputs[handle]);
    });
    
    inputMin.addEventListener("change", function () {
      range.noUiSlider.set([this.value, null]);
      updateTippyContent(this);
    });
    
    inputMax.addEventListener("change", function () {
      range.noUiSlider.set([null, this.value]);
      updateTippyContent(this);
    });
    
    addTippyContent();
  }
};

export const addTippyContent = () => {
  const inputElements = document.querySelectorAll("input");

  inputElements.forEach(input => {
    input.setAttribute("data-tippy-content", input.value);
  });
};

export const updateTippyContent = (input) => {
  input.setAttribute("data-tippy-content", input.value);
};

const init = () => {
  priceRange();
};

window.addEventListener("DOMContentLoaded", init);