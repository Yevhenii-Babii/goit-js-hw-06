let input = document.querySelector(`#validation-input`);
let inputValue = Number(input.dataset.length);


input.addEventListener(`blur`, onInputFocus);

function onInputFocus() {
   
if (input.value.length === inputValue) {
    input.classList.add("valid")
    input.classList.remove("invalid")
} else  {
    input.classList.add("invalid")
    input.classList.remove("valid")
}
};



