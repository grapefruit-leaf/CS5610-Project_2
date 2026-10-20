<script lang="ts">
    import portrait from '#lib/assets/portrait.svg';
    import ResumeEntry from '#lib/components/about/ResumeEntry.svelte';
</script>

<svelte:head>
    <title>About | Honglin Wei</title>
    <meta content="Work experience, education and skills of Honglin Wei" name="description"/>
</svelte:head>

<section class="about-intro">
    <h1>About</h1>
    <img alt="Placeholder portrait of Honglin" class="portrait" height="360" src={portrait} width="300"/>
    <p>
        M.S. Computer Science student at Northeastern University and software engineer with 3+ years of experience in
        backend development and distributed systems. Proficient in Java, Python, microservices, and CI/CD. Looking for a
        high-growth team where I can apply my technical skills and make an immediate impact.
    </p>
</section>

<section>
    <h2>Experience</h2>

    <ResumeEntry dates="May 2021 to Aug 2024, full-time" organization="Cardinal Health" role="Software Engineer">
        <h5>Projects</h5>
        <h6>Freight management system</h6>
        <p>
            Built a freight management system with Java 17, Spring Boot, and microservices. It automated freight and PO
            file
            parsing for 200+ customers with 20M+ data points, and cost/billing center matching for 15,000+ locations.
        </p>
        <h6>Freight Pay and Audit system</h6>
        <p>
            Integrated a Freight Pay and Audit process with a web-based dashboard, giving stakeholders near real-time
            shipment
            visibility and tools to track key benchmarks like performance and expense summaries.
        </p>
    </ResumeEntry>

    <ResumeEntry dates="Jan 2021 to Apr 2021, full-time" organization="Deloitte" role="Systems Engineer">
        <h5>Projects</h5>
        <h6>Customer Support Portal</h6>
        <p>Developed RESTful APIs using OAuth2 and Spring Boot for data retrieval from database.</p>
        <h6>Production support</h6>
        <p>
            Did root cause analysis for production and bug-related incidents, using complex joins, subqueries, and
            nested SQL
            queries for data issues, and documented findings and fixes in Jira.
        </p>
    </ResumeEntry>
</section>

<section>
    <h2>Education</h2>
    <ResumeEntry dates="Expected Dec 2026" organization="Northeastern University" role="M.S. in Computer Science">
        <p>Courses in ML/RL, distributed systems, and cloud computing.</p>
    </ResumeEntry>
</section>

<section>
    <h2>Skills</h2>

    <h3>Languages and tools</h3>
    <ul>
        <li>Java, Python, HTML5, CSS, TypeScript, PL/SQL, SQL</li>
        <li>
            Jira, Node.js, RESTful API, Gradle, Maven, Log4j, Docker, Pivotal GemFire, Concourse, Flyway, WebSocket,
            PCF,
            GCP, Google Pub/Sub, Apigee, Lucidchart, Splunk, Dynatrace, BigPanda
        </li>
    </ul>

    <h3>Frameworks and databases</h3>
    <ul>
        <li>Spring (Boot, Cloud, WebFlux, Security), Angular 16</li>
        <li>PostgreSQL, Redis, Hibernate, Oracle</li>
    </ul>

    <h3>Expertise</h3>
    <ul>
        <li>Microservices, TDD, API Design, Data Modeling, CI/CD, Scalability, Performance Optimization, Agile</li>
    </ul>
</section>

<style>
    .portrait {
        display: block;
        width: 150px;
        margin-bottom: var(--space-md);
    }

    @media (min-width: 601px) {
        .about-intro {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            gap: var(--space-lg);
        }

        .about-intro h1 {
            width: 100%;
            margin-bottom: 0;
        }

        .about-intro p {
            flex: 1;
        }

        .portrait {
            margin-bottom: 0;
        }
    }

    h5 {
        margin-top: var(--space-md);
    }

    h6 {
        margin-top: var(--space-md);
        margin-bottom: var(--space-xs);
    }
</style>
