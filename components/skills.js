import Image from "next/image";
import React from "react";
import styles from './about/about_me.module.scss'

export default function Skills (param) {
  const langs = [
        ["Ruby/Rails", "ruby", 95],
        ["HTML", "html", 95],
        ["SCSS/CSS", "css", 90],
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
    <div>
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
            <div className="container" key={opsystem[0]}>
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
  );
}