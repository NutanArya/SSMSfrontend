import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt=""
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="" />
            <div className={styles.aboutItemText}>
              <h3>Task</h3>
              <p>
                , sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea in culpa qui officia
                deserunt mollit anim id est labo
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="" />
            <div className={styles.aboutItemText}>
              <h3>Task 1</h3>
              <p>
                , sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea in culpa qui officia
                deserunt mollit anim id est labo
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="" />
            <div className={styles.aboutItemText}>
              <h3>Task2</h3>
              <p>
                , sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea in culpa qui officia
                deserunt mollit anim id est labo
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
