<script lang="ts">
    import {prefersReducedMotion} from 'svelte/motion';
    import {fade} from 'svelte/transition';
    import Button from '#lib/components/ui/Button.svelte';

    interface Props {
        won: boolean;
        onrestart: () => void;
        oncontinue: () => void;
    }

    let {won, onrestart, oncontinue}: Props = $props();

    function focus(button: HTMLElement) {
        button.focus({preventScroll: true});
    }
</script>

<div class="game-message" transition:fade={{ duration: prefersReducedMotion.current ? 0 : 200 }}>
    {#if won}
        <h2>You made 2048!</h2>
        <div class="actions">
            <Button primary onclick={oncontinue} {@attach focus}>Keep going</Button>
            <Button onclick={onrestart}>New game</Button>
        </div>
    {:else}
        <h2>Game over</h2>
        <div class="actions">
            <Button primary onclick={onrestart} {@attach focus}>Try again</Button>
        </div>
    {/if}
</div>

<style>
    .game-message {
        position: absolute;
        inset: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: var(--space-md);
        padding: var(--space-md);
        background-color: color-mix(in srgb, var(--color-white) 88%, transparent);
        text-align: center;
    }

    h2 {
        margin: 0;
    }

    .actions {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: var(--space-sm);
    }
</style>
