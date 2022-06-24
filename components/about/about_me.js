import Image from "next/image";
import React from "react";
import styles from './about_me.module.css'
import Card from "../card";

export default function AboutMe (param) {
    const langs = [
      ["Ruby/Rails", "ruby", 100],
      ["HTML", "html", 100],
      ["SCSS/CSS", "css", 95],
      ["Javascript", "js", 85],
      ["PostgreSQL", "ruby", 75],
      ["XML", "ruby", 75],
      ["NGINX", "ruby", 60],
      ["Java/Maven", "gsvr", 40],
    ];

    const opsystems = [
      ["MacOS", "mac", 100],
      ["Windows", "pc", 70],
      ["Linux/Ubuntu", "lnx", 60],
    ];

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
        <hr></hr>
        <div style={{ width: "60%", margin: "auto" }}>
          <ul className={styles.short_langs}>
            {langs.map((lang, i) => (
              <div className="container" key={lang[0]}>
                <strong>{lang[0]}</strong>
                <div className={styles.donut} id={lang[1]}>
                  <div
                    className={styles.donut_fill}
                    style={{
                      background: `conic-gradient(#dc0099 0deg ${
                        lang[2] * 3.6
                      }deg, #ffffff ${lang[2] * 3.6}deg 360deg)`,
                    }}
                  >
                    <div className={styles.donut_hole}>{lang[2]}</div>
                  </div>
                </div>
              </div>
            ))}
          </ul>
        </div>
        <div style={{ width: "60%", margin: "auto" }}>
          <br />
          <ul className={styles.short_langs}>
            {opsystems.map((opsystem, i) => (
              <div className="container">
                <strong>{opsystem[0]}</strong>
                <div className={styles.donut} id={opsystem[1]}>
                  <div
                    className={styles.donut_fill}
                    style={{
                      background: `conic-gradient(#1ac9b8 0deg ${
                        opsystem[2] * 3.6
                      }deg, #ffffff ${opsystem[2] * 3.6}deg 360deg)`,
                    }}
                  >
                    <div className={styles.donut_hole}>{opsystem[2]}</div>
                  </div>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
}


// My current position demands constant work in Rails, and has also
//           provided many opportunites for me to expand my working knowledge of NginX/DevOps related work, LDAP/ActiveDirectory and
//           GIS Industry knowledge to name a few. This has helped me gain a significantly better understanding of the 'terrain' of the software industry, and has helped me become a better software engineer. 

