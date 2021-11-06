
const bodyEl = document.querySelector('body');
console.log(bodyEl);

const btn = document.querySelector(`.change-color`);
console.log(btn);

const colorName = document.querySelector(`.color`);


btn.addEventListener('click', e => {
  
  const randomColor = getRandomHexColor();
  console.log(randomColor);
  bodyEl.style.backgroundColor = randomColor;

  colorName.textContent = randomColor;

}
);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
