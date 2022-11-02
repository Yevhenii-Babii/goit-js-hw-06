const itemRef = document.querySelectorAll(`.item`);
console.log(`Number of categories:${itemRef.length}`);

const textRef = document.querySelectorAll(`h2`);
textRef.forEach (elem => {(console.log(`Category:`, elem.textContent))})
const array = [...itemRef]
  .map( el => `Category: ${el.children[0].textContent}
Elements: ${el.children[1].children.length}`
  ).join(`\n`)
  console.log(array);


