// Напиши скрипт, який для кожного елемента масиву ingredients:

//1. Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// 2. Додасть назву інгредієнта як його текстовий вміст.
// 3. Додасть елементу клас item.
// 4. Після чого, вставить усі <li> за одну операцію у список ul.ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ul = document.querySelector("#ingredients");

const ingr = ingredients.map((element) => {
  const li = document.createElement("li");
  li.textContent = element;
  // console.log(li);
  return li;
});

ul.append(...ingr);

console.log(ul.children);
