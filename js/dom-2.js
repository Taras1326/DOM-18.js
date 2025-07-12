

// Завдання 1

// В HTML є список категорій ul#categories.

// Тварини

// <ul>
//  <li>Кіт</li>
//  <li>Хом'як</li>
//  <li>Кінь</li>
//  <li>Папуга</li>
// </ul>

// Продукти

// <ul>
//  <li>Хліб</li>
//  <li>Петрушка</li>
//  <li>Сир</li>
// </ul>

// Технології

// <ul>
//  <li>HTML</li>
//  <li>CSS</li>
//  <li>JavaScript</li>
//  <li>React</li>
//  <li>Node</li>
// </ul>


// Напиши скрипт, який виконає наступні операції.


// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item. Вийде 'У списку 3 категорії.'.


// Для кожного елемента li.item в списку ul#categories, знайде і виведе в консоль текст заголовка елемента (тега h2) і кількість елементів в категорії (всіх вкладених в нього елементів li).


// Наприклад, для першої категорії вийде:



// Категорія: Тварини
// Кількість елементів: 4

const categories = document.querySelectorAll('#categories > li.item');
console.log(`У списку ${categories.length} категорії.`);

categories.forEach(category => {
  const title = category.querySelector('h2').textContent;
  const items = category.querySelectorAll('ul > li');
  console.log(`Категорія: ${title}`);
  console.log(`Кількість елементів: ${items.length}`);
});

// Завдання 2
const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];

const ingredientsList = document.getElementById('ingredients');
const items = ingredients.map(ingredient => {
  const li = document.createElement('li');
  li.textContent = ingredient;
  return li;
});
ingredientsList.append(...items);

// Завдання 3
const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.getElementById('gallery');
const galleryMarkup = images
  .map(
    ({ url, alt }) => `<li><img src="${url}" alt="${alt}" /></li>`
  )
  .join('');
gallery.insertAdjacentHTML('beforeend', galleryMarkup);

// Завдання 4
let counterValue = 0;
const counterDisplay = document.getElementById('value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

const updateCounter = () => {
  counterDisplay.textContent = counterValue;
};

const increment = () => {
  counterValue += 1;
  updateCounter();
};

const decrement = () => {
  counterValue -= 1;
  updateCounter();
};

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);