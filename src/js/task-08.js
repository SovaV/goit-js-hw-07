let render = document.querySelector('[data-action="render"]');
let destroy = document.querySelector('[data-action="destroy"]');
let boxes = document.querySelector('#boxes');
let control = document.querySelector('#controls input');
let amount = '';

function getAmount() {
  let amount = control.value;
  console.log(amount);
  createBoxes(amount);
}
let basicSize = 30;

function createBoxes(amount) {
  // let basicSize = 30;
  boxes.style.cssText = `display: flex; `;
  boxes.innerHTML = ''; // Рендер дива
  let fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    // let size = basicSize + i * 10;
    const div = document.createElement('div');
    div.style.cssText = `margin: 1px; width: ${basicSize}px; height: ${basicSize}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
    basicSize += 10;
    fragment.appendChild(div);
  }
  boxes.appendChild(fragment);
}
function destroyBoxes() {
  basicSize = 30;

  boxes.innerHTML = ''; // Очистить
}
function random() {
  return Math.random() * 256; // рандомний цвет
}
render.addEventListener('click', getAmount);
destroy.addEventListener('click', destroyBoxes);
