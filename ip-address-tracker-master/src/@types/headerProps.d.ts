import { UserData } from './userData';

export interface HeaderProps {
  data: UserData | null;
  setIp: React.Dispatch<React.SetStateAction<string | null>>;
}
