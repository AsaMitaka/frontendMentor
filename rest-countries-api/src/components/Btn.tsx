import { IconType } from 'react-icons';
import { useTheme } from '../context/ThemeContext';

type BtnProps = {
  actionLabel: string;
  icon?: IconType;
  onClick: () => void;
  outline?: boolean;
};

const Btn = ({ actionLabel, icon: Icon, onClick, outline }: BtnProps) => {
  const { theme } = useTheme();

  return (
    <button
      className={`${theme === 'dark' ? 'btn-dark' : 'btn-light'} btn ${outline ? 'outline' : ''}`}
      onClick={onClick}>
      {Icon && <Icon size={20} />}
      {actionLabel}
    </button>
  );
};

export default Btn;
