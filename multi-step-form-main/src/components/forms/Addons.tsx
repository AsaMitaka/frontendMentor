const Addons = () => {
  return (
    <>
      <h1 className="container__title"> Pick add-ons</h1>
      <h2 className="container__subtitle">Add-ons help enhance your gaming experience.</h2>
      <form className="container__form">
        <fieldset className="container__form--fieldset">
          <div className="container__form--fieldset-block">
            <input
              type="checkbox"
              name="service"
              id="service"
              className="container__form--fieldset-block--input"
            />
            <label htmlFor="service" className="container__form--fieldset-block--label">
              <div className="container__form--fieldset-block--label-div">
                <p className="container__form--fieldset-block--label-div--title">Online service</p>
                <p className="container__form--fieldset-block--label-div--subtitle">
                  Access to multiplayer games
                </p>
                <p className="container__form--fieldset-block--label-div--info">+$1/mo</p>
              </div>
            </label>
          </div>
          <div className="container__form--fieldset-block">
            <input
              type="checkbox"
              name="storage"
              id="storage"
              className="container__form--fieldset-block--input"
            />
            <label htmlFor="storage" className="container__form--fieldset-block--label">
              <div className="container__form--fieldset-block--label-div">
                <p className="container__form--fieldset-block--label-div--title">Larger storage</p>
                <p className="container__form--fieldset-block--label-div--subtitle">
                  Extra 1TB of cloud save
                </p>
                <p className="container__form--fieldset-block--label-div--info">+$2/mo</p>
              </div>
            </label>
          </div>
          <div className="container__form--fieldset-block">
            <input
              type="checkbox"
              name="theme"
              id="theme"
              className="container__form--fieldset-block--input"
            />
            <label htmlFor="theme" className="container__form--fieldset-block--label">
              <div className="container__form--fieldset-block--label-div">
                <p className="container__form--fieldset-block--label-div--title">
                  Customizable Profile
                </p>
                <p className="container__form--fieldset-block--label-div--subtitle">
                  Custom theme on your profile
                </p>
                <p className="container__form--fieldset-block--label-div--info">+$2/mo</p>
              </div>
            </label>
          </div>
        </fieldset>
        <div className="container__form--btns">
          <button className="container__form--btn">Back</button>
          <input type="submit" value="Next Step" className="container__form--btn" />
        </div>
      </form>
    </>
  );
};

export default Addons;
