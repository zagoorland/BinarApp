import { InputHTMLAttributes } from 'react';
import { StyledInput } from './styles';

const Input = ({ ...props }: InputHTMLAttributes<HTMLInputElement>) => {
  return <StyledInput {...props} />;
};

export default Input;
