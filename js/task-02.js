const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Створить окремий елемент < li >.Обов'язково використовуй метод document.createElement().

const ingredientsEl = document.createElement("li")

// Додасть назву інгредієнта як його текстовий вміст.
ingredientsEl.forEach (ingredient => {
  ingredientsEl.textContent = ingredient(i)
}); 

// Додасть елементу клас item.
  ingredientsEl.addClass = "item";

// Після чого, вставить усі < li > за одну операцію у список ul#ingredients.
#ingredients.append(ingredientsEl)
