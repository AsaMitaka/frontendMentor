import { FormEvent } from 'react';
import useStore from '../../store/store';
import PersonalInfo from '../../@types/userInfo';

const Addons: React.FC = () => {
  const onHandleNext = useStore((state: PersonalInfo) => state.setNextIndex);
  const onHandleLast = useStore((state: PersonalInfo) => state.setLastIndex);
  const addons = useStore((state: PersonalInfo) => state.userInfo.addons);
  const setAddons = useStore((state: PersonalInfo) => state.setAddons);

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
      <h1 className="container__title"> Pick add-ons</h1>
      <h2 className="container__subtitle">Add-ons help enhance your gaming experience.</h2>
      <form className="container__form">
        <fieldset className="container__form--fieldset">
          <div className="container__form--fieldset-block">
            <input
              type="checkbox"
              name="online"
              id="online"
              className="container__form--fieldset-block--input"
              checked={addons.online.active}
              onChange={() => setAddons('online', !addons.online.active)}
            />
            <label htmlFor="online" className="container__form--fieldset-block--label">
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
              checked={addons.storage.active}
              onChange={() => setAddons('storage', !addons.storage.active)}
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
              name="customize"
              id="customize"
              className="container__form--fieldset-block--input"
              checked={addons.customize.active}
              onChange={() => setAddons('customize', !addons.customize.active)}
            />
            <label htmlFor="customize" className="container__form--fieldset-block--label">
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

export default Addons;
