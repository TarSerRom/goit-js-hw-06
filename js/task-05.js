
let inputEl = document.querySelector(`#name-input`);
inputEl.addEventListener(`input`, onInputChange);

let outputEl = document.querySelector(`#name-output`);


function onInputChange(event) {
    inputEl = event.currentTarget.value;
    console.log(inputEl);  

    if (inputEl !== '') {
        outputEl.innerText = inputEl;
    }
    else {
        outputEl.innerText = 'Anonymous';
    }
}
;