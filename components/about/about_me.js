import Image from "next/image";
import React from "react";
import styles from './about_me.module.css'
import Card from "../card";

export default function AboutMe (param) {
  return (
    <Card>
      {/* <h2 className={styles.title}>About Me</h2> */}
      <div className={styles.about_main}>
          <h4>Hello, my name is Colin. </h4>
          <br />
          <h5>
            I thrive in solving <strong>challenging</strong> problems effectively.
          </h5>
          <br />

        <p className="p_content">
          <br/>
            
          <br />
          <br />
          
        </p>
      </div>
    </Card>
  );
}


// My current position demands constant work in Rails, and has also
//           provided many opportunites for me to expand my working knowledge of NginX/DevOps related work, LDAP/ActiveDirectory and
//           GIS Industry knowledge to name a few. This has helped me gain a significantly better understanding of the 'terrain' of the software industry, and has helped me become a better software engineer. 