import { useEffect, useState } from 'react';
import { Header, Main } from './components';
import { getUserData } from './utils/getData';
import { UserData } from './@types/userData';

const App: React.FC = () => {
  const [ip, setIp] = useState<string | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const res = await getUserData(ip);

        setUserData(res);
      } catch (error) {
        console.warn(error);
      }
    };

    getUserInfo();
  }, [ip]);

  return (
    <div className="wrapper">
      <Header data={userData} setIp={setIp} />
      <Main data={userData} />
    </div>
  );
};

export default App;
