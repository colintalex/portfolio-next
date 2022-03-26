import Image from "next/image";
import React from "react";
import styles from './about_me.module.css'
import Card from "./card";

export default function AboutMe (param) {
  return (
    <Card>
      <h2 className={styles.title}>About Me</h2>
      <Image src="https://thumbs.dreamstime.com/b/happy-smiling-geek-hipster-beard-man-cool-avatar-geek-man-avatar-104871313.jpg"
        width="100" height="100" className={styles.avatar}/>
    </Card>
  )
}