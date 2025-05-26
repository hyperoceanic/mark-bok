import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Leading Technical Teams',
    Svg: require('@site/static/img/undraw_engineering-team_13ax.svg').default,
    description: (
      <>
        Leading a development team requires more than just skills in a particular technology stack.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_scrum-board_uqku.svg').default,
    description: (
      <>
            Programming is about releasing useful software. Everything else (everything) your
            programmers do is waste.
      </>
    ),
  },
  {
    title: 'Technical Mastery',
    Svg: require('@site/static/img/undraw_developer-activity_4zqd.svg').default,

    description: (
      <>
        You need to understand your technology base.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
