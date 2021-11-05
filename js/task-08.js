
const form = document.querySelector(`.login-form`);
console.log(form);

const emailEl = document.querySelector('[type="email"]');
console.log(emailEl);

const passwordEl = document.querySelector('[type="password"]');
console.log(passwordEl);


emailEl.addEventListener(`input`, onInputChange);

passwordEl.addEventListener(`input`, onInputChange);


form.addEventListener(`submit`, handleSubmit);

function onInputChange(event) {
    console.log(event.currentTarget.value);
}

function handleSubmit(event) {
    event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return console.log("Please fill in all the fields!");
  }

  console.log(`Login: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}