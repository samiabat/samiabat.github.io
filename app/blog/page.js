import { MotionSection } from "../../components/motion-section";

export const metadata = {
  title: "Blog",
};

export default function BlogPage() {
  return (
    <div className="page-shell page-shell--inner">
      <MotionSection className="page-hero">
        <p className="section-kicker">Blog</p>
        <h1>Notes on AI, backend, and research.</h1>
        <p className="section-copy section-copy--large">
          This space is reserved for AI engineering breakdowns, backend case
          studies, research notes, and YouTube-connected writeups.
        </p>
      </MotionSection>

      <MotionSection className="section">
        <div className="category-grid">
          <article className="category-card">
            <h3>AI Systems</h3>
            <p className="section-copy">
              RAG evaluation, multi-provider routing, and production prompting.
            </p>
          </article>
          <article className="category-card">
            <h3>Backend Engineering</h3>
            <p className="section-copy">
              APIs, databases, reliability, load handling, and infrastructure.
            </p>
          </article>
          <article className="category-card">
            <h3>Research + Learning</h3>
            <p className="section-copy">
              Notes on ML, RL, cybersecurity, and systems programming.
            </p>
          </article>
        </div>
      </MotionSection>
    </div>
  );
}
