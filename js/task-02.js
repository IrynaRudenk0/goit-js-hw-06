const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі < li > за одну операцію у список ul#ingredients.

const ingredientsList = document.querySelector('#ingredients');

const ingredientItems = ingredients.map(item => {
  const listItem = document.createElement('li');
  listItem.textContent = item;
  listItem.classList.add('item');
  return listItem;
});

const makeList = ingredients => {
  return ingredientItems;
}

const listEl = makeList(ingredients)
ingredientsList.append(...listEl)
