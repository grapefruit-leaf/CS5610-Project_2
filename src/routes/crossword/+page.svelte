<script lang="ts">
    import ClueList from '#lib/components/crossword/ClueList.svelte';
    import Crossword from '#lib/components/crossword/Crossword.svelte';
    import {ACROSS_CLUES, DOWN_CLUES, SQUARES} from '#lib/data/crossword.js';
</script>

<svelte:head>
    <title>Mini crossword | Honglin Wei</title>
    <meta content="A 5 by 5 mini crossword with ten clues" name="description"/>
</svelte:head>

<section>
    <h1>Mini crossword</h1>
    <p>Click or tap a square and type a letter. Press Tab to go to the next square and Shift + Tab to go back.</p>
</section>

<div class="puzzle-area">
    <Crossword squares={SQUARES}/>

    <section class="clues">
        <h2>Clues</h2>
        <ClueList clues={ACROSS_CLUES} title="Across"/>
        <ClueList clues={DOWN_CLUES} title="Down"/>
    </section>
</div>

<section>
    <h2>About this puzzle</h2>
    <p>
        I made this for a web development class that didn’t allow JavaScript. It now lives in a Svelte app, but showing
        the
        answers still works with CSS alone.
    </p>
    <p><a class="standalone-link" href="https://github.com/grapefruit-leaf/arcade">Read the code on GitHub</a></p>
</section>

<style>
    .puzzle-area {
        display: flex;
        flex-direction: column;
        gap: var(--space-xl);
        margin-bottom: var(--space-xxl);
    }

    .clues {
        margin-bottom: 0;
    }

    @media (min-width: 768px) {
        .puzzle-area {
            flex-direction: row;
            align-items: flex-start;
            gap: var(--space-xxl);
        }
    }
</style>
