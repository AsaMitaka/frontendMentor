import useStore from '../store/store';

const Aside = () => {
  const formIndex = useStore((state) => state.formIndex);

  const items = [
    { title: 'step 1', subtitle: 'your info' },
    { title: 'step 2', subtitle: 'select plan' },
    { title: 'step 3', subtitle: 'add-ons' },
    { title: 'step 4', subtitle: 'summary' },
    { title: 'step 5', subtitle: 'finish' },
  ];

  return (
    <div className="aside">
      <ul className="aside__list">
        {items.map((item, index) => (
          <li className="aside__list--item" key={`${index}_${item.subtitle}`}>
            <div
              className={
                index === formIndex ? 'aside__list--item-numActive' : 'aside__list--item-num'
              }>
              {index + 1}
            </div>
            <div className="aside__list--item-block">
              <div className="aside__list--item-block--title">{item.title}</div>
              <div className="aside__list--item-block--subtitle">{item.subtitle}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Aside;
