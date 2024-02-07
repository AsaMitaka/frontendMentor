interface DetailsProps {
  pageNumber: number;
}

const Details = ({ pageNumber }: DetailsProps) => {
  const items = [
    {
      number: 1,
      text: 'your info',
    },
    {
      number: 2,
      text: 'select plan',
    },
    {
      number: 3,
      text: 'add-ons',
    },
    {
      number: 4,
      text: 'summary',
    },
  ];

  return (
    <div className="details">
      <nav className="details__nav">
        <ul className="nav__list">
          {items.map((item, index) => (
            <li key={`${index}_${item.text}`} className="nav__list-item">
              <div
                className={`nav__list-item--number ${pageNumber + 1 === item.number && 'number--active'}`}
              >
                {item.number}
              </div>
              <div className="nav__list-item--block">
                <div className="block-title">Step {item.number}</div>
                <div className="block-subtitle">{item.text}</div>
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Details;
