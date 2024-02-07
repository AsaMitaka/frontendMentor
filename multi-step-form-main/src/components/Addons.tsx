import { useEffect, useState } from 'react';
import { Buttons } from '.';
import { useUser } from '../context/userContext';
import { usePage } from '../context/pageContext';

const Addons = () => {
  const { nextPage } = usePage();
  const {
    subscription: { billingCycle },
    services,
    setServices,
  } = useUser();

  const [servicesItems, setServicesItems] = useState(services);
  const [isValid, setIsValid] = useState(services.length > 0);

  useEffect(() => {
    setIsValid(servicesItems.length > 0);
  }, [servicesItems]);

  const items = [
    {
      title: 'Online service',
      subtitle: 'Access to multiplayer games',
      price: 1,
    },
    {
      title: 'Larger storage',
      subtitle: 'Extra 1TB of cloud save',
      price: 2,
    },
    {
      title: 'Customizable Profile',
      subtitle: 'Custom theme on your profile',
      price: 3,
    },
  ];

  const handleServicesItems = (item: { title: string; price: number }) => {
    setServicesItems((prevItems) => [...prevItems, item]);
  };

  const handleDeleteServicesItems = (title: string) => {
    setServicesItems((prevItems) =>
      prevItems.filter((service) => service.title !== title),
    );
  };

  const handleCheckboxChange = (
    isChecked: boolean,
    item: { title: string; price: number },
  ) => {
    if (isChecked) {
      handleServicesItems(item);
    } else {
      handleDeleteServicesItems(item.title);
    }
  };

  const handleNextPage = () => {
    if (!isValid) return;
    setServices(servicesItems);
    nextPage();
  };

  return (
    <>
      <div className="page__block">
        <h1 className="page__block-title">Addons</h1>
        <h3 className="page__block-subtitle">
          Add-ons help enhance your gaming experience.
        </h3>
        <div className="page__block-content">
          {items.map((item, index) => (
            <div
              className={`page__block-content--addons`}
              key={`${index}__${item.title}`}
            >
              <div className="addons__block">
                <input
                  className="addons__block-input"
                  type="checkbox"
                  checked={servicesItems.some(
                    (service) => service.title === item.title,
                  )}
                  onChange={(e) =>
                    handleCheckboxChange(e.target.checked, {
                      title: item.title,
                      price: item.price,
                    })
                  }
                />
                <div className="">
                  <div className="addons__block-title">{item.title}</div>
                  <div className="addons__block-subtitle">{item.subtitle}</div>
                </div>
              </div>
              <div className="addons__block-price">
                {billingCycle === 'Yearly'
                  ? `$ ${item.price * 10}/yr`
                  : `$ ${item.price}/mo`}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Buttons disabled={!isValid} handleNextPage={handleNextPage} />
    </>
  );
};

export default Addons;
