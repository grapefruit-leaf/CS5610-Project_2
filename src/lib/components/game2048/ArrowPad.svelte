<script lang="ts">
  import type { Direction } from '@honglinwei/arcade-core';

  interface Props {
    onmove: (direction: Direction) => void;
  }

  let { onmove }: Props = $props();

  const ARROWS: { direction: Direction; symbol: string }[] = [
    { direction: 'up', symbol: '↑' },
    { direction: 'left', symbol: '←' },
    { direction: 'down', symbol: '↓' },
    { direction: 'right', symbol: '→' },
  ];
</script>

<div class="arrow-pad" role="group" aria-label="Move tiles">
  {#each ARROWS as { direction, symbol } (direction)}
    <button type="button" class="arrow {direction}" aria-label="Move {direction}" onclick={() => onmove(direction)}>
      {symbol}
    </button>
  {/each}
</div>

<style>
  .arrow-pad {
    display: none;
    grid-template-areas:
      '. up .'
      'left down right';
    grid-template-columns: repeat(3, 56px);
    justify-content: center;
    gap: var(--space-sm);
    margin-top: var(--space-lg);
  }

  @media (pointer: coarse) {
    .arrow-pad {
      display: grid;
    }
  }

  .arrow {
    height: 56px;
    border: 1px solid var(--color-gray);
    border-radius: 4px;
    background-color: var(--color-white);
    color: var(--color-text);
    font-size: var(--font-size-xl);
    cursor: pointer;
    touch-action: manipulation;
  }

  .arrow:active {
    background-color: var(--color-light-gray);
  }

  .up {
    grid-area: up;
  }

  .left {
    grid-area: left;
  }

  .down {
    grid-area: down;
  }

  .right {
    grid-area: right;
  }
</style>
