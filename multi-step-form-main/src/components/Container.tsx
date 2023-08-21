import { useEffect } from 'react';
import useStore from '../store/store';
import { Addons, Finish, Personal, Plan, Summary } from './forms';
import PersonalInfo from '../@types/userInfo';

const Container: React.FC = () => {
  const forms = useStore((state: PersonalInfo) => state.forms);
  const formIndex = useStore((state: PersonalInfo) => state.formIndex);
  const setForms = useStore((state: PersonalInfo) => state.setForms);
  const NowContainer = forms[formIndex];

  useEffect(() => {
    setForms([Personal, Plan, Addons, Summary, Finish]);
  }, []);

  return (
    <div className="container">{NowContainer && <NowContainer key={`${formIndex}__form`} />}</div>
  );
};

export default Container;
