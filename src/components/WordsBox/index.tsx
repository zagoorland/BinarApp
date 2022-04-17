import SingleWord from '../SingleWord';
import { Container } from './styles';

interface WordsBoxProps {
  allWords: string[];
  goodWords: string[];
  selectedWords: string[];
  isChecking: boolean;
  setSelectedWords: (words: string[]) => void;
}

const WordsBox = ({
  allWords,
  goodWords,
  selectedWords,
  isChecking,
  setSelectedWords,
}: WordsBoxProps) => {
  const handleClick = (word: string) => {
    if (selectedWords.includes(word)) {
      setSelectedWords(selectedWords.filter((w) => w !== word));
    } else {
      setSelectedWords([...selectedWords, word]);
    }
  };

  return (
    <Container>
      {allWords.map((word, index) => (
        <SingleWord
          key={index}
          goodWords={goodWords}
          isChecking={isChecking}
          onClick={() => handleClick(word)}
        >
          {word}
        </SingleWord>
      ))}
    </Container>
  );
};

export default WordsBox;
