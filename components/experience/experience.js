import React from "react";
import Card from "../card";
import styles from "./experience.module.css";

export default function Experience(param) {
  return (
    <Card>
      <h2 className={styles.title}>Work Experience</h2>
      <div className={styles.main}>
        <ul>
          <li>
            <div>
              <p className="p_content">Sanborn</p>
            </div>
          </li>
        </ul>
      </div>
    </Card>
  );
}
