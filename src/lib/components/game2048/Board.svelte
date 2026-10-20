<script lang="ts">
    import {type Board, type Direction, toValues} from '@honglinwei/arcade-core';
    import {swipe} from '#lib/utils/swipe.js';
    import {placeTiles} from '#lib/utils/tiles.js';
    import Tile from './Tile.svelte';

    interface Props {
        board: Board;
        gameId: number;
        onmove: (direction: Direction) => void;
    }

    let {board, gameId, onmove}: Props = $props();

    const tiles = $derived(placeTiles(board, gameId));
    const description = $derived(
        toValues(board)
            .map((row, index) => `Row ${index + 1}: ${row.map((value) => value || 'empty').join(', ')}`)
            .join('. '),
    );
</script>

<div {@attach swipe(onmove)} aria-label="Game board. {description}." class="board" role="img"
     style:--size={board.length}>
    {#each {length: board.length ** 2}}
        <div class="cell"></div>
    {/each}
    {#each tiles as tile (tile.key)}
        <Tile value={tile.value} row={tile.row} col={tile.col} merged={tile.merged}/>
    {/each}
</div>

<style>
    .board {
        --gap: 2px;
        position: relative;
        display: grid;
        grid-template-columns: repeat(var(--size), 1fr);
        gap: var(--gap);
        border: var(--gap) solid var(--color-black);
        background-color: var(--color-black);
        touch-action: none;
        user-select: none;
    }

    .cell {
        aspect-ratio: 1;
        background-color: var(--color-white);
    }
</style>
