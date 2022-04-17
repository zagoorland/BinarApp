import { createContext, ReactNode, useState } from 'react';
import { User, UserContextValue } from './types';

export const UserContext = createContext<UserContextValue>({
  user: {
    username: undefined,
  },
  setUser: () => {},
});

const { Provider } = UserContext;

const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User>({
    username: undefined,
  });

  return <Provider value={{ user, setUser }}>{children}</Provider>;
};

export default UserProvider;
