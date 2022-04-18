import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { Container } from './styles';
import { LocationStateType } from './types';

const Results = () => {
  const location = useLocation();
  const { user } = useContext(UserContext);
  const state = location.state as LocationStateType;

  return (
    <Container>
      <h2>{`Congratulations, ${user.name || ''}!`}</h2>
      <h2>Your score:</h2>
      <h2 style={{ color: 'deepskyblue' }}>{`${state.result} points`}</h2>
    </Container>
  );
};

export default Results;
