const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];
const addIngredients = document.querySelector('#ingredients');

const newItem = elem => {
  const itemEl = document.createElement('li');
  itemEl.textContent = elem;
  return itemEl;
};
const ingredientsArray = ingredients.map(ingredient => newItem(ingredient));
addIngredients.append(...ingredientsArray);

// for (let elem of ingredients) {
//   const itemEl = document.createElement('li');
//   itemEl.textContent = elem;
//   addIngredients.append(itemEl);
// }

//===============================================================

// const elements = ingredients.map(option => {
//   const itemEl = document.createElement('li');
//   itemEl.textContent = option;
//   const listEl = document.querySelector('#ingredients');
//   listEl.appendChild(itemEl);
//   return itemEl;
// });
// console.log(elements);

// ============= old school ==================

// const elements = [];
// for (let i = 0; i < ingredients.length; i += 1) {
//   const option = ingredients[i];
//   const itemEl = document.createElement('li');
//   itemEl.textContent = option;
//   const listEl = document.querySelector('#ingredients');
//   listEl.appendChild(itemEl);
//   elements.push(itemEl);
// }
// console.log(elements);
