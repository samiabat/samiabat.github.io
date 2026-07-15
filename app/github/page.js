import { GitHubSnapshot } from "../../components/github-snapshot";
import { MotionSection } from "../../components/motion-section";

export const metadata = {
  title: "GitHub",
};

export default function GitHubPage() {
  return (
    <div className="page-shell page-shell--inner">
      <MotionSection className="page-hero">
        <p className="section-kicker">GitHub</p>
        <h1>Public code, profile activity, and recent repositories.</h1>
      </MotionSection>

      <MotionSection className="section">
        <GitHubSnapshot />
      </MotionSection>
    </div>
  );
}
