function ContactIcon({ label }) {
  switch (label) {
    case "Email":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M3.75 6.75h16.5a1.5 1.5 0 0 1 1.5 1.5v7.5a1.5 1.5 0 0 1-1.5 1.5H3.75a1.5 1.5 0 0 1-1.5-1.5v-7.5a1.5 1.5 0 0 1 1.5-1.5Zm0 1.87v.1l8.25 5.8 8.25-5.8v-.1H3.75Zm16.5 7.13v-5.2l-7.82 5.5a.75.75 0 0 1-.86 0l-7.82-5.5v5.2h16.5Z"
            fill="currentColor"
          />
        </svg>
      );
    case "GitHub":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 .75a11.25 11.25 0 0 0-3.56 21.92c.56.1.76-.24.76-.54v-1.9c-3.1.68-3.75-1.31-3.75-1.31-.51-1.28-1.23-1.62-1.23-1.62-1-.68.08-.67.08-.67 1.11.08 1.69 1.14 1.69 1.14.98 1.7 2.58 1.2 3.21.92.1-.72.39-1.2.7-1.48-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.43-2.21 1.14-3-.12-.28-.49-1.43.11-2.98 0 0 .93-.3 3.05 1.14a10.54 10.54 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.6 1.55.23 2.7.12 2.98.71.79 1.13 1.78 1.13 3 0 4.27-2.6 5.22-5.08 5.49.4.35.76 1.03.76 2.08v3.08c0 .3.2.65.77.54A11.25 11.25 0 0 0 12 .75Z"
            fill="currentColor"
          />
        </svg>
      );
    case "LinkedIn":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M6.94 8.56a1.53 1.53 0 1 1 0-3.06 1.53 1.53 0 0 1 0 3.06ZM5.6 9.75h2.68v8.64H5.6V9.75Zm4.36 0h2.57v1.18h.04c.36-.68 1.23-1.4 2.54-1.4 2.71 0 3.21 1.78 3.21 4.1v4.76h-2.68v-4.22c0-1.01-.02-2.31-1.41-2.31-1.41 0-1.62 1.1-1.62 2.24v4.29H9.96V9.75Z"
            fill="currentColor"
          />
        </svg>
      );
    default:
      return null;
  }
}

export function ContactLinkList({ links }) {
  return (
    <div className="contact-list">
      {links.map((link) => {
        const isWebLink = link.href.startsWith("http");

        return (
          <a
            key={link.label}
            href={link.href}
            target={isWebLink ? "_blank" : undefined}
            rel={isWebLink ? "noreferrer" : undefined}
            aria-label={link.label}
          >
            <span className="contact-list__brand">
              <ContactIcon label={link.label} />
            </span>
            <strong>{link.text}</strong>
          </a>
        );
      })}
    </div>
  );
}
