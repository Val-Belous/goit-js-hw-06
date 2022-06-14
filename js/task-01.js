// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const ul = document.querySelector("#categories");
const li = document.querySelectorAll(".item");
console.log("Number of categories: " + li.length);
li.forEach(function (number) {
  console.log("Category: " + number.firstElementChild.textContent);
  console.log("Elements: " + number.lastElementChild.children.length);
});

// const numberOfChildren = ul.children.length;

// const message = `Number of categories: ${numberOfChildren}`;
