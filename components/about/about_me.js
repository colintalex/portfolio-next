import Image from "next/image";
import React from "react";
import styles from './about_me.module.scss'
import Card from "../card";

export default function AboutMe (param) {
  return (
    <Card>
      <div className={styles.about_main}>
        <h4>Hi, I&apos;m Colin.</h4>
        <br />
        <p>
          I have been building and learning how things work my entire life. Ever
          since I started a bicycle shop out of my garage in highschool, I have
          always tried to learn and push myself into more and more challenging
          tasks. While I enjoy the hands-on aspect of the mechanical world, the
          vast digital world of software has taken me for the ride.
        </p>
      </div>
    </Card>
  );
}


// My current position demands constant work in Rails, and has also
//           provided many opportunites for me to expand my working knowledge of NginX/DevOps related work, LDAP/ActiveDirectory and
//           GIS Industry knowledge to name a few. This has helped me gain a significantly better understanding of the 'terrain' of the software industry, and has helped me become a better software engineer. 

