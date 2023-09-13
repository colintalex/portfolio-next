import Skills from "../components/skills";
import WorkHistory from "../components/work_history";
import styles from '../styles/Experience.module.scss'

export default function Experience() {
  return (
    <div className={styles.container}>
      <Skills/>
      <WorkHistory/>
    </div>
  );
}
