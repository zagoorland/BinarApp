import styled from 'styled-components';

export const StyledMainLayoutWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1080px;
  margin: 10rem auto;
  padding: 0 2rem;
  @media (max-width: 768px) {
    margin: 4rem auto;
    padding: 0 2rem;
  }
`;
