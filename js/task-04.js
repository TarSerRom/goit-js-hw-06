
let valueEl = Number(document.querySelector('#value').textContent);

let counterValue = document.querySelector('#value');

const decrement = document.querySelector('#counter').firstElementChild;
const increment = document.querySelector('#counter').lastElementChild;

increment.addEventListener('click', event => {
  valueEl += 1;

  counterValue.innerText = valueEl;
});

decrement.addEventListener('click', event => {
  valueEl -= 1;

  counterValue.innerText = valueEl;
});