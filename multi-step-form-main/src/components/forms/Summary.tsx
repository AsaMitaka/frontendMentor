import { FormEvent } from 'react';
import PersonalInfo from '../../@types/userInfo';
import useStore from '../../store/store';

const Summary: React.FC = () => {
  const onHandleNext = useStore((state: PersonalInfo) => state.setNextIndex);
  const onHandleLast = useStore((state: PersonalInfo) => state.setLastIndex);
  const userInfo = useStore((state: PersonalInfo) => state.userInfo);

  const handleLast = (e: FormEvent) => {
    e.preventDefault();

    onHandleLast();
  };

  const handleNext = (e: FormEvent) => {
    e.preventDefault();

    onHandleNext();
  };

  const calculateTotal = (): number => {
    let total = 0;

    Object.values(userInfo.plan).forEach((planData) => {
      if (planData.active) {
        total += planData.price;
      }
    });

    Object.values(userInfo.addons).forEach((addonData) => {
      if (addonData.active) {
        total += addonData.price;
      }
    });

    if (userInfo.billing.yearly) {
      total *= 12;
    }

    return total;
  };

  return (
    <>
      <h1 className="container__title">Finishing up</h1>
      <h2 className="container__subtitle">Double-check everything looks OK before confirming.</h2>
      <form className="container__form">
        <div className="container__form--block">
          <div>Plan: </div>
          {Object.entries(userInfo.plan).map(([planName, planData]) => {
            if (planData.active) {
              return (
                <div key={planName} className="container__form--block-item">
                  {planName[0].toUpperCase() + planName.slice(1).toLowerCase()}:
                  <span className="container__form--block-item--span">${planData.price}/mo</span>
                </div>
              );
            }
            return null;
          })}
          <div>Addons: </div>
          {Object.entries(userInfo.addons).map(([addonName, addonData]) => {
            if (addonData.active) {
              return (
                <div key={addonName} className="container__form--block-item">
                  {addonName[0].toUpperCase() + addonName.slice(1).toLowerCase()}:
                  <span className="container__form--block-item--span">+${addonData.price}/mo</span>
                </div>
              );
            }
          })}
          <div className="container__form--block-year">
            Time range:
            {userInfo.billing.monthly ? (
              <span className="container__form--block-year--span">Monthly</span>
            ) : (
              <span className="container__form--block-year--span">Yearly</span>
            )}
          </div>
        </div>
        <div className="container__form--total"> Total (per month/year): {calculateTotal()}$</div>
        <div className="container__form--btns">
          <button className="container__form--btn start" onClick={handleLast}>
            Back
          </button>
          <input
            type="submit"
            value="Confirm"
            className="container__form--btn last"
            onClick={handleNext}
          />
        </div>
      </form>
    </>
  );
};

export default Summary;
