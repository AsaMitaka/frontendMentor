const Aside = () => {
  return (
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
  );
};

export default Aside;
