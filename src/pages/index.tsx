import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">
          Expert Software Consulting & Development Services for Businesses
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://codevelo.io/"
            target="_blank"
          >
            Get Started with Codevelo 🚀
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} | Software Consulting & Development`}
      description="End-to-end software consulting and development services for businesses of all sizes."
    >
      <HomepageHeader />
      <main className={styles.mainContent}>
        <HomepageFeatures />
      </main>
      <section className={styles.callToAction}>
        <div className="container text--center">
          <Heading as="h2">Partner with Codevelo</Heading>
          <p>
            Unlock trusted software consulting and development services that
            help your organization scale, innovate, and succeed.
          </p>
          <Link
            className="button button--secondary button--lg"
            target="_blank"
            to="https://codevelo.io/contact"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </Layout>
  );
}
