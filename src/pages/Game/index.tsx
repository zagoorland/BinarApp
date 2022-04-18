import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import WordsBox from '../../components/WordsBox';
import { Container } from './styles';
import { WordsListType } from './types';

const Game = () => {
  const [gameList, setGameList] = useState<WordsListType>({
    all_words: [''],
    good_words: [''],
    question: '',
  });
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [isChecking, setIsChecking] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const response = await fetch('gamelist.json');
      const data = await response.json();
      const randomIndex = Math.floor(Math.random() * data.length);
      setGameList(data[randomIndex]);
    })();
  }, []);

  const { all_words: allWords, good_words: goodWords, question } = gameList;

  const goodAnswers = selectedWords.filter((word) =>
    goodWords.includes(word)
  ).length;

  const badAnswers = selectedWords.filter(
    (word) => !goodWords.includes(word)
  ).length;

  const nonSelectedCorrectAnswers = goodWords.filter(
    (word) => !selectedWords.includes(word)
  ).length;

  const sumPoints = goodAnswers * 2 - (badAnswers + nonSelectedCorrectAnswers);

  const handleCheckAnswer = () => {
    setIsChecking(true);

    if (isChecking) {
      navigate('/results', { state: { result: sumPoints } });
    }
  };

  return (
    <Container>
      <h2>{question || ''}</h2>
      <WordsBox
        {...{
          allWords,
          goodWords,
          selectedWords,
          setSelectedWords,
          isChecking,
        }}
      />
      <Button onClick={handleCheckAnswer} disabled={!selectedWords.length}>
        {!isChecking ? 'Check answers' : 'Finish game'}
      </Button>
    </Container>
  );
};

export default Game;
