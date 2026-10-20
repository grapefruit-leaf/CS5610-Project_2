import type {Board} from '@honglinwei/arcade-core';

export type GameStatus = 'playing' | 'won' | 'lost';

export interface PlacedTile {
    key: string;
    id: number;
    value: number;
    row: number;
    col: number;
    merged: boolean;
}

export interface SavedGame {
    board: Board;
    score: number;
    best: number;
    seed: number;
    draws: number;
    gameId: number;
    continued: boolean;
}
