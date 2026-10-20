<script lang="ts">
  import type { HTMLButtonAttributes } from 'svelte/elements';

  interface Props extends HTMLButtonAttributes {
    primary?: boolean;
  }

  let { primary = false, type = 'button', children, ...attributes }: Props = $props();
</script>

<button {type} class:primary {...attributes}>
  {@render children?.()}
</button>

<style>
  button {
    min-height: 44px;
    padding: var(--space-sm) var(--space-md);
    border: 1px solid var(--color-gray);
    border-radius: 4px;
    background-color: var(--color-white);
    color: var(--color-text);
    font-family: var(--font-main);
    font-size: var(--font-size-sm);
    cursor: pointer;
    transition: background-color 0.2s;
  }

  button:hover {
    background-color: var(--color-light-gray);
  }

  .primary {
    border-color: var(--color-accent);
    background-color: var(--color-accent);
    color: var(--color-white);
  }

  .primary:hover {
    background-color: var(--color-accent-dark);
  }
</style>
