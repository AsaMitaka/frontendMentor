const validateEmail = (value: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(value);
};

const isValidPhonenumber = (value: string) => {
  const phoneNumberRegex = /^\+?[0-9]*$/;
  const isValidLength = value.length >= 7 && value.length <= 10;

  return phoneNumberRegex.test(value) && isValidLength;
};

export { validateEmail, isValidPhonenumber };
