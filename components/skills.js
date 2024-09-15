import { useEffect, useState } from "react";
import styles from "./skills.module.scss";

export default function Skills() {
  const skills = [
    ["Ruby", 10],
    ["PostgreSQL", 9],
    ["JavaScript", 9],
    ["Linux OS", 8],
    ["Docker", 8],
    ["GCP", 8],
    ["DevOps", 8],
    ["Node.js", 6],
    ["Python", 6],
  ];

  const frameworks = [
    ["Rails", 10],
    ["Hotwire", 9],
    ["Bootstrap", 8],
    ["React.js", 7],
    ["Express.js", 7],
    ["Ember.js", 6],
  ];

  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    // Mark animation as complete after a delay
    const animationTimer = setTimeout(() => {
      setAnimationComplete(true);
    }, []); // Adjust the delay as needed

    return () => clearTimeout(animationTimer);
  }, []);

  return (
    <div className='h-100'>
      <div className={styles.skills_section}>
        <h2 className={styles.title}>skills</h2>
        <div className={styles.skills_grid}>
          {skills.map(([skill, level]) => (
            <div
              key={skill}
              className={`${styles.skill} ${
                animationComplete ? styles.animate : ""
              }`}
            >
              <div className={styles.skill_label}>{skill}</div>
              <div className={styles.progress_container}>
                <div
                  className={styles.progress_bar}
                  style={{
                    width: animationComplete ? `${(level / 10) * 100}%` : "0%",
                    transition: animationComplete
                      ? "width 1s ease-in-out"
                      : "none",
                  }}
                ></div>
              </div>
              <div className={styles.skill_level}>
                {animationComplete ? `${level}/10` : "Loading..."}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.skills_section}>
        <h2 className={styles.title}>frameworks</h2>
        <div className={styles.skills_grid}>
          {frameworks.map(([framework, level]) => (
            <div
              key={framework}
              className={`${styles.skill} ${
                animationComplete ? styles.animate : ""
              }`}
            >
              <div className={styles.skill_label}>{framework}</div>
              <div className={styles.progress_container}>
                <div
                  className={styles.progress_bar_framework}
                  style={{
                    width: animationComplete ? `${(level / 10) * 100}%` : "0%",
                    transition: animationComplete
                      ? "width 1s ease-in-out"
                      : "none",
                  }}
                ></div>
              </div>
              <div className={styles.skill_level}>
                {animationComplete ? `${level}/10` : "Loading..."}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
