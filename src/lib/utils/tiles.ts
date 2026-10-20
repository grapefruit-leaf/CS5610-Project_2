import type { Board } from '@honglinwei/arcade-core';
import type { PlacedTile } from '#lib/types/game2048.js';

export function placeTiles(board: Board, gameId: number): PlacedTile[] {
  const tiles: PlacedTile[] = [];

  board.forEach((cells, row) => {
    cells.forEach((tile, col) => {
      if (!tile) return;

      // The two tiles that merged are drawn once more at the merge spot,
      // so they slide in under the new tile instead of disappearing.
      for (const id of tile.mergedFrom ?? []) {
        tiles.push({ key: `${gameId}-${id}`, id, value: tile.value / 2, row, col, merged: false });
      }

      const merged = Boolean(tile.mergedFrom);
      tiles.push({ key: `${gameId}-${tile.id}`, id: tile.id, value: tile.value, row, col, merged });
    });
  });

  // Sorting by id keeps existing tiles in the same DOM order, so their slide isn't interrupted.
  return tiles.sort((a, b) => a.id - b.id);
}
