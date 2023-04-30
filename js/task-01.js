
const categories = document.querySelectorAll('#categories');
const categoriesItem = categories.children;
console.log('Number of categories:',categoriesItem);

const categoriesItemTitle = document.querySelectorAll('li h2');
const categoriesItemChildren = categoriesItem.children;
console.log(categoriesItemTitle)
console.log(categoriesItemChildren.length)