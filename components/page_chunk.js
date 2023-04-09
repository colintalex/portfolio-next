import React from "react";
import styles from "./page_chunk.module.scss";

export default function PageChunk({ children }) {
  return (
    <div className={styles.page_chunk}>
      {children}
    </div>
  );
}
