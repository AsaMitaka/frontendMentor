import useStore from '../../store/store';

const Personal = () => {
  const personalInfo = useStore((state) => state.userInfo.personalInfo);
  const handlePersonalInfo = useStore((state) => state.setPersonalInfo);

  const onHandleNext = useStore((state) => state.setNextIndex);

  const onHandleSubmit = (e) => {
    e.preventDefault();

    if (!(personalInfo.phonenumber && personalInfo.email && personalInfo.name)) {
      return;
    }
  };

  const handleNext = (e) => {
    e.preventDefault();

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
        />
        <label className="container__form--label">Email Address</label>
        <input
          type="email"
          className="container__form--input"
          placeholder="e.g. stephenking@lorem.com"
          value={personalInfo.email}
        />
        <label className="container__form--label">Phone Number</label>
        <input
          type="number"
          className="container__form--input"
          placeholder="e.g. +1 234 567 890"
          value={personalInfo.phonenumber}
        />
        <div className="container__form--btns">
          <input
            type="submit"
            value="Next Step"
            className="container__form--btn last"
            onClick={handleNext}
          />
        </div>
      </form>
    </>
  );
};

export default Personal;
