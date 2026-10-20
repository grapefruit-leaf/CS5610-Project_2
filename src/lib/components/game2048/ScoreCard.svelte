<script lang="ts">
    interface Props {
        label: string;
        value: number;
        gain?: number;
    }

    let {label, value, gain = 0}: Props = $props();
</script>

<div class="score-card">
    <span class="label">{label}</span>
    <span class="value">{value}</span>
    {#key value}
        {#if gain > 0}
            <span class="gain" aria-hidden="true">+{gain}</span>
        {/if}
    {/key}
</div>

<style>
    .score-card {
        position: relative;
        display: flex;
        flex-direction: column;
        min-width: 80px;
        padding: var(--space-xs) var(--space-sm);
        border: 1px solid var(--color-border);
        border-radius: 4px;
        line-height: 1.3;
    }

    .label {
        color: var(--color-gray);
        font-size: var(--font-size-xs);
    }

    .value {
        color: var(--color-black);
        font-size: var(--font-size-lg);
        font-weight: 600;
        white-space: nowrap;
    }

    .gain {
        position: absolute;
        top: var(--space-xs);
        right: var(--space-sm);
        color: var(--color-accent);
        font-size: var(--font-size-sm);
        font-weight: 600;
        pointer-events: none;
        animation: rise 600ms ease-out forwards;
    }

    @keyframes rise {
        from {
            opacity: 1;
            translate: 0 0;
        }

        to {
            opacity: 0;
            translate: 0 calc(-1 * var(--space-lg));
        }
    }
</style>
