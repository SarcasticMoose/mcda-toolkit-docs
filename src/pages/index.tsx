import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import { useNugetVersion } from '@site/src/hooks/useNugetVersion';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const version = useNugetVersion('McdaToolkit');

  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">

        <Heading as="h1" className={styles.title}>
          {siteConfig.title}
        </Heading>

        <div className={styles.badges}>
          <span className="badge badge--success">v{version}</span>
        </div>

        <p className={styles.subtitle}>
          Build multi-criteria decision systems with clarity and performance
        </p>

        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/intro">
            Get Started
          </Link>

          <Link
            className="button button--outline button--lg"
            to="https://github.com/SarcasticMoose/mcda-toolkit">
            GitHub
          </Link>
        </div>

        <p className={styles.note}>
          Designed for researchers, engineers, and decision-makers
        </p>

      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
