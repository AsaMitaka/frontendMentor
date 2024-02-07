import { useEffect, useState } from 'react';
import { Buttons, Input } from '.';
import { useUser } from '../context/userContext';
import { usePage } from '../context/pageContext';
import { isValidPhonenumber, validateEmail } from '../utils/validate';

const Info = () => {
  const { user, setUser } = useUser();
  const { nextPage } = usePage();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phonenumber, setPhonenumber] = useState(user.phonenumber);
  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phonenumber: '',
  });

  useEffect(() => {
    if (name && email && phonenumber) setIsValid(true);
  }, [name, email, phonenumber]);

  const handleValid = () => {
    const isValidName = name.length >= 4 && name.length <= 15;
    const isValidEmail = validateEmail(email);
    const isValidPhone = isValidPhonenumber(phonenumber);

    setErrors((state) => ({
      ...state,
      name: isValidName ? '' : 'Name length must be between 4 and 15',
      email: isValidEmail ? '' : 'Email is not valid',
      phonenumber: isValidPhone
        ? ''
        : 'Number is not valid length must be between 7 and 10',
    }));

    return isValidName && isValidEmail && isValidPhone;
  };

  const handleNextPage = () => {
    const isValidateData = handleValid();
    if (!isValidateData) return;

    setUser({ name, email, phonenumber });
    nextPage();
  };

  return (
    <>
      <div className="page__block">
        <h1 className="page__block-title">Personal Info</h1>
        <h3 className="page__block-subtitle">
          Please provide your name, email address, and phone number.
        </h3>
        <div className="page__block-content">
          <Input
            actionLabel="Name"
            errorMsg={errors.name}
            htmlFor="name"
            onChange={(e) => setName(e.target.value)}
            placeholder="name"
            value={name}
          />
          <Input
            actionLabel="Email Address"
            errorMsg={errors.email}
            htmlFor="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@email.com"
            type="email"
            value={email}
          />
          <Input
            actionLabel="Phone Number"
            errorMsg={errors.phonenumber}
            htmlFor="phonenumber"
            onChange={(e) => setPhonenumber(e.target.value)}
            placeholder="+123124124"
            type="text"
            value={phonenumber}
          />
        </div>
      </div>
      <Buttons disabled={!isValid} handleNextPage={handleNextPage} />
    </>
  );
};

export default Info;
