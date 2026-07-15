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
            I build reliable AI products and backend systems, from retrieval and
            inference pipelines to APIs that hold up under real-world load.
          </p>
          <div className="hero-actions">
            <Link className="button button--primary" href="#work">
              See selected work
            </Link>
            <a className="text-link" href={resumeLinks[0].href} target="_blank" rel="noreferrer">
              Read my Resume <span aria-hidden="true">-&gt;</span>
            </a>
            <a className="text-link" href="mailto:samuel.neuralnet@gmail.com">
              Email me <span aria-hidden="true">-&gt;</span>
            </a>
          </div>
        </MotionSection>
        <MotionSection className="hero-proof" delay={0.1}>
          <div className="hero-proof__heading">
            <p>Independent work</p>
            <a href="https://www.upwork.com/freelancers/~01896db10787fd9fd1" target="_blank" rel="noreferrer" aria-label="View Samuel Abatneh's Upwork profile">Upwork -&gt;</a>
          </div>
          <dl>
            <div><dt>$30K+</dt><dd>total earnings</dd></div>
            <div><dt>17</dt><dd>jobs completed</dd></div>
            <div><dt>3,596</dt><dd>hours worked</dd></div>
          </dl>
          <a className="upwork-status" href="https://www.upwork.com/freelancers/~01896db10787fd9fd1" target="_blank" rel="noreferrer">
            <span aria-hidden="true">●</span> Top Rated Plus on Upwork
          </a>
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
            <h2>Products and systems I've built.</h2>
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
        <Link className="text-link" href="/experience">View full experience -&gt;</Link>
      </MotionSection>

      <MotionSection className="competitive-section">
        <div className="competitive-section__intro">
          <p className="section-kicker">Competitive programming</p>
          <h2>Strong foundations in algorithms and problem solving.</h2>
          <p>
            I have solved more than 1,000 algorithmic problems and taught
            competitive programming, turning that practice into clearer
            reasoning about performance, edge cases, and system design.
          </p>
        </div>
        <div className="competitive-profiles">
          <a href="https://leetcode.com/u/Samuelabatneh/" target="_blank" rel="noreferrer">
            <span>LeetCode</span>
            <strong>Samuelabatneh</strong>
            <small>View profile -&gt;</small>
          </a>
          <a href="https://codeforces.com/profile/SBAGE" target="_blank" rel="noreferrer">
            <span>Codeforces</span>
            <strong>SBAGE</strong>
            <small>View profile -&gt;</small>
          </a>
        </div>
      </MotionSection>

      <MotionSection className="contact-section" id="contact">
        <div>
          <p className="section-kicker">Contact</p>
          <h2>Have an ambitious AI or backend problem?</h2>
          <p>I'm open to engineering roles, research collaborations, and focused product work.</p>
        </div>
        <div>
          <ContactLinkList links={contactLinks} />
        </div>
      </MotionSection>
    </div>
  );
}
