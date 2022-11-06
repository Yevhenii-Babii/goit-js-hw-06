
const input = document.querySelector("input");
const span = document.querySelector("span")

input.addEventListener('input', updateValue);

function updateValue(event) {
  if (event.target.value === "") {
    span.textContent = "Anonymous"
  } else {
    span.textContent = event.target.value;
  }
}

