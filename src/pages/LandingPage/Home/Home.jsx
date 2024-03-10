import React from "react";

import styles from "./Home.module.css";
import { getImageUrl } from "../../../utils";

export const Home = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Hi, We are greeny !!</h1>
          <p className={styles.description}>
            it, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <a href="mailto:myemail@email.com" className={styles.contactBtn}>
            Contact Me
          </a>
        </div>
        <img
          src={getImageUrl("Home/sewer1.jpg")}
          alt="Hero image of me"
          className={styles.heroImg}
        />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
      </section>
    </>
  );
};
