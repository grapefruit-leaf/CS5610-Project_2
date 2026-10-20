<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    organization: string;
    role: string;
    dates: string;
    children: Snippet;
  }

  let { organization, role, dates, children }: Props = $props();
</script>

<article class="job">
  <h3>{organization}</h3>
  <h4>{role}</h4>
  <p class="job-dates">{dates}</p>
  {@render children()}
</article>

<style>
  .job {
    margin-bottom: var(--space-xl);
  }

  .job h3,
  .job h4 {
    margin-bottom: 0;
  }

  .job-dates {
    color: var(--color-gray);
    font-size: var(--font-size-sm);
  }
</style>
