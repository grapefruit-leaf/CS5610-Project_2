<script lang="ts">
    import Button from '#lib/components/ui/Button.svelte';
    import {MAX_SEED} from '#lib/utils/random.js';

    interface Props {
        seed: number;
        onstart: (seed: number) => void;
    }

    let {seed, onstart}: Props = $props();

    function submit(event: SubmitEvent & { currentTarget: EventTarget & HTMLFormElement }) {
        event.preventDefault();
        onstart(Number(new FormData(event.currentTarget).get('seed')));
    }
</script>

<form onsubmit={submit}>
    <label for="seed">Seed</label>
    <p class="hint" id="seed-hint">The same seed and the same moves always bring the same new tiles.</p>
    <div class="row">
        <input
                aria-describedby="seed-hint"
                id="seed"
                inputmode="numeric"
                max={MAX_SEED}
                min="0"
                name="seed"
                required
                step="1"
                type="number"
                value={seed}
        />
        <Button type="submit">Play seed</Button>
    </div>
</form>

<style>
    label {
        display: block;
        font-weight: 600;
    }

    .hint {
        color: var(--color-gray);
        font-size: var(--font-size-sm);
    }

    .row {
        display: flex;
        flex-wrap: wrap;
        gap: var(--space-sm);
    }

    input {
        width: 14ch;
        min-height: 44px;
        padding: var(--space-sm);
        border: 1px solid var(--color-gray);
        border-radius: 4px;
        color: var(--color-text);
        font-family: inherit;
        font-size: var(--font-size-sm);
    }
</style>
