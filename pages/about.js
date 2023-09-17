import Image from "next/image";
import styles from "../styles/About.module.scss";

export default function About() {
  return (
    <>
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
                Hello, I&apos;m Colin. I&apos;m a passionate software engineer with a steadfast hunger
                for complex challenges and elegant yet simple solutions.
              </p>
              <p className={styles.description}>
                I have a versatile skill set, with a strong foundation in Ruby
                on Rails and relational database management.I&apos;m generally proficient in various frontend frameworks and have proven to be a rapid learner. My
                aim is to craft user-friendly solutions that are visually appealing and intuitive to use.
              </p>
              <br/>
              <p className={styles.description}>
                <strong>What I say during interviews:</strong> Experienced
                Software Engineer with pragmatic decision-making and a solid
                background in complex technical challenges and tight deadlines.
                Obsessed with simplicity and eager to learn, developing a knack
                for debugging and a strong technical intuition.
              </p>
              <br/>
              <p className={styles.description}>
                <strong>What I say to my friends:</strong> A code
                samurai training to be a digital assassin. I seek challenge, if
                I&apos;m not being pushed I&apos;m not learning, and thats no fun.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
