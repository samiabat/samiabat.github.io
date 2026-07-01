import Link from "next/link";
import { contactLinks, resumeLinks } from "../lib/site-data";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          <p className="section-kicker">Built with React + Next.js</p>
          <h3>Hosted on GitHub Pages</h3>
          <p className="section-copy">
            Thoughtful AI systems, scalable backend infrastructure, and visual
            engineering for real-world products.
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
          <Link href="/">Home</Link>
          <span>© 2026 Samuel Abatneh</span>
        </div>
      </div>
    </footer>
  );
}
