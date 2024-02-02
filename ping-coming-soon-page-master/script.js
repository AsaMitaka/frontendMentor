const mainForm = document.querySelector('.main__form');
const input = document.querySelector('.main__form-input');
const error = document.querySelector('.main__error');

const isEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(email);
};
const isError = () => {
  error.classList.add('errorinput');
  error.textContent = 'Please provide a valid email address';
};

const isValid = () => {
  input.value = 'Valid';
  error.classList.remove('errorinput');
  error.textContent = '';
};

const handleSubmit = (e) => {
  e.preventDefault();
  const emailValue = input.value.trim();
  const isValidEmail = isEmail(emailValue);

  isValidEmail ? isValid() : isError();
};

mainForm.addEventListener('submit', handleSubmit);
