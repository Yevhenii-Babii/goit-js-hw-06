const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const array = document.querySelector(`#ingredients`);
const products = ingredients.forEach((el)=> { 
const productsLi = document.createElement(`li`)
productsLi.textContent = el;
productsLi.classList.add(`item`)
const arrayGeneral = [];
arrayGeneral.push(productsLi);
array.append(...arrayGeneral)
})

console.log(array);
