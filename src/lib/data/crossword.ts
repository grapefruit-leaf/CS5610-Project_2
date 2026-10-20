import type {Clue, Square} from '#lib/types/crossword.js';

export const SQUARES: (Square | null)[] = [
    {answer: 'A', number: 1, label: 'Row 1, column 1, 1 Across, 1 Down'},
    {answer: 'L', number: 2, label: 'Row 1, column 2, 1 Across, 2 Down'},
    {answer: 'L', number: 3, label: 'Row 1, column 3, 1 Across, 3 Down'},
    null,
    null,
    {answer: 'D', number: 4, label: 'Row 2, column 1, 4 Across, 1 Down'},
    {answer: 'E', label: 'Row 2, column 2, 4 Across, 2 Down'},
    {answer: 'A', label: 'Row 2, column 3, 4 Across, 3 Down'},
    {answer: 'F', number: 5, label: 'Row 2, column 4, 4 Across, 5 Down'},
    null,
    {answer: 'S', number: 6, label: 'Row 3, column 1, 6 Across, 1 Down'},
    {answer: 'T', label: 'Row 3, column 2, 6 Across, 2 Down'},
    {answer: 'Y', label: 'Row 3, column 3, 6 Across, 3 Down'},
    {answer: 'L', label: 'Row 3, column 4, 6 Across, 5 Down'},
    {answer: 'E', number: 7, label: 'Row 3, column 5, 6 Across, 7 Down'},
    null,
    {answer: 'S', number: 8, label: 'Row 4, column 2, 8 Across, 2 Down'},
    {answer: 'E', label: 'Row 4, column 3, 8 Across, 3 Down'},
    {answer: 'E', label: 'Row 4, column 4, 8 Across, 5 Down'},
    {answer: 'N', label: 'Row 4, column 5, 8 Across, 7 Down'},
    null,
    null,
    {answer: 'R', number: 9, label: 'Row 5, column 3, 9 Across, 3 Down'},
    {answer: 'A', label: 'Row 5, column 4, 9 Across, 5 Down'},
    {answer: 'D', label: 'Row 5, column 5, 9 Across, 7 Down'},
];

export const ACROSS_CLUES: Clue[] = [
    {number: 1, text: 'CSS property that can reset every other property in one line (3)'},
    {number: 4, text: 'Like many viewers who rely on video captions (4)'},
    {number: 6, text: 'HTML element that holds embedded CSS (5)'},
    {number: 8, text: 'Status under a message that’s been read, in many chat apps (4)'},
    {number: 9, text: 'Totally awesome, in 1980s slang (3)'},
];

export const DOWN_CLUES: Clue[] = [
    {number: 1, text: 'Pop-ups and banners, often (3)'},
    {number: 2, text: 'Permits (4)'},
    {number: 3, text: 'Stacking level that z-index decides (5)'},
    {number: 5, text: 'Tiny jumping pest (4)'},
    {number: 7, text: 'Keyboard key that pairs with Home (3)'},
];
