<script lang="ts">
    import {backOut, cubicOut} from 'svelte/easing';
    import {prefersReducedMotion} from 'svelte/motion';
    import {scale} from 'svelte/transition';

    interface Props {
        value: number;
        row: number;
        col: number;
        merged: boolean;
    }

    let {value, row, col, merged}: Props = $props();

    const SLIDE_MS = 100;
    const APPEAR_MS = 200;
    const DARKEST_TILE = 4096;
    const LIGHT_TEXT_FROM = 128;

    const color = $derived(`var(--color-tile-${Math.min(value, DARKEST_TILE)})`);
    const digits = $derived(Math.min(String(value).length, 5));
</script>

<div
        class="tile"
        class:light-text={value >= LIGHT_TEXT_FROM}
        data-digits={digits}
        in:scale={{
    delay: prefersReducedMotion.current ? 0 : SLIDE_MS,
    duration: prefersReducedMotion.current ? 0 : APPEAR_MS,
    opacity: merged ? 1 : 0,
    easing: merged ? backOut : cubicOut,
  }}
        style:--col={col}
        style:--row={row}
        style:background-color={color}
>
    {value}
</div>

<style>
    .tile {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: calc((100% - (var(--size) - 1) * var(--gap)) / var(--size));
        aspect-ratio: 1;
        translate: calc(var(--col) * (100% + var(--gap))) calc(var(--row) * (100% + var(--gap)));
        color: var(--color-text);
        font-size: var(--font-size-xxl);
        font-weight: 600;
        line-height: 1;
        transition: translate 100ms ease-in-out;
    }

    .light-text {
        color: var(--color-white);
    }

    .tile[data-digits='3'] {
        font-size: var(--font-size-xl);
    }

    .tile[data-digits='4'] {
        font-size: var(--font-size-lg);
    }

    .tile[data-digits='5'] {
        font-size: var(--font-size-sm);
    }
</style>
