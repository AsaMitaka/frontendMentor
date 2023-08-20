import { useEffect } from 'react';
import useStore from '../store/store';
import { Addons, Finish, Personal, Plan, Summary } from './forms';

const Container: React.FC = () => {
  const forms = useStore((state) => state.forms);
  const formIndex = useStore((state) => state.formIndex);
  const setForms = useStore((state) => state.setForms);
  const NowContainer = forms[formIndex];

  useEffect(() => {
    setForms([Personal, Plan, Addons, Summary, Finish]);
  }, []);

  return (
    <div className="container">{NowContainer && <NowContainer key={`${formIndex}__form`} />}</div>
  );
};

export default Container;
