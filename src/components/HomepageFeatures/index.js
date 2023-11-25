import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Multidisciplinary",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        The documentation spans the entire spectrum from backend processes to
        UX/UI design. This comprehensive resource is designed to facilitate
        learning across diverse domains, offering a wealth of knowledge on a
        wide range of topics.
      </>
    ),
  },
  {
    title: "Multilingual",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Being Brazilian, I've often faced challenges finding resources in my
        native language. This is why I deeply appreciate the accessibility of
        content on this website, as it can be easily translated into various
        languages, making information more inclusive and accessible to a global
        audience.
      </>
    ),
  },
  {
    title: "Open Source",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Open Source is the heart of this platform, where everything is freely
        accessible. My focus is often on writing about open-source technologies,
        and community engagement holds significant value for me. Join hands to
        contribute and let's build together!
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
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

export default function HomepageFeatures() {
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
