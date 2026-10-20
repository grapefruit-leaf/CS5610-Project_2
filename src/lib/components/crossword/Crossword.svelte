<script lang="ts">
    import Button from '#lib/components/ui/Button.svelte';
    import type {Square} from '#lib/types/crossword.js';
    import CrosswordSquare from './CrosswordSquare.svelte';

    interface Props {
        squares: (Square | null)[];
    }

    let {squares}: Props = $props();
</script>

<form class="puzzle-form">
    <input class="reveal-checkbox" id="show-answers" type="checkbox"/>
    <label class="reveal-label" for="show-answers">Show answers</label>

    <div class="crossword-grid">
        {#each squares as square}
            <CrosswordSquare {square}/>
        {/each}
    </div>

    <div class="actions">
        <Button type="reset">Clear grid</Button>
    </div>
</form>

<style>
    .reveal-checkbox {
        width: 24px;
        height: 24px;
        margin: 0 var(--space-sm) 0 0;
        vertical-align: middle;
        accent-color: var(--color-accent);
        cursor: pointer;
    }

    .reveal-label {
        display: inline-block;
        padding: 10px 0;
        cursor: pointer;
    }

    .crossword-grid {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 2px;
        max-width: 350px;
        margin-top: var(--space-sm);
        border: 2px solid var(--color-black);
        background-color: var(--color-black);
    }

    /* Same CSS-only reveal as Project 1: each square reads these two variables. */
    .reveal-checkbox:checked ~ .crossword-grid {
        --answer-display: flex;
        --entry-color: transparent;
    }

    .actions {
        margin-top: var(--space-md);
    }

    @media (min-width: 768px) {
        .puzzle-form {
            flex-shrink: 0;
            width: 350px;
        }
    }
</style>
