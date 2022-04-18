import styled, { css } from 'styled-components';
import { StyledWordProps } from './types';

export const StyledWord = styled.div<StyledWordProps>`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 0 20px;
  font-weight: ${({ isSelected }) => (isSelected ? 'bold' : 'normal')};
  pointer-events: ${({ isChecking }) => (isChecking ? 'none' : 'auto')};
  color: ${({ isSelected }) => (isSelected ? 'black' : 'grey')};
  ${({ isChecking, isSelected, isCorrect }) =>
    isChecking &&
    isSelected &&
    css`
      color: ${isCorrect ? 'green' : 'red'};
    `}
`;

export const StyledTip = styled.div`
  position: absolute;
  margin-bottom: 40px;
  opacity: 0.6;
`;
