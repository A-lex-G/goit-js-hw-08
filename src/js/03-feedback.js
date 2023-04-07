const LOCAL_STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
form.addEventListener('submit', onSubmit);
function onSubmit(event) {
  event.preventDefault();
  console.dir(event.currentTarget.elements);

  const formData = new FormData(event.currentTarget);
  console.log(formData);

  formData.forEach((value, name) => {
    console.log(name, value);

    // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(localStorageData));
  });

  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
  //   localStorage.setItem(
  //     LOCAL_STORAGE_KEY,
  //     JSON.stringify(form.elements.message.value)
  //   );
}

// console.dir(form);
// console.log(form);

// const emailInput = form.firstElementChild.firstElementChild;
// console.log(emailInput);
// emailInput.addEventListener('input', onEmailInput);
// function onEmailInput(event) {
//   event.preventDefault();

//   //   emailValue = event.currentTarget.value;
//   //   console.log(event.currentTarget.value);
// }

// const messageInput = emailInput.nextSibling.firstElementChild;
// console.log(messageInput);

// messageInput.addEventListener('input', onMessageInput);
// function onMessageInput(event) {
//   event.preventDefault();

//   //   messageValue = event.currentTarget.textContent;
//   //   console.log(event.currentTarget);
//   //   console.log(event.currentTarget.textContent);
// }
