import React from "react";
import styles from "./card.module.scss";

export default function Card({ children }) {
  return (
    <div className={styles.about_main}>
      <div className={styles.tab}>
        <h2 className={styles.title}>Professional Experience</h2>
      </div>
      {children}
    </div>
  );
}
