import { FC, ReactNode, useState } from 'react';
import styled, { css } from 'styled-components';

interface SingleWordProps {
  children: ReactNode;
  goodWords: string[];
  isChecking: boolean;
  onClick?: () => void;
}

interface StyledWordProps {
  isSelected: boolean;
  isChecking: boolean;
  isCorrect: boolean;
}

const SingleWord: FC<SingleWordProps> = ({
  children,
  goodWords,
  isChecking,
  onClick,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const isCorrect = goodWords.includes((children || '').toString());

  return (
    <StyledWord
      isSelected={isSelected}
      isChecking={isChecking && isSelected}
      isCorrect={isCorrect}
      onClick={() => {
        setIsSelected((prev) => !prev);
        onClick?.();
      }}
    >
      {children}
    </StyledWord>
  );
};

const StyledWord = styled.div<StyledWordProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 0 20px;
  font-weight: ${({ isSelected }) => (isSelected ? 'bold' : 'normal')};
  color: ${({ isSelected }) => (isSelected ? 'black' : 'grey')};
  ${({ isChecking, isCorrect }) =>
    isChecking &&
    css`
      color: ${isCorrect ? 'green' : 'red'};
    `}
`;

export default SingleWord;
