export interface WordsBoxProps {
  allWords: string[];
  goodWords: string[];
  selectedWords: string[];
  isChecking: boolean;
  setSelectedWords: (words: string[]) => void;
}
