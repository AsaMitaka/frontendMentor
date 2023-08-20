import useStore from '../../store/store';

const Personal = () => {
  const personalInfo = useStore((state) => state.userInfo.personalInfo);
  const setHandlePersonalInfo = useStore((state) => state.setPersonalInfo);
  const onHandleNext = useStore((state) => state.setNextIndex);

  const setName = (e) => {
    const name = e.target.value;

    if (name.length > 20) {
      return;
    }

    setHandlePersonalInfo({ ...personalInfo, name });
  };

  const setEmail = (e) => {
    const email = e.target.value;

    if (email.length > 22) {
      return;
    }

    setHandlePersonalInfo({ ...personalInfo, email });
  };

  const setPhoneNumber = (e) => {
    const phoneNumber = e.target.value;

    if (phoneNumber.length > 12) {
      return;
    }

    setHandlePersonalInfo({ ...personalInfo, phonenumber: phoneNumber });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();

    if (!(personalInfo.phonenumber && personalInfo.email && personalInfo.name)) {
      console.log('Such data is empty');

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
