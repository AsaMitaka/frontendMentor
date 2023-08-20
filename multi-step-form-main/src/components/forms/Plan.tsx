import arcade from '../../assets/icon-arcade.svg';
import advanced from '../../assets/icon-advanced.svg';
import pro from '../../assets/icon-pro.svg';
import useStore from '../../store/store';

const Plan = () => {
  const onHandleNext = useStore((state) => state.setNextIndex);
  const onHandleLast = useStore((state) => state.setLastIndex);
  const plan = useStore((state) => state.userInfo.plan);

  const handleLast = (e) => {
    e.preventDefault();

    onHandleLast();
  };

  const handleBillingChange = (e) => {
    const selectedBilling = e.target.value;

    useStore.setState({ setBilling: selectedBilling });
  };

  const handleNext = (e) => {
    e.preventDefault();

    onHandleNext();
  };

  return (
    <>
      <h1 className="container__title">Select your plan</h1>
      <h2 className="container__subtitle">You have the option of monthly or yearly billing.</h2>
      <form className="container__form">
        <input
          type="radio"
          className="container__form--inputs"
          name="radio1"
          id="free"
          value="arcade"
        />
        <label className="container__form--label" htmlFor="free">
          <img src={arcade} alt="arcade" className="container__form--label-img" />
          <div className="container__form--label-block">
            <div className="container__form--label-block--title">Arcade</div>
            <div className="container__form--label-block--subtitle">$9/mo</div>
          </div>
        </label>
        <input
          type="radio"
          className="container__form--inputs"
          name="radio1"
          id="advanced"
          value="advanced"
        />
        <label className="container__form--label" htmlFor="advanced">
          <img src={advanced} alt="advanced" className="container__form--label-img" />
          <div className="container__form--label-block">
            <div className="container__form--label-block--title">Advanced</div>
            <div className="container__form--label-block--subtitle">$12/mo</div>
          </div>
        </label>
        <input
          type="radio"
          className="container__form--inputs"
          name="radio1"
          id="pro"
          value="pro"
        />
        <label className="container__form--label" htmlFor="pro">
          <img src={pro} alt="pro" className="container__form--label-img" />
          <div className="container__form--label-block">
            <div className="container__form--label-block--title">Pro</div>
            <div className="container__form--label-block--subtitle">$15/mo</div>
          </div>
        </label>
        <div className="container__form--radio">
          <label htmlFor="monthly" className="container__form--radio-info">
            <input
              type="radio"
              name="radio2"
              id="monthly"
              value="monthly"
              className="container__form--radio-info--rad"
              checked={plan.monthly}
            />
            Monthly
          </label>

          <label htmlFor="yearly" className="container__form--radio-info">
            <input
              type="radio"
              name="radio2"
              id="yearly"
              value="yearly"
              className="container__form--radio-info--rad"
              checked={plan.yearly}
            />
            Yearly
          </label>
        </div>
        <div className="container__form--btns">
          <button className="container__form--btn start" onClick={handleLast}>
            Back
          </button>
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

export default Plan;
