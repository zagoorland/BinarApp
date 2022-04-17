import { FC, ReactNode } from 'react';
import { StyledMainLayoutWrapper } from './styles';

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return <StyledMainLayoutWrapper>{children}</StyledMainLayoutWrapper>;
};

export default Layout;
