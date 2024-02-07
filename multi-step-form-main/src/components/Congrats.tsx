import summary from '../assets/images/icon-thank-you.svg';

const Congrats = () => (
  <div className="page__block-congrats">
    <img
      className="page__block-congrats--img"
      src={summary}
      alt="summary img"
    />
    <div className="page__block-congrats--title">Thank you!</div>
    <div className="page__block-congrats--subtitle">
      Thanks for confirming your subscription! We hope you have fun using our
      platform. If you ever need support, please feel free to email us at
      support@loremgaming.com
    </div>
  </div>
);

export default Congrats;
