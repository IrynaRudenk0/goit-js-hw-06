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

const ingredientsList = [...ingredients];
const ingredientItem = ingredientsList.forEach(item => {
  item = document.createElement('li');
  item.textContent = ingredientst.map;
  item.addClass = 'item';
});
ingredients.append(ingredientItem);
  console.log(ingredients);
