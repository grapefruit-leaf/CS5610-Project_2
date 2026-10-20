<script lang="ts">
    import {resolve} from '$app/paths';

    const PROJECTS = [
        {
            title: '2048',
            href: resolve('/2048'),
            description: 'Slide and merge tiles to reach 2048. Your game and best score stay saved in this browser.',
        },
        {
            title: 'Mini crossword',
            href: resolve('/crossword'),
            description: 'A 5 by 5 crossword with ten clues. Type in the squares, and check the answers when you get stuck.',
        },
        {
            title: 'arcade-core',
            href: 'https://www.npmjs.com/package/@honglinwei/arcade-core',
            description: 'The rules of 2048 as a small npm package of pure functions. This site installs it from npm.',
        },
        {
            title: 'This website',
            href: 'https://github.com/grapefruit-leaf/arcade',
            description: 'The source code is on GitHub.',
        },
    ];
</script>

<svelte:head>
    <title>Honglin Wei</title>
    <meta content="Honglin Wei, MSCS student at Northeastern University" name="description"/>
</svelte:head>

<section class="intro">
    <h1>Honglin Wei</h1>
    <p>I’m a software engineer in Seattle, WA.</p>
</section>

<section>
    <h2>Now</h2>
    <ul>
        <li>Finishing my master’s degree in computer science at Northeastern University. I’ll be done in Dec 2026.</li>
    </ul>
</section>

<section>
    <h2>Projects</h2>
    <ul class="project-list">
        {#each PROJECTS as project (project.title)}
            <li>
                <h3><a class="standalone-link" href={project.href}>{project.title}</a></h3>
                <p>{project.description}</p>
            </li>
        {/each}
    </ul>
</section>

<section>
    <h2>Contact</h2>
    <p>Email is the best way to reach me.</p>
    <p><a class="standalone-link" href="mailto:wei.hongl@northeastern.edu">wei.hongl@northeastern.edu</a></p>
</section>

<style>
    .intro p {
        font-size: var(--font-size-lg);
    }

    .project-list {
        padding: 0;
        list-style: none;
    }

    .project-list li {
        margin-bottom: var(--space-lg);
    }

    .project-list h3,
    .project-list p {
        margin: 0;
    }
</style>
