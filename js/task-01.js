// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories,
//     знайде і виведе в консоль текст заголовку елемента(тегу < h2 >) і кількість елементів в категорії(усіх < li >, вкладених в нього).

const categoriesItem = document.querySelectorAll('.item');
// const categories = document.querySelector("#categories")

console.log(`Number of categories: ${categoriesItem.length}`);

const categoriesDetails = categoriesItem.forEach(item => {
    const categoriesItemsHeading = item.firstElementChild.textContent;
    console.log(`Category: ${categoriesItemsHeading}`);
    const categoriesItemsEl = item.lastElementChild.children;
    console.log(`Elements: ${categoriesItemsEl.length}`)
        
});
