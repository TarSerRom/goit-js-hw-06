const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsItemEl = document.querySelector('#ingredients');

const makeIngridientsList = (elements) => {
  return elements.map(elem => {
    const itemEl = document.createElement("li");
    itemEl.classList.add("item");

    itemEl.textContent = elem;
    return itemEl;
  });
};

const elements = makeIngridientsList(ingredients);
ingredientsItemEl.append(...elements);


