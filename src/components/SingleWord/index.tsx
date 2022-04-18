import { useState } from 'react';
import { StyledTip, StyledWord } from './styles';
import { SingleWordProps } from './types';

const SingleWord = ({
  children,
  goodWords,
  isChecking,
  onClick,
}: SingleWordProps) => {
  const [isSelected, setIsSelected] = useState(false);

  const isCorrect = goodWords.includes((children || '').toString());

  return (
    <StyledWord
      isSelected={isSelected}
      isChecking={isChecking}
      isCorrect={isCorrect}
      onClick={() => {
        setIsSelected((prev) => !prev);
        onClick?.();
      }}
    >
      {isChecking && isSelected && (
        <StyledTip>{isCorrect ? 'Good' : 'Bad'}</StyledTip>
      )}
      {children}
    </StyledWord>
  );
};

export default SingleWord;
