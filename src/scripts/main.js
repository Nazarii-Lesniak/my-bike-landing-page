'use strict';

const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  window.alert('Thank you! The form has been successfully submitted!');

  form.reset();
});
