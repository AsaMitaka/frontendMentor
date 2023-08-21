import { ChangeEvent, FormEvent } from 'react';
import useStore from '../../store/store';
import PersonalInfo from '../../@types/userInfo';

const Personal = () => {
  const personalInfo = useStore((state: PersonalInfo) => state.userInfo.personalInfo);
  const setHandlePersonalInfo = useStore((state: PersonalInfo) => state.setPersonalInfo);
  const onHandleNext = useStore((state: PersonalInfo) => state.setNextIndex);

  const setName = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;

    if (name.length > 20) {
      return;
    }

    setHandlePersonalInfo({ ...personalInfo, name });
  };

  const setEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;

    if (email.length > 22) {
      return;
    }

    setHandlePersonalInfo({ ...personalInfo, email });
  };

  const setPhoneNumber = (e: ChangeEvent<HTMLInputElement>) => {
    const phoneNumber = e.target.value;

    if (phoneNumber.length > 14) {
      return;
    }

    setHandlePersonalInfo({ ...personalInfo, phonenumber: phoneNumber });
  };

  const onHandleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!(personalInfo.phonenumber && personalInfo.email && personalInfo.name)) {
      console.log('Such data is empty');

      return;
    }

    if (personalInfo.name.length < 3) {
      console.warn('Your name is too short');
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(personalInfo.email)) {
      console.warn('Invalid email format');
      return;
    }

    const phonePatternWithPlus38 = /^\+38\s\d{10}$/; // +38 0123456789
    const phonePatternWithoutPlus38 = /^\d{10}$/; // 0123456789

    if (
      !(
        phonePatternWithPlus38.test(personalInfo.phonenumber) ||
        phonePatternWithoutPlus38.test(personalInfo.phonenumber)
      )
    ) {
      console.log('Invalid phone number format');
      return;
    }

    onHandleNext();
  };

  return (
    <>
      <h1 className="container__title">Your Personal Info</h1>
      <h2 className="container__subtitle">
        Please provide your name, email address, and phone number.
      </h2>
      <form className="container__form">
        <label className="container__form--label">Name</label>
        <input
          type="text"
          className="container__form--input"
          placeholder="e.g. Stephen King"
          value={personalInfo.name}
          onChange={setName}
        />
        <label className="container__form--label">Email Address</label>
        <input
          type="email"
          className="container__form--input"
          placeholder="e.g. stephenking@lorem.com"
          value={personalInfo.email}
          onChange={setEmail}
        />
        <label className="container__form--label">Phone Number</label>
        <input
          type="text"
          className="container__form--input"
          placeholder="e.g. +1 234 567 890"
          value={personalInfo.phonenumber}
          onChange={setPhoneNumber}
        />
        <div className="container__form--btns">
          <input
            type="submit"
            value="Next Step"
            className="container__form--btn last"
            onClick={onHandleSubmit}
          />
        </div>
      </form>
    </>
  );
};

export default Personal;
