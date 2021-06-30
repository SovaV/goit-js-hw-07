const allCategoriesEl = document.querySelectorAll('.item');
console.log('В списке', allCategoriesEl.length, 'категорий'); // В списке 3 категорий

for (let elem of allCategoriesEl) {
  console.log('Категория:', elem.firstElementChild.textContent);
  console.log('Количество элементов:', elem.lastElementChild.children.length);
}
// const titleEl = document.querySelectorAll('h2');
// console.log('Категория:', titleEl[0].textContent); // Категория: Животные;

// const lastListEl = document.querySelectorAll('.item');
// const ZerolistEl = lastListEl[0].lastElementChild.children.length;
// console.log('Количество элементов:', ZerolistEl); // Количество элементов: 4

// console.log('Категория:', titleEl[1].textContent);
// const OnelistEl = lastListEl[1].lastElementChild.children.length;
// console.log('Количество элементов:', OnelistEl); // Количество элементов: 3

// console.log('Категория:', titleEl[2].textContent);
// const TwolistEl = lastListEl[2].lastElementChild.children.length;
// console.log('Количество элементов:', TwolistEl); // Количество элементов: 5
// В списке 3 категорий
