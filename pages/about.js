import Image from "next/image";
import styles from "../styles/About.module.scss";

export default function About() {
  return (
    <>
      <div className="page-title">
        <h1>
          <span className="about">|</span>
        </h1>
      </div>
      <div className={styles.about_container}>
        <div className={styles.about_content}>
          <div className={styles.profile}>
            <div className={styles.img_wrapper}>
              <Image
                src="/colin_selfie.jpg"
                alt="Description of the image"
                width={300}
                height={300}
                className={styles.selfie_img}
              />
            </div>
            <div className={styles.bio}>
              <p className={styles.intro}>
                Hello, I'm Colin. I'm a passionate software engineer with a love
                for coding and problem-solving.
              </p>
              <p className={styles.description}>
                I have a versatile skill set, with a strong foundation in Ruby
                on Rails, and I'm proficient in various frontend frameworks. My
                aim is to craft innovative and user-friendly solutions.
              </p>
              <p className={styles.description}>
                <strong>What I say during interviews:</strong> Experienced
                Software Engineer with pragmatic decision-making and a solid
                background in complex technical challenges and tight deadlines.
                Obsessed with simplicity and eager to learn, developing a knack
                for debugging and a strong technical intuition.
              </p>
              <p className={styles.description}>
                <strong>What I say to my friends:</strong> Experienced A code
                samurai training to be a digital assassin. I seek challenge, if
                I'm not being pushed I'm not learning, and thats no fun.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
