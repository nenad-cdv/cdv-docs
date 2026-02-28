import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Check from "../../../static/img/check.svg";
import Money from "../../../static/img/money.svg";
import Star from "../../../static/img/star.svg";
import Briefcase from "../../../static/img/briefcase.svg";

type FeatureItem = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<"svg">>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Reliable & Predictable",
    Svg: Check,
    description: (
      <>
        Consistent results for every sprint, every release, ensuring your
        projects meet business goals.
      </>
    ),
  },
  {
    title: "Expertise You Can Trust",
    Svg: Briefcase,
    description: (
      <>
        15+ years across fintech, SaaS, and enterprise systems with proven
        software consulting experience.
      </>
    ),
  },
  {
    title: "Cost-Optimized Delivery",
    Svg: Money,
    description: (
      <>
        Efficient processes and multidisciplinary teams reduce development costs
        while delivering top-quality solutions.
      </>
    ),
  },
  {
    title: "Full-Stack Development",
    Svg: Star,
    description: (
      <>
        Web, mobile, MVP, UI/UX, and dedicated teams—covering all aspects of
        modern software development.
      </>
    ),
  },
];

function Feature({ title, description, Svg }: FeatureItem) {
  return (
    <div className="col col--6">
      <div className={clsx("padding-horiz--md", styles.featureCard)}>
        <div className={styles.scalableImageContainer}>
          {Svg && <Svg className={styles.featureSvg} role="img" />}
          <div className={styles.triangleBackground}></div>
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
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
