import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  height: 3rem;
  border: none;
  border-bottom: 1px solid #ccc;
  padding: 0.5rem;
  outline: none;
  transition: all 0.3s ease-in-out;
  &:focus {
    border-bottom: 1px solid #000;
  }
  &::placeholder {
    text-align: center;
  }
`;

export default StyledInput;
