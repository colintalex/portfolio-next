import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import PageChunk from '../components/page_chunk';
import Nav from '../components/nav';
import AboutMe from '../components/about/about_me';
import Experience from "../components/experience/experience";
import Card from '../components/card';
import Education from "../components/education/education";
import Skills from '../components/skills';

export default function Home() {


  return (
    <div className={styles.container}>
      <Head>
        <title>Colin Alexander / Software</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <PageChunk>
          <div>
            <Image src="/cloud.svg" alt="Cloud Logo" width={640} height={360} />
          </div>

          <h1 className={styles.name}>colin alexander</h1>
          <h4 className={styles.job_title}>- fullstack software engineer -</h4>
          <h5 className={styles.sub_name}>forever curious, always learning</h5>

          <div className={styles.name}>
            <hr />
              <Skills/>
            <hr />
          </div>
        </PageChunk>
        <Nav />
        <PageChunk>
          <div className={styles.avatar_wrapper}>
            <Image
              src="/colin_selfie.jpg"
              width="300"
              height="300"
              className={styles.avatar}
            />
          </div>
          <AboutMe />
          <Experience />
          <Education />
        </PageChunk>
      </main>
    </div>
  );
}
