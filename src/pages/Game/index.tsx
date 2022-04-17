import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '../../components/Button';
import WordsBox from '../../components/WordsBox';
import { wordsList } from '../../consts/wordsList';

const Game = () => {
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [isChecking, setIsChecking] = useState(false);

  const { all_words: allWords, good_words: goodWords, question } = wordsList[0];

  const goodAnswers = selectedWords.filter((word) =>
    goodWords.includes(word)
  ).length;

  const badAnswers = selectedWords.filter(
    (word) => !goodWords.includes(word)
  ).length;

  const nonSelectedCorrectAnswers = goodWords.filter(
    (word) => !selectedWords.includes(word)
  ).length;

  const sumPoints = () =>
    goodAnswers * 2 - (badAnswers + nonSelectedCorrectAnswers);

  useEffect(() => {
    if (!isChecking) return;

    const points = sumPoints();
    console.log(points);
  }, [isChecking]);

  const handleCheckAnswer = () => {
    setIsChecking(true);
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
      <Button onClick={handleCheckAnswer}>
        {!isChecking ? 'Check answers' : 'Finish game'}
      </Button>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Game;
