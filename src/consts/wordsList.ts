export type WordsListType = {
  question: string;
  all_words: string[];
  good_words: string[];
};

export const wordsList: WordsListType[] = [
  {
    question: 'select animals',
    all_words: [
      'hole',
      'sofa',
      'pear',
      'tiger',
      'oatmeal',
      'square',
      'nut',
      'cub',
      'shirt',
      'tub',
      'passenger',
      'cow',
    ],
    good_words: ['tiger', 'cow'],
  },
];
