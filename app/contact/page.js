import { MotionSection } from "../../components/motion-section";
import { contactLinks, resumeLinks } from "../../lib/site-data";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="page-shell page-shell--inner">
      <MotionSection className="page-hero">
        <p className="section-kicker">Contact</p>
        <h1>Let&apos;s build production AI systems that actually ship.</h1>
      </MotionSection>

      <MotionSection className="section split-section">
        <div className="section-heading">
          <h2>Reach out directly</h2>
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
