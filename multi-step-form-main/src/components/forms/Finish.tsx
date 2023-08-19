import useStore from '../../store/store';

const Finish = () => {
  const onHandleLast = useStore((state) => state.setLastIndex);

  const handleLast = (e) => {
    e.preventDefault();

    onHandleLast();
  };

  return (
    <>
      <h1 className="container__title">Thank you!</h1>
      <h2 className="container__subtitle">
        Thanks for confirming your subscription! We hope you have fun using our platform. If you
        ever need support, please feel free to email us at support@loremgaming.com.
      </h2>
      <div className="container__form--btns">
        <button className="container__form--btn start" onClick={handleLast}>
          Back
        </button>
      </div>
    </>
  );
};

export default Finish;
