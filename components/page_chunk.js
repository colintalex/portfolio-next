import React from "react";
import styles from "./page_chunk.module.css";

export default function PageChunk({ children }) {
  return (
    <div className={styles.page_chunk}>
      {children}
    </div>
  );
}
