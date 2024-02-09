import { useEffect, useState } from 'react';
import data from '../assets/data.json';

const Crew = () => {
  const [itemIndex, setItemIndex] = useState(0);
  const [crewData, setCrewData] = useState<CrewProps[]>([
    {
      bio: '',
      images: {
        png: '',
        webp: '',
      },
      name: '',
      role: '',
    },
  ]);

  useEffect(() => {
    const jsonCrew = data.crew;

    setCrewData(jsonCrew);
  }, []);

  const crewSelected = crewData[itemIndex];
  const crewSelectedImg = './src' + crewSelected.images.png.slice(1);

  return (
    <section className="crew landing">
      <div className="landing__left">
        <h1 className="landing__left-subtitle">
          <span className="landing__left-span">01</span> PICK YOUR DESTINATION
        </h1>
        <h4 className="crew__subtitle">{crewSelected.role}</h4>
        <h2 className="crew__title">{crewSelected.name}</h2>
        <div className="crew__text">{crewSelected.bio}</div>
        <nav className="crew__nav">
          <ul className="crew__list">
            {crewData.map((_, index) => (
              <li
                className={`crew__list-item ${itemIndex === index && 'crew__list-item--active'}`}
                key={index}
                onClick={() => setItemIndex(index)}></li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="landing__right crew__block">
        <img className="landing__right-img" alt="crew img" src={crewSelectedImg} />
      </div>
    </section>
  );
};

export default Crew;
