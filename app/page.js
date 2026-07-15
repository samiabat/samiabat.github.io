import Link from "next/link";
import { ContactLinkList } from "../components/contact-link-list";
import { MotionSection } from "../components/motion-section";
import {
  contactLinks,
  experienceTimeline,
  featuredProjects,
  resumeLinks,
} from "../lib/site-data";

export default function HomePage() {
  return (
    <div className="page-shell">
      <section className="hero hero--editorial">
        <MotionSection className="hero-copy">
          <p className="section-kicker">AI engineer · Addis Ababa, Ethiopia</p>
          <h1>Samuel Abatneh</h1>
          <p className="hero-copy__text hero-copy__text--lead">
            I build reliable AI products and backend systems—from retrieval and
            inference pipelines to APIs that hold up under real-world load.
          </p>
          <div className="hero-actions">
            <Link className="button button--primary" href="#work">
              See selected work
            </Link>
            <a className="text-link" href={resumeLinks[0].href} target="_blank" rel="noreferrer">
              Read my résumé <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href="mailto:samuel.neuralnet@gmail.com">
              Email me <span aria-hidden="true">↗</span>
            </a>
          </div>
        </MotionSection>
        <MotionSection className="hero-proof" delay={0.1}>
          <p>Selected outcomes</p>
          <dl>
            <div><dt>10,000+</dt><dd>concurrent users tested</dd></div>
            <div><dt>300 ms</dt><dd>latency after optimization</dd></div>
            <div><dt>Top Rated Plus</dt><dd>independent engineering work</dd></div>
          </dl>
        </MotionSection>
      </section>

      <MotionSection className="editorial-intro">
        <p className="section-kicker">Profile</p>
        <p className="editorial-statement">
          My work sits where applied AI meets dependable software. I care about
          retrieval quality, latency, observability, and whether a system is
          genuinely useful once it reaches users.
        </p>
      </MotionSection>

      <MotionSection className="work-section" id="work">
        <div className="section-heading section-heading--row">
          <div>
            <p className="section-kicker">Selected work</p>
            <h2>Products and systems I’ve built.</h2>
          </div>
          <p>Case studies spanning AI search, agents, learning tools, and real-time inference.</p>
        </div>
        <div className="work-list">
          {featuredProjects.slice(0, 4).map((project, index) => (
            <article key={project.title} className="work-item">
              <span className="work-item__number">0{index + 1}</span>
              <div className="work-item__main">
                <p className="work-item__type">{project.badge}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <div className="work-item__detail">
                <strong>What I delivered</strong>
                <ul>
                  {project.architecture.slice(0, 3).map((item) => <li key={item}>{item}</li>)}
                </ul>
                {project.githubUrl && (
                  <a className="text-link" href={project.githubUrl} target="_blank" rel="noreferrer">
                    View source <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="experience-section" id="experience">
        <div className="section-heading">
          <p className="section-kicker">Experience</p>
          <h2>Engineering, research, and teaching.</h2>
        </div>
        <div className="experience-list">
          {experienceTimeline.map((item) => (
            <article key={item.year} className="experience-row">
              <span>{item.year}</span>
              <div><h3>{item.title}</h3><p>{item.company}</p></div>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
        <Link className="text-link" href="/experience">View full experience →</Link>
      </MotionSection>

      <MotionSection className="contact-section" id="contact">
        <div>
          <p className="section-kicker">Contact</p>
          <h2>Have an ambitious AI or backend problem?</h2>
          <p>I’m open to engineering roles, research collaborations, and focused product work.</p>
        </div>
        <div>
          <ContactLinkList links={contactLinks} />
        </div>
      </MotionSection>
    </div>
  );
}
