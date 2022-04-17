import styled from 'styled-components';

export const Container = styled.div`
  width: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & h1 {
    text-align: center;
  }
`;

export const StyledForm = styled.form`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 2rem;
  & input {
    width: 100%;
    height: 2rem;
  }
  & button {
    width: 5rem;
  }
`;
