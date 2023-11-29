import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.heroHeader)}>
      <div className={clsx(styles.containerHeader)}>
        <div className="profilepic">
          <img
            src="https://images.unsplash.com/photo-1649400513967-61768dc494ce?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Ted's profile picture"
          />
        </div>
        <div className="profiletext">
          <Heading as="h1" className="hero__title">
            <h1>👋 Hello World! I'm Ted!</h1>
          </Heading>
          <p className="hero__subtitle">
            I am a developer from 🇧🇷 Belo Horizonte, Brazil. <br />{" "}
            Currently based in 🇨🇦 Halifax, Canada. <br /> I am passionate
            about data, 🏳️‍🌈 DEI and education.
          </p>
        </div>
      </div>
    </header>
  );
}

function HomepageDocs() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h2" className="hero__title">
          <h2>Let's study with me?</h2>
        </Heading>
        <p className="hero__subtitle">
          I am always adding new info to my brain, <br />
          and now sharing some notes in this internet nook.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/category/database-engineering"
          >
            Checkout my notes! 📚
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageDocs />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
