let counterValue = 0;

const btnNumberOne = document.querySelector("[data-action='increment']");
const btnNumberTwo = document.querySelector("[data-action='decrement']");
const counterSpan = document.querySelector (`#value`);






const increment = () => {
    counterValue++;
    counterSpan.textContent = counterValue;
  
};




const decrement = () => {
    counterValue--;
    counterSpan.textContent = counterValue;
};


btnNumberOne.addEventListener(`click`, increment);  
btnNumberTwo.addEventListener(`click`, decrement);  