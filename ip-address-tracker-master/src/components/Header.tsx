import { useState } from 'react';
import { HeaderProps } from '../@types/headerProps';

const Header: React.FC<HeaderProps> = ({ data, setIp }) => {
  const [text, setText] = useState<string>('');

  const onHandleIp = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length > 15) {
      return;
    }

    setText(value);
  };

  const isValidIP = (ip: string): boolean => {
    const ipPattern =
      /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return ipPattern.test(ip);
  };

  const onSubmitIp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isValidIP(text)) {
      setIp(text);
    }
  };

  return (
    <header className="header">
      <h1 className="header__title">IP Address Tracker</h1>
      <form className="header__form" onSubmit={onSubmitIp}>
        <input type="text" className="header__form--input" value={text} onChange={onHandleIp} />
        <input type="submit" value=">" className="header__form--btn" />
      </form>
      <div className="header__information">
        <div className="header__information--item">
          <div className="header__information--item-title">ip address</div>
          <div className="header__information--item-text">{data?.ip}</div>
        </div>
        <div className="header__information--item">
          <div className="header__information--item-title">location</div>
          <div className="header__information--item-text">
            {data?.location.country}, {data?.location.city} {data?.location.region}
          </div>
        </div>
        <div className="header__information--item">
          <div className="header__information--item-title">timezone</div>
          <div className="header__information--item-text">utc {data?.location.timezone}</div>
        </div>
        <div className="header__information--item">
          <div className="header__information--item-title">isp</div>
          <div className="header__information--item-text">{data?.isp}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
