import { UserData } from '../@types/userData';
const API_KEY = 'at_EthPOfPJ6yLa4pl7aNgLJsj2ANwva';

const getApi = async (): Promise<string | undefined> => {
  try {
    const API__DATA = await fetch('https://api.ipify.org');
    const API = API__DATA.text();

    return API;
  } catch (error) {
    console.warn(error);
    return undefined;
  }
};

export const getUserData = async (ip: string | null = null): Promise<UserData | null> => {
  try {
    let API: string | undefined;

    if (!ip) {
      API = await getApi();
    } else {
      API = ip;
    }

    const data = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${API}`,
    );

    return data.json();
  } catch (error) {
    console.warn(error);
    return null;
  }
};
