import { createContext, useContext, useReducer } from 'react';

interface UserProps {
  name: string;
  email: string;
  phonenumber: string;
}

interface SubscriptionProps {
  price: number;
  plan: null | 'Arcade' | 'Advanced' | 'Pro';
  billingCycle: 'Monthly' | 'Yearly';
  index: null | number;
}

interface ServiceProps {
  title: string;
  price: number;
}

interface InitialStateProps {
  user: UserProps;
  subscription: SubscriptionProps;
  services: ServiceProps[];
}

const initialState: InitialStateProps = {
  user: {
    name: '',
    email: '',
    phonenumber: '',
  },
  subscription: {
    price: 0,
    plan: null,
    billingCycle: 'Monthly',
    index: null,
  },
  services: [],
};

const reducer = (state: InitialStateProps, action: any) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'SET_SUBSCRIPTION':
      return { ...state, subscription: action.payload };
    case 'SET_SERVICES':
      return { ...state, services: action.payload };
    default:
      throw new Error(`Invalid action`);
  }
};

interface UserContextType {
  user: UserProps;
  subscription: SubscriptionProps;
  services: [] | ServiceProps[];
  setUser: (userData: UserProps) => void;
  setSubscription: (subscriptionData: SubscriptionProps) => void;
  setServices: (servicesData: ServiceProps[]) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [{ user, subscription, services }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  const setUser = (userData: UserProps) =>
    dispatch({ type: 'SET_USER', payload: userData });

  const setSubscription = (subscriptionData: SubscriptionProps) =>
    dispatch({ type: 'SET_SUBSCRIPTION', payload: subscriptionData });

  const setServices = (servicesData: [] | ServiceProps[]) =>
    dispatch({ type: 'SET_SERVICES', payload: servicesData });

  return (
    <UserContext.Provider
      value={{
        user,
        subscription,
        services,
        setUser,
        setSubscription,
        setServices,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) throw new Error('Use outside user context');

  return context;
};

export { useUser, UserProvider, UserContext };
