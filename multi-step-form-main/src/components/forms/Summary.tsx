import useStore from '../../store/store';

const Summary = () => {
  const onHandleNext = useStore((state) => state.setNextIndex);
  const onHandleLast = useStore((state) => state.setLastIndex);
  const userInfo = useStore((state) => state.userInfo);
  console.log(userInfo);

  const handleLast = (e) => {
    e.preventDefault();

    onHandleLast();
  };

  const handleNext = (e) => {
    e.preventDefault();

    onHandleNext();
  };

  const calculateTotal = () => {
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
                  {planName}
                  <span className="container__form--block-item--span">price: {planData.price}</span>
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
                  {addonName}
                  <span className="container__form--block-item--span">
                    price: {addonData.price}
                  </span>
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
