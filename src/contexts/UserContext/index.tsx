import { createContext, ReactNode, useEffect, useState } from 'react';
import { User, UserContextValue } from './types';

export const UserContext = createContext<UserContextValue>({
  user: {
    name: undefined,
  },
  setUser: () => {},
});
const { Provider } = UserContext;

const userFromLocalStorage = localStorage.getItem('user');

const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User>({
    name: undefined || userFromLocalStorage?.toString(),
  });

  useEffect(() => {
    if (user.name) {
      localStorage.setItem('user', user.name);
    }
  }, [user]);

  return <Provider value={{ user, setUser }}>{children}</Provider>;
};

export default UserProvider;
