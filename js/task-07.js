
const inputEl = document.querySelector(`#font-size-control`);

const textEl = document.querySelector(`#text`);

inputEl.addEventListener(`input`, e => {
    const size = inputEl.value;
    console.log(size);

   textEl.style.fontSize = size + 'px';
});