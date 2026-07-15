import { AnimatedCounter } from "../../components/animated-counter";
import { MotionSection } from "../../components/motion-section";
import { researchAreas, statHighlights } from "../../lib/site-data";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="page-shell page-shell--inner">
      <MotionSection className="page-hero">
        <p className="section-kicker">About</p>
        <h1>Building AI systems with research and engineering in mind.</h1>
        <p className="section-copy section-copy--large">
          I&apos;m drawn to work that sits between research ambition and
          engineering rigor: LLM applications that need strong retrieval,
          backend systems that have to survive real load, and tools that reduce
          friction for developers and end users.
        </p>
      </MotionSection>

      <MotionSection className="section split-section">
        <div className="section-heading">
          <h2>What I focus on</h2>
        </div>
        <div className="section-body">
          <p className="section-copy">
            My current work spans production RAG systems, backend APIs,
            distributed architecture, AI inference optimization, and product
            experiences that make sophisticated models feel useful and
            dependable.
          </p>
          <p className="section-copy">
            I care a lot about retrieval quality, latency, grounded outputs,
            resilient infrastructure, and clear developer ergonomics. That
            combination has shaped both my freelance engineering work and my
            research direction.
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

      <MotionSection className="section">
        <div className="section-heading section-heading--full">
          <p className="section-kicker">Research Interests</p>
          <h2>Areas I want to keep exploring.</h2>
        </div>
        <div className="category-grid">
          {researchAreas.map((area) => (
            <article key={area} className="category-card">
              <h3>{area}</h3>
              <p className="section-copy">
                This area connects directly to the kind of products and systems
                I want to keep building over the next few years.
              </p>
            </article>
          ))}
        </div>
      </MotionSection>
    </div>
  );
}
