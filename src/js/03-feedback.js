import throttle from 'lodash.throttle';

var throttle = require('lodash.throttle');

const LOCAL_STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  emailInput: document.querySelector('.feedback-form input'),
  messageInput: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onSubmit);

savedDataFromStorage();

refs.form.addEventListener(
  'input',
  throttle(event => {
    const formData = new FormData(event.currentTarget);
    let localStorageData = {};

    formData.forEach((value, name) => {
      const obj = {
        [name]: value,
      };

      Object.assign(localStorageData, obj);
    });

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(localStorageData));
  }, 500)
);

function onSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  console.log(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)));
  localStorage.removeItem(LOCAL_STORAGE_KEY);
}

function savedDataFromStorage() {
  const savedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

  if (savedData) {
    refs.emailInput.value = savedData.email;
    refs.messageInput.value = savedData.message;
  }
}
// +
