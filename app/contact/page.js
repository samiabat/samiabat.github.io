import { ContactLinkList } from "../../components/contact-link-list";
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
        <h1>Get in touch.</h1>
      </MotionSection>

      <MotionSection className="section split-section">
        <div className="section-heading">
          <h2>Reach out directly</h2>
        </div>
        <div className="contact-panel">
          <ContactLinkList links={contactLinks} />
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
