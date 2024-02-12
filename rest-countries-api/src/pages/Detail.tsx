import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IoIosArrowRoundBack } from 'react-icons/io';

import { Btn, Loading } from '../components';
import { getBorderCountry, getCountry } from '../services/api.config';
import useNavigateTo from '../hooks/useNavigateTo';
import { CountryProps } from '../@types';
import { useTheme } from '../context/ThemeContext';

const Detail = () => {
  const { country: countryCode = '' } = useParams();
  const { theme } = useTheme();
  const navigate = useNavigate();
  const handleToCountry = useNavigateTo();

  const [isLoading, setIsLoading] = useState(true);
  const [currentCountry, setCurrentCountry] = useState<CountryProps>({
    altSpellings: [''],
    borders: [''],
    flags: { png: '', svg: '', alt: '' },
    languages: {},
    name: { common: '', official: '', nativeName: {} },
    population: 0,
    region: '',
    subregion: '',
    tld: [],
  });
  const [borderCountries, setBorderCountries] = useState<string[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getCountry(countryCode);
        setCurrentCountry(data);

        const borders = data?.borders || [];
        const borderNames = await Promise.all(
          borders.map((border: string) => getBorderCountry(border)),
        );
        setBorderCountries(borderNames);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [countryCode]);

  const handleBack = () => {
    return navigate(-1);
  };

  if (isLoading) {
    return <Loading />;
  }

  console.log(currentCountry, borderCountries);
  return (
    <section className="detail">
      <div className="detail__heading">
        <Btn actionLabel="Back" icon={IoIosArrowRoundBack} onClick={handleBack} />
      </div>
      <div className="detail__block">
        <div className="detail__block-left">
          <img
            className="detail__block-left--img"
            src={currentCountry.flags?.png}
            alt={currentCountry.flags?.alt}
          />
        </div>
        <div className="detail__block-right">
          <h1 className="details__block-right-title">{currentCountry.name?.common}</h1>
          <div className="details__block-right--main">
            <div>
              <div className="right__main-item">
                Native Name: {currentCountry.altSpellings && currentCountry.altSpellings[1]}
                <span className="right__main-item--span"></span>
              </div>
              <div className="right__main-item">
                Population:
                <span className="right__main-item--span">{currentCountry.population}</span>
              </div>
              <div className="right__main-item">
                Region:
                <span className="right__main-item--span">{currentCountry.region}</span>
              </div>
              {currentCountry.subregion && (
                <div className="right__main-item">
                  Sub Region:
                  <span className="right__main-item--span">{currentCountry.subregion}</span>
                </div>
              )}
              <div className="right__main-item">
                Capital:
                <span className="right__main-item--span">
                  {currentCountry.capital && currentCountry.capital[0]}
                </span>
              </div>
            </div>
            <div>
              <div className="right__main-item">
                Top Level Domain:
                <span className="right__main-item--span">{currentCountry.tld}</span>
              </div>
              <div className="right__main-item">
                Currencies:
                <span className="right__main-item--span">
                  {currentCountry.currencies &&
                    Object.values(currentCountry.currencies)
                      .map((currency) => currency.name)
                      .join(', ')}
                </span>
              </div>
              <div className="right__main-item">
                Languages:
                <span className="right__main-item--span">
                  {currentCountry.languages &&
                    (Array.isArray(currentCountry.languages)
                      ? currentCountry.languages.map((lang) => lang)
                      : Object.values(currentCountry.languages))}
                </span>
              </div>
            </div>
          </div>
          <div className="details__block-right--footer">
            Border Countries:
            {borderCountries.length > 0
              ? borderCountries.map((countryName, index) => (
                  <div
                    className={`border-item ${
                      theme === 'dark' ? 'border-item--dark' : 'border-item--light'
                    }`}
                    key={index}
                    onClick={() => handleToCountry(countryName)}>
                    {countryName}
                  </div>
                ))
              : 'No border countries'}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detail;
