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
const ingredientItems = ingredients.forEach(item => {
  const items = document.createElement('li');
  // item.textContent = item;
  // item.addClass = 'item';
  items.innerHTML = item;
  ingredientsList.append(items);
  parent.append(...items);
});
  console.log(ingredientItems);

