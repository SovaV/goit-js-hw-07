const allCategoriesEl = document.querySelectorAll('.item').length;

console.log('В списке', allCategoriesEl, 'категорий'); // В списке 3 категорий

const titleEl = document.querySelectorAll('h2');
console.log('Категория:', titleEl[0].textContent); // Категория: Животные;

const lastListEl = document.querySelectorAll('.item');
const ZerolistEl = lastListEl[0].lastElementChild.children.length;
console.log('Количество элементов:', ZerolistEl); // Количество элементов: 4

console.log('Категория:', titleEl[1].textContent);
const OnelistEl = lastListEl[1].lastElementChild.children.length;
console.log('Количество элементов:', OnelistEl); // Количество элементов: 3

console.log('Категория:', titleEl[2].textContent);
const TwolistEl = lastListEl[2].lastElementChild.children.length;
console.log('Количество элементов:', TwolistEl); // Количество элементов: 5
