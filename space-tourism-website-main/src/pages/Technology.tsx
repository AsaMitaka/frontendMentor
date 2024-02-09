import { useEffect, useState } from 'react';
import data from '../assets/data.json';

const Technology = () => {
  const [itemIndex, setItemIndex] = useState(0);
  const [technologyData, setTechnologyData] = useState<TechnologyProps[]>([
    {
      description: '',
      images: {
        landscape: '',
        portrait: '',
      },
      name: '',
    },
  ]);

  useEffect(() => {
    const jsonCrew = data.technology;

    setTechnologyData(jsonCrew);
  }, []);

  const technologySelected = technologyData[itemIndex];
  const technologySelectedImg = '/src' + technologySelected.images.portrait.slice(1);

  return (
    <section className="technology landing ">
      <div className="landing__left technology__row">
        <nav className="technology__nav">
          <ul className="technology__list">
            {technologyData.map((_, index) => (
              <li
                className={`technology__list-item ${
                  itemIndex === index && 'technology__list-item--active'
                }`}
                key={index}
                onClick={() => setItemIndex(index)}>
                {index}
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h1 className="landing__left-subtitle">
            <span className="landing__left-span">01</span> PICK YOUR DESTINATION
          </h1>
          <h4 className="technology__subtitle">MISSION SPECIALIST</h4>
          <h2 className="technology__title">{technologySelected.name}</h2>
          <div className="technology__text">{technologySelected.description}</div>
        </div>
      </div>
      <div className="landing__right technology__block">
        <img className="landing__right-img" alt="technology img" src={technologySelectedImg} />
      </div>
    </section>
  );
};

export default Technology;
