<script lang="ts">
  import Button from '#lib/components/ui/Button.svelte';
  import { MAX_SEED } from '#lib/utils/random.js';

  interface Props {
    seed: number;
    onstart: (seed: number) => void;
  }

  let { seed, onstart }: Props = $props();

  function submit(event: SubmitEvent & { currentTarget: EventTarget & HTMLFormElement }) {
    event.preventDefault();
    onstart(Number(new FormData(event.currentTarget).get('seed')));
  }
</script>

<form onsubmit={submit}>
  <label for="seed">Seed</label>
  <p id="seed-hint" class="hint">The same seed and the same moves always bring the same new tiles.</p>
  <div class="row">
    <input
      id="seed"
      name="seed"
      type="number"
      inputmode="numeric"
      min="0"
      max={MAX_SEED}
      step="1"
      required
      value={seed}
      aria-describedby="seed-hint"
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
    font-family: var(--font-main);
    font-size: var(--font-size-sm);
  }
</style>
