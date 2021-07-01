const input = document.querySelector('#validation-input');
const dataAttribute = Number.parseInt(input.getAttribute('data-length'));
input.addEventListener('blur', onInputBlur);

function onInputBlur(e) {
  if (dataAttribute === e.currentTarget.value.length) {
    console.log(e.currentTarget.value);
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
}
