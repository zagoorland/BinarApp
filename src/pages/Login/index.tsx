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
      return alert('Enter your username first!');
    }

    setUser({ name: userInput });
    navigate('/game');
  };

  return (
    <Container>
      <h1>Wordcloud game</h1>
      <StyledForm onSubmit={handleSubmit}>
        <Input
          placeholder="Enter your nickname here..."
          name="username"
          type="text"
          onChange={(e) => setUserInput(e.target.value)}
          value={userInput}
        />
        <Button>Play</Button>
      </StyledForm>
    </Container>
  );
};

export default Login;
