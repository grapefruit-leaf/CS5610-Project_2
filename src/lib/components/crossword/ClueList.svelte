<script lang="ts">
    import type {Clue} from '#lib/types/crossword.js';

    interface Props {
        title: string;
        clues: Clue[];
    }

    let {title, clues}: Props = $props();
</script>

<h3>{title}</h3>
<ol class="clue-list">
    {#each clues as clue (clue.number)}
        <li value={clue.number}>{clue.text}</li>
    {/each}
</ol>

<style>
    h3 {
        margin-top: var(--space-lg);
    }

    .clue-list {
        padding-left: var(--space-xl);
    }

    .clue-list li::marker {
        font-weight: 600;
    }
</style>
