import arcade from '../assets/images/icon-arcade.svg';
import advanced from '../assets/images/icon-advanced.svg';
import pro from '../assets/images/icon-pro.svg';
import { Buttons } from '.';
import { usePage } from '../context/pageContext';
import { useEffect, useState } from 'react';
import { useUser } from '../context/userContext';

const Plan = () => {
  const { subscription, setSubscription } = useUser();
  const { nextPage } = usePage();

  const [isValid, setIsValid] = useState(false);
  const [plan, setPlan] = useState<null | number>(subscription.index);
  const [billing, setBilling] = useState<'Monthly' | 'Yearly'>(
    subscription.billingCycle,
  );

  useEffect(() => {
    setIsValid(plan !== null);
  }, [plan]);

  const items = [
    { title: 'Arcade', price: 9, icon: arcade },
    { title: 'Advanced', price: 12, icon: advanced },
    { title: 'Pro', price: 15, icon: pro },
  ];

  const handleNextPage = () => {
    if (!isValid) return;

    const selectedPlan = items[plan];

    setSubscription({
      price: selectedPlan.price,
      plan: selectedPlan.title,
      billingCycle: billing,
      index: plan,
    });
    nextPage();
  };

  const toggleBillingCycle = () => {
    setBilling((prevBilling) =>
      prevBilling === 'Monthly' ? 'Yearly' : 'Monthly',
    );
  };

  return (
    <>
      <div className="page__block">
        <h1 className="page__block-title">Plan</h1>
        <h3 className="page__block-subtitle">
          You have the options of monthly or yearly billing.
        </h3>
        <div className="page__block-content">
          <div className="page__block-content--plan">
            {items.map((item, index) => (
              <div
                className={`plan__item
                  ${plan === index && 'plan__item-checked'}`}
                key={`${index}__${item.title}`}
                onClick={() => setPlan(index)}
              >
                <img
                  className="plan__item-img"
                  src={item.icon}
                  alt={`${item.title}`}
                />
                <div className="plan__item-block">
                  <h2 className="plan__item-block--title">{item.title}</h2>
                  <div className="plan__item-block--price">
                    $ {billing === 'Yearly' ? item.price * 10 : item.price}/mo
                  </div>
                  <div className="plan__item-block--subtitle">
                    {billing === 'Yearly' && '2 months free'}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="page__block-content--toggle">
            <div className="toggle-container">
              <label className="toggle-container--label">Monthly</label>
              <input
                onChange={toggleBillingCycle}
                type="checkbox"
                checked={billing === 'Yearly'}
                className="toggle-container--input"
              />
              <label className="toggle-container--label">Yearly</label>
            </div>
          </div>
        </div>
      </div>
      <Buttons disabled={!isValid} handleNextPage={handleNextPage} />
    </>
  );
};

export default Plan;
