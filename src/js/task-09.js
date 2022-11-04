function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonChange = document.querySelector(`.change-color`);
const spanEl = document.querySelector(`.color`);
const bodyEl = document.querySelector(`body`)
console.log(bodyEl);


function onButtonChange (event) {
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanEl.textContent =  getRandomHexColor();

};

buttonChange.addEventListener(`click`, onButtonChange)