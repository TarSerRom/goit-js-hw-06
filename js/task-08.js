
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
    return alert("Please fill in all the fields!");
  }

  const formElements = event.currentTarget.elements;

  const emailEntered = formElements.email.value;
  const passwordEntered = formElements.password.value;
  
  const objRes = { email:emailEntered , password:passwordEntered};
  console.log(objRes);
  
  event.currentTarget.reset();
}
