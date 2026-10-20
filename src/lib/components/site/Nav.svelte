<script lang="ts">
    import {resolve} from '$app/paths';
    import {page} from '$app/state';

    const LINKS = [
        {route: '/', label: 'Home', href: resolve('/')},
        {route: '/crossword', label: 'Crossword', href: resolve('/crossword')},
        {route: '/2048', label: '2048', href: resolve('/2048')},
        {route: '/about', label: 'About', href: resolve('/about')},
        {route: '/contact', label: 'Contact', href: resolve('/contact')},
    ];
</script>

<header>
    <nav aria-label="Main">
        <a class="site-name" href={resolve('/')}>Honglin Wei</a>
        <ul class="nav-links">
            {#each LINKS as link (link.route)}
                {@const current = page.route.id === link.route}
                <li>
                    <a href={link.href} class:active={current}
                       aria-current={current ? 'page' : undefined}>{link.label}</a>
                </li>
            {/each}
        </ul>
    </nav>
</header>

<style>
    header {
        position: sticky;
        top: 0;
        z-index: 10;
        background-color: var(--color-white);
        border-bottom: 1px solid var(--color-border);
    }

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 800px;
        margin: 0 auto;
        padding: 0 var(--space-md);
    }

    .site-name {
        padding: 12px 0;
        color: var(--color-black);
        font-weight: 600;
        text-decoration: none;
    }

    .site-name:hover {
        text-decoration: underline;
    }

    .nav-links {
        display: flex;
        max-width: none;
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .nav-links a {
        display: block;
        padding: 12px;
        text-decoration: none;
        transition: background-color 0.2s;
    }

    .nav-links a:hover {
        background-color: var(--color-light-gray);
        text-decoration: underline;
    }

    .nav-links a.active {
        color: var(--color-black);
        font-weight: 600;
        text-decoration: underline;
        text-decoration-thickness: 2px;
        text-underline-offset: 6px;
    }

    .nav-links a:focus-visible {
        outline-offset: -3px;
    }

    @media (max-width: 600px) {
        .nav-links {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            background-color: var(--color-white);
            border-top: 1px solid var(--color-border);
        }

        .nav-links li {
            flex: 1 1 auto;
            text-align: center;
        }

        .nav-links a {
            padding: 12px 2px;
            font-size: var(--font-size-sm);
        }
    }
</style>
