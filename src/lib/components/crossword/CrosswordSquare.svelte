<script lang="ts">
    import type {Square} from '#lib/types/crossword.js';

    interface Props {
        square: Square | null;
    }

    let {square}: Props = $props();
</script>

{#if square}
    <div class="cell" data-answer={square.answer}>
        {#if square.number}
            <span class="cell-number">{square.number}</span>
        {/if}
        <input type="text" maxlength="1" autocomplete="off" aria-label={square.label}/>
    </div>
{:else}
    <div class="cell block"></div>
{/if}

<style>
    .cell {
        position: relative;
        aspect-ratio: 1 / 1;
        background-color: var(--color-white);
    }

    .block {
        background-color: var(--color-black);
    }

    .cell-number {
        position: absolute;
        top: 2px;
        left: 4px;
        z-index: 1;
        font-size: var(--font-size-xs);
        line-height: 1;
        pointer-events: none;
    }

    input {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        margin: 0;
        padding: var(--space-sm) 0 0;
        border: none;
        border-radius: 0;
        background-color: transparent;
        color: var(--entry-color, var(--color-accent));
        font-family: inherit;
        font-size: var(--font-size-xl);
        text-align: center;
        text-transform: uppercase;
        transition: background-color 0.2s;
    }

    input:hover {
        background-color: var(--color-light-gray);
    }

    input:focus-visible {
        outline: 3px solid var(--color-accent);
        outline-offset: -3px;
        background-color: var(--color-accent-light);
    }

    .cell::after {
        content: attr(data-answer);
        position: absolute;
        inset: 0;
        display: var(--answer-display, none);
        justify-content: center;
        align-items: center;
        padding-top: var(--space-sm);
        color: var(--color-gray);
        font-size: var(--font-size-xl);
        pointer-events: none;
    }
</style>
