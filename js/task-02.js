const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');
console.log(list);

const elements = ingredients.map((ingredient) => `<li class="item">${ingredient}</li>`)
.join("");
console.log(elements);

list.innerHTML = elements;
