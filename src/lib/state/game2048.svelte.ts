import { canMove, createBoard, hasMoves, hasWon, move, score, spawn } from '@honglinwei/arcade-core';
import type { Board, Direction } from '@honglinwei/arcade-core';
import type { GameStatus, SavedGame } from '#lib/types/game2048.js';
import { mulberry32, randomSeed } from '#lib/utils/random.js';
import { load, save } from '#lib/utils/storage.js';

const STORAGE_KEY = 'arcade-2048';

class Game2048 {
  board = $state.raw<Board>(createBoard());
  score = $state(0);
  best = $state(0);
  seed = $state(0);
  gameId = $state(0);
  continued = $state(false);
  #draws = 0;

  lastGain = $derived(score(this.board));
  status: GameStatus = $derived(
    hasWon(this.board) && !this.continued ? 'won' : hasMoves(this.board) ? 'playing' : 'lost',
  );

  constructor() {
    if (!this.#restore()) this.newGame();
  }

  newGame(seed = randomSeed()) {
    this.seed = seed;
    this.#draws = 0;
    this.gameId += 1;
    this.score = 0;
    this.continued = false;
    this.board = this.#spawn(this.#spawn(createBoard()));
    this.#save();
  }

  play(direction: Direction) {
    if (this.status !== 'playing' || !canMove(this.board, direction)) return;
    this.board = this.#spawn(move(this.board, direction));
    this.score += this.lastGain;
    this.best = Math.max(this.best, this.score);
    this.#save();
  }

  keepPlaying() {
    this.continued = true;
    this.#save();
  }

  #spawn(board: Board) {
    return spawn(board, () => mulberry32(this.seed, this.#draws++));
  }

  #save() {
    const saved: SavedGame = {
      board: this.board,
      score: this.score,
      best: this.best,
      seed: this.seed,
      draws: this.#draws,
      gameId: this.gameId,
      continued: this.continued,
    };
    save(STORAGE_KEY, saved);
  }

  #restore() {
    const saved = load<SavedGame>(STORAGE_KEY);
    if (!saved || !Array.isArray(saved.board)) return false;
    this.board = saved.board;
    this.score = saved.score;
    this.best = saved.best;
    this.seed = saved.seed;
    this.gameId = saved.gameId;
    this.continued = saved.continued;
    this.#draws = saved.draws;
    return true;
  }
}

export const game = new Game2048();
