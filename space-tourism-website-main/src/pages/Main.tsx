import { NavLink } from 'react-router-dom';
import { PAGES } from '../routes/routes';

const Main = () => (
  <section className="main landing">
    <div className="landing__left">
      <h1 className="landing__left-subtitle">So, you want to travel to</h1>
      <h3 className="landing__left-title">Space</h3>
      <div className="landing__left-text">
        Let’s face it; if you want to go to space, you might as well genuinely go to outer space and
        not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly
        out of this world experience!
      </div>
    </div>
    <div className="landing__right">
      <nav></nav>
      <NavLink className="landing__right-btn" to={PAGES.DESTINATION}>
        Explore
      </NavLink>
    </div>
  </section>
);

export default Main;
