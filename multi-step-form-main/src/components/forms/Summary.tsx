import useStore from '../../store/store';

const Summary = () => {
  const onHandleNext = useStore((state) => state.setNextIndex);
  const onHandleLast = useStore((state) => state.setLastIndex);

  const handleLast = (e) => {
    e.preventDefault();

    onHandleLast();
  };

  const handleNext = (e) => {
    e.preventDefault();

    onHandleNext();
  };

  return (
    <>
      <h1 className="container__title">Finishing up</h1>
      <h2 className="container__subtitle">Double-check everything looks OK before confirming.</h2>
      <form className="container__form">
        <div className="container__form--total"> Total (per month/year)</div>
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

export default Summary;
