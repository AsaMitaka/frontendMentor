const validateForm = (event) => {
  event.preventDefault();
  console.log('click');

  const emailInput = document.querySelector('.main__form-input');
  const errorText = document.querySelector('.error');
  const isValid = validateEmail(emailInput.value);

  if (isValid) {
    errorText.textContent = '';
  } else {
    errorText.textContent = 'Please provide a valid email address';
    emailInput.classList.add('error');
  }
};

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(email);
};

const mainForm = document.querySelector('.main__form');
mainForm.addEventListener('submit', validateForm);
