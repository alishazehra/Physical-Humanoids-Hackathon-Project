import React, { JSX } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}: Humanoids and Robotics</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>            <Link
              className="button button--secondary button--lg"
              to="/intro/what-is-physical-ai">
              Start Reading 📖
            </Link>        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home | ${siteConfig.title}`}
      description="Explore the world of Physical AI, Humanoids, and Robotics. A hands-on guide to building intelligent systems that interact with the physical world.">
      <HomepageHeader />
      <main>
        <section className={clsx(styles.sectionContainer, styles.welcomeSection)}>
          <div className="container text--center">
            <h2 className={styles.welcomeTitle}>Welcome to the World of Physical AI</h2>
            <ul className={styles.welcomeList}>
              <li>
                Dive deep into the fascinating intersection of artificial intelligence and physical systems.
                This book explores how intelligent agents perceive, reason, and act in the real world,
                focusing on humanoids, robotics, and their applications.
              </li>
              <li>
                Whether you're a beginner curious about the future of AI or an experienced engineer looking to expand your knowledge,
                you'll find comprehensive guides, hands-on examples, and insightful discussions within these pages.
              </li>
              <li>
                Building effective Physical AI systems requires understanding several foundational principles that differentiate them from purely software-based AI.
              </li>
            </ul>
            <div className={styles.welcomeVisuals}>
              <img src="/img/undraw_docusaurus_tree.svg" alt="Physical AI Concepts" className={styles.welcomeImage} />
              <p className={styles.welcomeEmoji}>🤖🧠💡🛠️</p>
            </div>
          </div>
        </section>
        <HomepageFeatures />
        <section className={styles.finalCallToAction}>
          <div className="container text--center">
            <p className={styles.finalEmoji}>🚀🌌🌟</p>
            <h2 className={styles.finalTitle}>Ready to Build the Future?</h2>
            <p className={styles.finalText}>
              Embark on your journey to master Physical AI. Start exploring the chapters now and bring your ideas to life!
            </p>
            <div className={styles.buttons}>
              <Link
                className="button button--primary button--lg"
                to="/intro/what-is-physical-ai">
                Begin Your Adventure
              </Link>
              
            </div>
            
          </div>
          
        </section>
        <br />
      </main>
    </Layout>
  );
}