<script lang="ts">
  import '#lib/styles/global.css';
  import favicon from '#lib/assets/favicon.svg';
  import Footer from '#lib/components/site/Footer.svelte';
  import Nav from '#lib/components/site/Nav.svelte';
  import type { LayoutProps } from './$types';

  let { children }: LayoutProps = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} type="image/svg+xml" />
</svelte:head>

<a class="skip-link" href="#main">Skip to main content</a>

<Nav />

<main id="main">
  {@render children()}
</main>

<Footer />

<style>
  .skip-link {
    position: absolute;
    top: var(--space-sm);
    left: var(--space-sm);
    z-index: 20;
    padding: var(--space-sm) var(--space-md);
    background-color: var(--color-white);
    translate: 0 -200%;
  }

  .skip-link:focus {
    translate: 0;
  }

  main {
    flex: 1;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: var(--space-xxl) var(--space-md);
  }
</style>
