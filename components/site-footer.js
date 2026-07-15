import Link from "next/link";
import { contactLinks, resumeLinks } from "../lib/site-data";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          <h3>Samuel Abatneh</h3>
          <p className="section-copy">
            AI engineer building useful, reliable systems.
          </p>
        </div>

        <div className="footer-links">
          {contactLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
          {resumeLinks.map((resume) => (
            <a key={resume.label} href={resume.href} target="_blank" rel="noreferrer">
              {resume.label}
            </a>
          ))}
        </div>

        <div className="footer-meta">
          <span>Addis Ababa, Ethiopia</span>
          <span>© 2026 Samuel Abatneh</span>
        </div>
      </div>
    </footer>
  );
}
