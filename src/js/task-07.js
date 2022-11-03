const inputEl = document.querySelector(`#font-size-control`);
const spanEl = document.querySelector(`#text`);


function onInputSizeText() {
    text.style.fontSize = inputEl.value + "px";
};

inputEl.addEventListener(`input`, onInputSizeText);