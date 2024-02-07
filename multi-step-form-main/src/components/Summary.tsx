import { Buttons } from '.';
import { usePage } from '../context/pageContext';
import { useUser } from '../context/userContext';

const Summary = () => {
  const { nextPage, setCurrentPage } = usePage();
  const { services, subscription } = useUser();

  const yearlyPrice = 10;
  const total =
    services.reduce((acc, service) => acc + service.price, 0) +
    subscription.price;

  const adjustedTotal =
    subscription.billingCycle === 'Yearly' ? total * yearlyPrice : total;

  const handleSetCurrentPage = () => {
    setCurrentPage(0);
  };

  return (
    <>
      <div className="page__block">
        <h1 className="page__block-title">Summary</h1>
        <h3 className="page__block-subtitle">
          Double-check everything looks OK before confirming.
        </h3>
        <div className="page__block-content">
          <div className="page__block-content--summary">
            <div className="summary">
              <div className="summary__left">
                <h1 className="summary__left-title">
                  {subscription.plan}
                  <span className="summary__left-title--span">
                    ( {subscription.billingCycle})
                  </span>
                </h1>
                <button
                  className="summary__left-btn"
                  onClick={handleSetCurrentPage}
                >
                  Change
                </button>
              </div>
              <div className="summary__right">
                {subscription.billingCycle === 'Yearly'
                  ? `$ ${subscription.price * yearlyPrice}/yr`
                  : `$ ${subscription.price}/mo`}
              </div>
            </div>

            <div className="sumservices">
              {services.map((service) => (
                <div className="sumservices__block" key={service.title}>
                  <div className="sumservices__block-title">
                    {service.title}
                  </div>
                  <div className="sumservices__block-price">
                    {subscription.billingCycle === 'Yearly'
                      ? `$ ${service.price * yearlyPrice}/yr`
                      : `$ ${service.price}/mo`}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="summary__total">
            <h3 className="summary__total-title">
              Total
              {subscription.billingCycle === 'Yearly'
                ? ' (year)'
                : ' (per month)'}
            </h3>
            <h4 className="summary__total-subtitle">
              {subscription.billingCycle === 'Yearly'
                ? `+$ ${adjustedTotal}/yearly`
                : `+$ ${adjustedTotal}/mo`}
            </h4>
          </div>
        </div>
      </div>
      <Buttons actionLabelNextLabel="Submit" handleNextPage={nextPage} />
    </>
  );
};

export default Summary;
