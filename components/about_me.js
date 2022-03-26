import React from "react";
import styles from './about_me.module.css'
import Card from "./card";

export default function AboutMe (param) {
  return (
    <Card>
      <h2 className={styles.title}>About Me</h2>
    </Card>
  )
}