import { ReactNode } from 'react';

export interface SingleWordProps {
  children: ReactNode;
  goodWords: string[];
  isChecking: boolean;
  onClick?: () => void;
}

export interface StyledWordProps {
  isSelected: boolean;
  isChecking: boolean;
  isCorrect: boolean;
}
