import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { UserContext } from '../../contexts/UserContext';
import { Container, StyledForm } from './styles';

const Login = () => {
  const [userInput, setUserInput] = useState('');
  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!userInput.length) {
      alert('Enter your username first!');
      return;
    }

    setUser({ username: userInput });
    navigate('/game');
  };

  return (
    <Container>
      <h1>Wordcloud game</h1>
      <StyledForm onSubmit={handleSubmit}>
        <Input
          placeholder="Enter your nickname here..."
          name="username"
          onChange={(e) => setUserInput(e.target.value)}
          value={userInput}
        />
        <Button disabled={!userInput.length}>Play</Button>
      </StyledForm>
      {userInput && <p>Welcome {userInput}</p>}
    </Container>
  );
};

export default Login;
