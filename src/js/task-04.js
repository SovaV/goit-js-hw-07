const incr = document.querySelector("[data-action='increment']");
const decr = document.querySelector("[data-action='decrement']");
const total = document.querySelector('#value');

let counterValue = 0;
const increment = () => {
  counterValue += 1;

  total.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;

  total.textContent = counterValue;
};

incr.addEventListener('click', increment);
decr.addEventListener('click', decrement);

//====================================================================
// const refs = {
//   incr: document.querySelector("[data-action='increment']"),
//   decr: document.querySelector("[data-action='decrement']"),
//   total: document.querySelector('#value'),
// };

// let counterValue = 0;
// const increment = () => {
//   counterValue += 1;

//   refs.total.textContent = counterValue;
// };

// const decrement = () => {
//   counterValue -= 1;

//   refs.total.textContent = counterValue;
// };

// refs.incr.addEventListener('click', increment);
// refs.decr.addEventListener('click', decrement);

//====================================================================
// const incr = document.querySelector("[data-action='increment']");
// const decr = document.querySelector("[data-action='decrement']");
// const total = document.querySelector('#value');

// const counterValue = 0;
// decr.addEventListener('click', () => {
//   total.textContent -= 1;
//   counterValue = total;
// });
// incr.addEventListener('click', () => {
//   total.textContent += 1;
//   counterValue = total;
// });

//====================================================================
// const actions = document.querySelectorAll('#counter button');
// console.log(actions);

// const counterValue = 0;
// actions[0].addEventListener('click', () => {
//   // const counterValue = document.querySelector('#value');
//   counterValue.textContent -= 1;
//   console.log(counterValue);
// });
// actions[1].addEventListener('click', decrement => {
//   const counterValue = document.querySelector('#value');
//   counterValue.textContent += 1;
//   console.log(counterValue);
// });
