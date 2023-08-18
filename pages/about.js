import Image from "next/image";
import styles from '../styles/About.module.scss'
export default function About() {
  return (
    <>
      <div className="page-title">
        <h1>| About Me</h1>
      </div>
      <div className={styles.img_wrapper}>
        <Image
          src="/colin_selfie.jpg"
          alt="Description of the image"
          width={300}
          height={300}
          className={styles.selfie_img}
        />
      </div>
    </>
  );
}
