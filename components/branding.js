import styles from './branding.module.scss'
export default function Branding({ children }) {
  return (
    <div className={styles.branding_header}>
      <h1>CA</h1>
    </div>
  );
}
