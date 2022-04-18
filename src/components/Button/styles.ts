import styled from 'styled-components';

const StyledButton = styled.button`
  background: none;
  border: 1px solid deepskyblue;
  color: deepskyblue;
  border-radius: 5px;
  font-weight: 600;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease-in-out;
  height: 2rem;
  white-space: nowrap;
  cursor: pointer;
  &:hover {
    background-color: #3eb2fd;
    color: white;
  }
  &:disabled {
    background-color: #e6e6e6;
    color: #bdbdbd;
    border: 1px solid #bdbdbd;
    cursor: not-allowed;
  }
`;

export default StyledButton;
