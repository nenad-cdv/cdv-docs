import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const footerLinks = [
  {
    title: "Resources",
    items: [
      { label: "Codevelo", href: "https://codevelo.io" },
      { label: "Services Overview", href: "https://codevelo.io/services" },
      { label: "Blog", href: "https://codevelo.io/blog" },
    ],
  },
  {
    title: "Services",
    items: [
      {
        label: "Custom Web and Mobile Development",
        href: "https://codevelo.io/services/custom-web-and-mobile-development",
      },
      {
        label: "MVP Development Services for Startups",
        href: "https://codevelo.io/services/mvp-development",
      },
      {
        label: "Dedicated Development Team",
        href: "https://codevelo.io/services/dedicated-development-teams",
      },
    ],
  },
  {
    title: "Connect",
    items: [
      { label: "Email", href: "mailto:info@codevelo.io", icon: "email" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/codevelo-software",
        icon: "linkedin",
      },
      {
        label: "Instagram",
        href: "https://www.instagram.com/co_develo",
        icon: "instagram",
      },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "Contact", href: "https://codevelo.io/contact" },
      {
        label: "Privacy Policy",
        href: "https://codevelo.io/terms-and-conditions",
      },
    ],
  },
];

const icons: Record<string, React.ReactNode> = {
  email: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M2 4v16h20V4H2zm10 7L4 6h16l-8 5zm-8 7V8l8 5 8-5v10H4z" />
    </svg>
  ),
  linkedin: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4v12h-4V8zm7 0h3.6v1.7h.05c.5-.95 1.72-1.95 3.55-1.95 3.8 0 4.5 2.5 4.5 5.75V20h-4v-5.5c0-1.3 0-3-1.85-3s-2.15 1.46-2.15 2.95V20h-4V8z" />
    </svg>
  ),
  instagram: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.16c3.2 0 3.584.012 4.85.07 1.17.054 1.8.24 2.22.403.54.203.93.446 1.34.854.41.41.65.8.854 1.34.164.42.35 1.05.404 2.22.058 1.267.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.8-.404 2.22a3.58 3.58 0 0 1-.854 1.34 3.58 3.58 0 0 1-1.34.854c-.42.164-1.05.35-2.22.404-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.8-.24-2.22-.404a3.58 3.58 0 0 1-1.34-.854 3.58 3.58 0 0 1-.854-1.34c-.164-.42-.35-1.05-.404-2.22-.058-1.266-.07-1.65-.07-4.85s.012-3.584.07-4.85c.054-1.17.24-1.8.404-2.22a3.58 3.58 0 0 1 .854-1.34 3.58 3.58 0 0 1 1.34-.854c.42-.164 1.05-.35 2.22-.404C8.416 2.172 8.8 2.16 12 2.16zm0-2.16C8.735 0 8.332.013 7.053.072 5.775.13 4.838.312 4.042.57a5.58 5.58 0 0 0-2.02 1.17A5.58 5.58 0 0 0 .57 3.76C.312 4.556.13 5.493.072 6.77.013 8.048 0 8.45 0 12s.013 3.952.072 5.23c.058 1.277.24 2.214.498 3.01a5.58 5.58 0 0 0 1.17 2.02 5.58 5.58 0 0 0 2.02 1.17c.796.257 1.733.44 3.01.498C8.048 23.987 8.45 24 12 24s3.952-.013 5.23-.072c1.277-.058 2.214-.24 3.01-.498a5.58 5.58 0 0 0 2.02-1.17 5.58 5.58 0 0 0 1.17-2.02c.257-.796.44-1.733.498-3.01C23.987 15.952 24 15.55 24 12s-.013-3.952-.072-5.23c-.058-1.277-.24-2.214-.498-3.01a5.58 5.58 0 0 0-1.17-2.02 5.58 5.58 0 0 0-2.02-1.17c-.796-.257-1.733-.44-3.01-.498C15.952.013 15.55 0 12 0z" />
      <circle cx="12" cy="12" r="3.2" />
    </svg>
  ),
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.linksContainer}>
          {footerLinks.map((section, idx) => (
            <div key={idx} className={styles.section}>
              <h4>{section.title}</h4>
              <ul>
                {section.items.map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={clsx(item.icon && styles.iconLink)}
                    >
                      {item.icon && icons[item.icon.toLowerCase()]}
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className={styles.bottom}>
          © {new Date().getFullYear()} Codevelo. Documentation only.
        </div>
      </div>
    </footer>
  );
}
