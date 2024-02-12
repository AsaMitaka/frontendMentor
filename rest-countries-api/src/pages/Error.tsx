import { useNavigate } from 'react-router-dom';
import { Btn } from '../components';

const Error = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    return navigate(-1);
  };

  return (
    <section className="error">
      <h1>Error</h1>
      <h3>Something went wrong!</h3>
      <Btn actionLabel="Back" onClick={handleBack} />
    </section>
  );
};

export default Error;
