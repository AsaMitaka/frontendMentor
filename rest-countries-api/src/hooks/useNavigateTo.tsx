import { useNavigate } from 'react-router-dom';

const useNavigateTo = () => {
  const navigate = useNavigate();
  const handleToCountry = (fifa: string) => {
    return navigate(`/${fifa}`);
  };

  return handleToCountry;
};

export default useNavigateTo;
