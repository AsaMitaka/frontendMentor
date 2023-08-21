import { FormEvent } from 'react';
import arcade from '../../assets/icon-arcade.svg';
import advanced from '../../assets/icon-advanced.svg';
import pro from '../../assets/icon-pro.svg';
import useStore from '../../store/store';
import PersonalInfo from '../../@types/userInfo';

const Plan: React.FC = () => {
  const onHandleNext = useStore((state: PersonalInfo) => state.setNextIndex);
  const onHandleLast = useStore((state: PersonalInfo) => state.setLastIndex);
  const plan = useStore((state: PersonalInfo) => state.userInfo.plan);
  const billing = useStore((state: PersonalInfo) => state.userInfo.billing);
  const setPlan = useStore((state: PersonalInfo) => state.setPlan);
  const setBilling = useStore((state: PersonalInfo) => state.setBilling);

  const handleLast = (e: FormEvent) => {
    e.preventDefault();

    onHandleLast();
  };

  const handleNext = (e: FormEvent) => {
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
          checked={plan.arcade.active}
          onChange={() =>
            setPlan({
              arcade: { active: true, price: 9 },
              advanced: { active: false, price: 12 },
              pro: { active: false, price: 15 },
            })
          }
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
          checked={plan.advanced.active}
          onChange={() =>
            setPlan({
              arcade: { active: false, price: 9 },
              advanced: { active: true, price: 12 },
              pro: { active: false, price: 15 },
            })
          }
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
          checked={plan.pro.active}
          onChange={() =>
            setPlan({
              arcade: { active: false, price: 9 },
              advanced: { active: false, price: 12 },
              pro: { active: true, price: 15 },
            })
          }
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
              checked={billing.monthly}
              onChange={() => setBilling({ monthly: true, yearly: false })}
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
              checked={billing.yearly}
              onChange={() => setBilling({ monthly: false, yearly: true })}
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
