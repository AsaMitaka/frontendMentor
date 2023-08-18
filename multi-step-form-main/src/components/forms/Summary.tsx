const Summary = () => {
  return (
    <>
      <h1 className="container__title">Finishing up</h1>
      <h2 className="container__subtitle">Double-check everything looks OK before confirming.</h2>
      <form className="container__form">
        <div className="container__form--total"> Total (per month/year)</div>
        <div className="container__form--btns">
          <button className="container__form--btn">Back</button>
          <input type="submit" value="Next Step" className="container__form--btn" />
        </div>
      </form>
    </>
  );
};

export default Summary;
