const allCategoriesEl = document.querySelectorAll('.item');

const numberCategories = allCategoriesEl.length;
console.log('В списке', numberCategories, 'категорий'); // В списке 3 категорий

const titleEl = document.querySelectorAll('h2');
console.log('Категория:', titleEl[0].textContent); // Категория: Животные;

const lastListEl = document.querySelectorAll('.item');
const ZerolistEl = lastListEl[0].lastElementChild;
const numberListEl = ZerolistEl.children.length;
console.log('Количество элементов:', numberListEl); // Количество элементов: 4

console.log('Категория:', titleEl[1].textContent);
const OnelistEl = lastListEl[1].lastElementChild;
const OnenumberListEl = OnelistEl.children.length;
console.log('Количество элементов:', OnenumberListEl); // Количество элементов: 3

console.log('Категория:', titleEl[2].textContent);
const TwolistEl = lastListEl[2].lastElementChild;
const TwonumberListEl = TwolistEl.children.length;
console.log('Количество элементов:', TwonumberListEl); // Количество элементов: 5
