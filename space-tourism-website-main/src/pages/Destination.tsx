import { useEffect, useState } from 'react';
import data from '../assets/data.json';

const Destination = () => {
  const [itemIndex, setItemIndex] = useState(0);
  const [planets, setPlanets] = useState<PlanetsProps[]>([
    {
      name: '',
      description: '',
      distance: '',
      images: {
        png: '',
        webp: '',
      },
      travel: '',
    },
  ]);

  useEffect(() => {
    const jsonPlanets = data;

    setPlanets(jsonPlanets.destinations);
  }, []);

  const planetSelected = planets[itemIndex];

  return (
    <section className="destination landing ">
      <div className="landing__left">
        <h1 className="landing__left-subtitle">
          <span className="landing__left-span">01</span> PICK YOUR DESTINATION
        </h1>
        <img src={planetSelected.images.png} alt="planet img" className="landing__left-img" />
      </div>
      <div className="landing__right destination__block">
        <nav className="destination__nav">
          <ul className="destination__list">
            {planets.map((item, index) => (
              <li
                className={`destination__list-item ${
                  itemIndex === index && 'destination__list-item--active'
                }`}
                key={index}
                onClick={() => setItemIndex(index)}>
                {item.name}
              </li>
            ))}
          </ul>
        </nav>
        <h2 className="landing__right-title">{planetSelected.name}</h2>
        <div className="landing__right-text">{planetSelected.description}</div>
        <div className="destination_footer">
          <div className="destination__distance">
            <h6 className="distance__subtitle">AVG. DISTANCE</h6>
            <h5 className="distance__title">{planetSelected.distance}</h5>
          </div>
          <div className="destination__travel">
            <h6 className="travel__subtitle">EST. TRAVEL TIME</h6>
            <h5 className="travel__title">{planetSelected.travel}</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destination;
