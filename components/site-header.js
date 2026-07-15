import Link from "next/link";
import { navigation } from "../lib/site-data";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="site-brand" href="/">
          <span className="site-brand__name">Samuel Abatneh</span>
        </Link>
        <nav className="site-nav" aria-label="Primary">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <a className="header-resume" href="/resumes/samuel-abatneh-software-engineer.pdf" target="_blank" rel="noreferrer">Resume -&gt;</a>
      </div>
    </header>
  );
}
