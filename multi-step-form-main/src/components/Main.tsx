const Main: React.FC = () => {
  return (
    <div className="block">
      <div className="aside">
        <ul className="aside__list">
          <li className="aside__list--item">
            <div className="aside__list--item-num">1</div>
            <div className="aside__list--item-block">
              <div className="aside__list--item-block--title">step 1</div>
              <div className="aside__list--item-block--subtitle">your info</div>
            </div>
          </li>
          <li className="aside__list--item">
            <div className="aside__list--item-numActive">2</div>
            <div className="aside__list--item-block">
              <div className="aside__list--item-block--title">step 2</div>
              <div className="aside__list--item-block--subtitle">select plan</div>
            </div>
          </li>
          <li className="aside__list--item">
            <div className="aside__list--item-num">3</div>
            <div className="aside__list--item-block">
              <div className="aside__list--item-block--title">step 3</div>
              <div className="aside__list--item-block--subtitle">add-ons</div>
            </div>
          </li>
          <li className="aside__list--item">
            <div className="aside__list--item-num">4</div>
            <div className="aside__list--item-block">
              <div className="aside__list--item-block--title">step 4</div>
              <div className="aside__list--item-block--subtitle">summary</div>
            </div>
          </li>
        </ul>
      </div>
      <div className="container">
        <h1 className="container__title">Personal Info</h1>
        <h2 className="container__subtitle">
          Please provide your name, email address, and phone number.
        </h2>
        <form className="container__form">
          <label className="container__form--label">Name</label>
          <input type="text" className="container__form--input" placeholder="e.g. Stephen King" />
          <label className="container__form--label">Email Address</label>
          <input
            type="email"
            className="container__form--input"
            placeholder="e.g. stephenking@lorem.com"
          />
          <label className="container__form--label">Phone Number</label>
          <input
            type="number"
            className="container__form--input"
            placeholder="e.g. +1 234 567 890"
          />
          <input type="submit" value="Next Step" className="container__form--btn" />
        </form>
      </div>
    </div>
  );
};

export default Main;
