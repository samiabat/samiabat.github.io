import Link from "next/link";
import { AnimatedCounter } from "../components/animated-counter";
import { GitHubSnapshot } from "../components/github-snapshot";
import { HeroVisual } from "../components/hero-visual";
import { MotionSection } from "../components/motion-section";
import { ProjectDiagram } from "../components/project-diagram";
import {
  achievements,
  architectureGallery,
  contactLinks,
  credibilityBadges,
  experienceTimeline,
  featuredProjects,
  heroRoles,
  resumeLinks,
  statHighlights,
  techCategories,
  youtubeHighlights,
} from "../lib/site-data";

export default function HomePage() {
  return (
    <div className="page-shell">
      <section className="hero">
        <MotionSection className="hero-copy">
          <p className="section-kicker">Landing Page</p>
          <h1>Samuel Abatneh</h1>
          <p className="hero-role-line">{heroRoles.join(" • ")}</p>
          <p className="hero-copy__text">
            I build production-ready AI systems, scalable backend
            infrastructure, and machine learning applications used by thousands
            of users.
          </p>

          <div className="hero-actions">
            <Link className="button button--primary" href="#projects">
              View Projects
            </Link>
            <a
              className="button button--secondary"
              href="https://github.com/samiabat"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="button button--secondary"
              href="https://linkedin.com/in/samiabat"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="button button--secondary"
              href={resumeLinks[0].href}
              target="_blank"
              rel="noreferrer"
            >
              Download Resume
            </a>
          </div>

          <div className="badge-row">
            {credibilityBadges.map((badge) => (
              <span key={badge} className="soft-badge">
                {badge}
              </span>
            ))}
          </div>
        </MotionSection>

        <MotionSection className="hero-stage" delay={0.12}>
          <HeroVisual />
        </MotionSection>
      </section>

      <MotionSection className="section split-section" id="about">
        <div className="section-heading">
          <p className="section-kicker">About Me</p>
          <h2>AI systems with real users, not demo-only prototypes.</h2>
        </div>
        <div className="section-body">
          <p className="section-copy section-copy--large">
            I&apos;m an AI Engineer specializing in building production-ready
            machine learning systems, retrieval-augmented generation, backend
            infrastructure, distributed systems, and developer tools.
          </p>
          <p className="section-copy">
            My interests span Generative AI, ML Infrastructure, Systems
            Programming, Reinforcement Learning, and scalable cloud
            architecture. I care about the full path from research idea to
            robust deployment: ingestion, serving, latency, observability, and
            user trust.
          </p>

          <div className="stats-grid">
            {statHighlights.map((item) => (
              <AnimatedCounter
                key={item.label}
                value={item.value}
                suffix={item.suffix}
                label={item.label}
              />
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="section" id="stack">
        <div className="section-heading section-heading--full">
          <p className="section-kicker">Tech Stack</p>
          <h2>Built for AI products, backend scale, and fast iteration.</h2>
        </div>
        <div className="category-grid">
          {techCategories.map((category) => (
            <article key={category.title} className="category-card">
              <h3>{category.title}</h3>
              <div className="chip-group">
                {category.items.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="section" id="projects">
        <div className="section-heading section-heading--full">
          <p className="section-kicker">Featured Projects</p>
          <h2>The strongest work gets the biggest surface area.</h2>
          <p className="section-copy">
            The portfolio centers architecture, production concerns, and real
            system thinking instead of shallow feature lists.
          </p>
        </div>

        <div className="project-showcase">
          {featuredProjects.map((project) => (
            <article key={project.title} className="project-card">
              <div className="project-card__visual">
                <ProjectDiagram type={project.diagram} title={project.title} />
              </div>
              <div className="project-card__content">
                <div className="project-card__header">
                  <span className="soft-badge soft-badge--accent">
                    {project.badge}
                  </span>
                  <h3>{project.title}</h3>
                </div>

                <p className="section-copy section-copy--large">
                  {project.description}
                </p>

                <div className="project-columns">
                  <div>
                    <h4>Architecture</h4>
                    <ul className="detail-list">
                      {project.architecture.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4>Technologies</h4>
                    <div className="chip-group">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="chip">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="project-links">
                  {project.githubUrl ? (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                  ) : (
                    <span className="button-ghost button-ghost--muted">
                      GitHub on request
                    </span>
                  )}
                  {project.liveUrl ? (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                      Live Demo
                    </a>
                  ) : (
                    <span className="button-ghost button-ghost--muted">
                      Live demo private
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="section" id="architecture">
        <div className="section-heading section-heading--full">
          <p className="section-kicker">Project Architecture Gallery</p>
          <h2>System diagrams, data flows, and infrastructure thinking.</h2>
        </div>
        <div className="architecture-grid">
          {architectureGallery.map((item) => (
            <article key={item.title} className="architecture-card">
              <div className="architecture-card__diagram">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <h3>{item.title}</h3>
              <p className="section-copy">{item.text}</p>
            </article>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="section split-section" id="experience">
        <div className="section-heading">
          <p className="section-kicker">Experience</p>
          <h2>A timeline shaped by research, teaching, and production delivery.</h2>
        </div>
        <div className="timeline">
          {experienceTimeline.map((item) => (
            <article key={item.year} className="timeline-card">
              <span className="timeline-card__year">{item.year}</span>
              <h3>{item.title}</h3>
              <p className="timeline-card__company">{item.company}</p>
              <p className="section-copy">{item.description}</p>
              <ul className="detail-list">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="section split-section" id="youtube">
        <div className="section-heading">
          <p className="section-kicker">YouTube</p>
          <h2>Visual engineering and creator-ready storytelling.</h2>
        </div>
        <div className="glass-panel">
          <p className="section-copy">
            This section is designed to expand into auto-synced YouTube content.
            Once you share your channel ID or preferred video URLs, we can wire
            in subscriber count, views, most popular videos, and latest uploads.
          </p>
          <div className="category-grid">
            <article className="category-card">
              <h3>Subscriber Count</h3>
              <p className="section-copy">Ready for live YouTube API sync.</p>
            </article>
            <article className="category-card">
              <h3>Videos</h3>
              <p className="section-copy">Prepared for automatic latest upload cards.</p>
            </article>
            <article className="category-card">
              <h3>Views</h3>
              <p className="section-copy">Designed for channel analytics highlights.</p>
            </article>
          </div>
          <div className="chip-group">
            {youtubeHighlights.map((item) => (
              <span key={item} className="chip">
                {item}
              </span>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="section">
        <GitHubSnapshot />
      </MotionSection>

      <MotionSection className="section">
        <div className="section-heading section-heading--full">
          <p className="section-kicker">Achievements</p>
          <h2>Recognition earned across engineering, research, and competition.</h2>
        </div>
        <div className="category-grid">
          {achievements.map((achievement) => (
            <article key={achievement} className="category-card">
              <h3>{achievement}</h3>
              <p className="section-copy">
                A signal of consistent performance across delivery, teaching,
                research, and problem solving.
              </p>
            </article>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="section split-section" id="contact">
        <div className="section-heading">
          <p className="section-kicker">Contact</p>
          <h2>Open to AI engineering, backend, and research-driven builds.</h2>
        </div>
        <div className="contact-panel">
          <div className="contact-list">
            {contactLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                <span>{link.label}</span>
                <strong>{link.text}</strong>
              </a>
            ))}
          </div>
          <div className="resume-buttons">
            {resumeLinks.map((resume) => (
              <a key={resume.label} className="button button--secondary" href={resume.href}>
                {resume.label}
              </a>
            ))}
          </div>
        </div>
      </MotionSection>
    </div>
  );
}
