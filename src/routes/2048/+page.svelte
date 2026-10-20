<script lang="ts">
    import type {Direction} from '@honglinwei/arcade-core';
    import ArrowPad from '#lib/components/game2048/ArrowPad.svelte';
    import Board from '#lib/components/game2048/Board.svelte';
    import GameMessage from '#lib/components/game2048/GameMessage.svelte';
    import ScoreCard from '#lib/components/game2048/ScoreCard.svelte';
    import SeedForm from '#lib/components/game2048/SeedForm.svelte';
    import Button from '#lib/components/ui/Button.svelte';
    import {game} from '#lib/state/game2048.svelte.js';

    const KEY_DIRECTIONS: Record<string, Direction> = {
        ArrowUp: 'up',
        ArrowDown: 'down',
        ArrowLeft: 'left',
        ArrowRight: 'right',
    };

    const announcement = $derived.by(() => {
        if (game.status === 'won') return `You made 2048! Score ${game.score}.`;
        if (game.status === 'lost') return `Game over. Final score ${game.score}.`;
        return `Score ${game.score}.`;
    });

    function play(direction: Direction) {
        game.play(direction);
    }

    function handleKeydown(event: KeyboardEvent) {
        const direction = KEY_DIRECTIONS[event.key];
        const typing = event.target instanceof HTMLInputElement;
        if (!direction || typing || event.altKey || event.ctrlKey || event.metaKey) return;
        event.preventDefault();
        play(direction);
    }
</script>

<svelte:head>
    <title>2048 | Honglin Wei</title>
    <meta content="Slide and merge numbered tiles to reach 2048" name="description"/>
</svelte:head>

<svelte:window onkeydown={handleKeydown}/>

<section>
    <h1>2048</h1>
    <p>Slide every tile with the arrow keys, or swipe the board on a phone. Equal tiles merge into one. Make a 2048 tile
        to win.</p>
</section>

<div class="game-area">
    <div class="play">
        <div class="scoreboard">
            <ScoreCard gain={game.lastGain} label="Score" value={game.score}/>
            <ScoreCard label="Best" value={game.best}/>
            <div class="new-game">
                <Button onclick={() => game.newGame()}>New game</Button>
            </div>
        </div>

        <div class="board-area">
            <Board board={game.board} gameId={game.gameId} onmove={play}/>
            {#if game.status !== 'playing'}
                <GameMessage
                        won={game.status === 'won'}
                        onrestart={() => game.newGame()}
                        oncontinue={() => game.keepPlaying()}
                />
            {/if}
        </div>

        <ArrowPad onmove={play}/>
        <p aria-atomic="true" aria-live="polite" class="visually-hidden">{announcement}</p>
    </div>

    <div class="details">
        <section>
            <h2>How to play</h2>
            <ul>
                <li>Each move slides every tile as far as it can go.</li>
                <li>Two tiles with the same number merge into one, once per move.</li>
                <li>After every move that changes the board, a 2 or a 4 appears in an empty square.</li>
                <li>Each merge adds the new tile’s value to your score.</li>
                <li>Make a 2048 tile to win, then keep going. The game ends when no move is left.</li>
                <li>Your game and best score are saved in this browser.</li>
            </ul>
        </section>

        <section>
            <h2>Replay a game</h2>
            <SeedForm onstart={(seed) => game.newGame(seed)} seed={game.seed}/>
        </section>
    </div>
</div>

<style>
    .game-area {
        display: flex;
        flex-direction: column;
        gap: var(--space-xl);
        margin-bottom: var(--space-xxl);
    }

    .play {
        width: 100%;
        max-width: 420px;
    }

    .scoreboard {
        display: flex;
        flex-wrap: wrap;
        align-items: stretch;
        gap: var(--space-sm);
        margin-bottom: var(--space-md);
    }

    .new-game {
        display: flex;
        align-items: center;
        margin-left: auto;
    }

    .board-area {
        position: relative;
    }

    @media (min-width: 768px) {
        .game-area {
            flex-direction: row;
            align-items: flex-start;
            gap: var(--space-xxl);
        }

        .play {
            flex-shrink: 0;
        }

        .details {
            flex: 1;
        }
    }
</style>
