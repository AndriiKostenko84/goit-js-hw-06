const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const AllingredientsEl = document.querySelector('#ingredients');

const elements = ingredients.map((ingredients) => {
  const ingredientsEl = document.createElement('li');
  ingredientsEl.textContent = ingredients;
  ingredientsEl.classList.add('item');
  return ingredientsEl;
});
console.log(elements);

AllingredientsEl.append(...elements);