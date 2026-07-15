import { MotionSection } from "../../components/motion-section";
import { experienceTimeline } from "../../lib/site-data";

export const metadata = {
  title: "Experience",
};

export default function ExperiencePage() {
  return (
    <div className="page-shell page-shell--inner">
      <MotionSection className="page-hero">
        <p className="section-kicker">Experience</p>
        <h1>Experience across research, mentoring, and delivery.</h1>
      </MotionSection>

      <MotionSection className="section">
        <div className="timeline timeline--full">
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
    </div>
  );
}
