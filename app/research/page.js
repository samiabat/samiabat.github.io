import { MotionSection } from "../../components/motion-section";
import { researchAreas } from "../../lib/site-data";

export const metadata = {
  title: "Research",
};

export default function ResearchPage() {
  return (
    <div className="page-shell page-shell--inner">
      <MotionSection className="page-hero">
        <p className="section-kicker">Research</p>
        <h1>Applied AI research with clear real-world stakes.</h1>
        <p className="section-copy section-copy--large">
          My undergraduate research focused on NLP-based hate speech and threat
          detection, with an emphasis on deployment potential, practical
          accuracy, and social impact.
        </p>
      </MotionSection>

      <MotionSection className="section split-section">
        <div className="section-heading">
          <h2>Recognition</h2>
        </div>
        <div className="glass-panel">
          <div className="chip-group">
            <span className="chip">Best Research Award</span>
            <span className="chip">Best Poster Presenter</span>
            <span className="chip">Government Adoption</span>
          </div>
          <p className="section-copy">
            The project was recognized for methodology, defense quality, and
            societal impact, and it was later adopted for practical threat
            monitoring use in Ethiopia.
          </p>
        </div>
      </MotionSection>

      <MotionSection className="section">
        <div className="section-heading section-heading--full">
          <p className="section-kicker">Paper + Poster</p>
          <h2>A dedicated space ready for publication assets.</h2>
        </div>
        <div className="category-grid">
          <article className="category-card">
            <h3>Poster</h3>
            <p className="section-copy">
              A poster slot is prepared here for your final image or PDF once
              you want the public-facing research page to include it.
            </p>
          </article>
          <article className="category-card">
            <h3>Paper</h3>
            <p className="section-copy">
              A paper card is also ready for a PDF link, abstract, or citation
              as soon as you decide what should be public.
            </p>
          </article>
        </div>
      </MotionSection>

      <MotionSection className="section">
        <div className="section-heading section-heading--full">
          <p className="section-kicker">Research Interests</p>
          <h2>Future goals across ML, RL, systems, and cybersecurity.</h2>
        </div>
        <div className="chip-group">
          {researchAreas.map((area) => (
            <span key={area} className="chip">
              {area}
            </span>
          ))}
        </div>
      </MotionSection>
    </div>
  );
}
