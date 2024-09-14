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
                Hello, I&apos;m Colin. I&apos;m a passionate software engineer
                with a steadfast hunger for complex challenges and elegant yet
                simple solutions.
              </p>
              <p className={styles.description}>
                I have a versatile skill set, with a strong foundation in Ruby
                on Rails and relational database management.I&apos;m generally
                proficient in various frontend frameworks and have proven to be
                a rapid learner. My aim is to craft user-friendly solutions that
                are visually appealing and intuitive to use.
              </p>
              <br />
              <p className={styles.description}>
                <strong>What I say during interviews:</strong> Experienced
                Software Engineer with pragmatic decision-making and a solid
                background in complex technical challenges and tight deadlines.
                Obsessed with simplicity and eager to learn, developing a knack
                for debugging and a strong technical intuition.
              </p>
              <br />
              <p className={styles.description}>
                <strong>What I say to my friends:</strong> A code samurai
                training to be a digital assassin. I seek challenge, if I&apos;m
                not being pushed I&apos;m not learning, and thats no fun.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-6 order-1  order-md-3 mb-3">
        <div className="text-light p-2 p-md-3 rounded h-100 border border-dark">
          <div id="carouselExample" className="carousel slide h-100">
            <div className="carousel-inner h-100">
              <div className="carousel-item active h-100">
                <div className="h-100">
                  <div className="card-header">
                    <p className="fs-5 mb-0">Projects</p>
                  </div>
                  <div className="card-body">

                  </div>
                </div>
              </div>
              <div className="carousel-item h-100 position-relative">
                <div className="bg-transparent h-100">
                  <img
                    src="apaz_1.png"
                    className="d-block w-100 card-img-top rounded-top"
                    alt="..."
                  />
                  <div className="card-body small rounded-bottom px-2 py-1 bg-dark text-light">
                    <p>Alpha Project Training Arizona</p>
                    <ul>
                      <li>Gym booking site intendend for young athletes.</li>
                      <li>
                        Developed custom workflows for guest sign-up, member
                        accounts, and check-in.
                      </li>
                      <li>Rails 7 + Hotwire, integrated w/ Stripe, DocuSeal</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="carousel-item h-100 position-relative">
                <div className="bg-transparent h-100">
                  <img
                    src="apaz_1.png"
                    className="d-block w-100 card-img-top rounded-top"
                    alt="..."
                  />
                  <div className="card-body small rounded-bottom px-2 py-1 bg-dark text-light">
                    <p>Alpha Project Training Arizona</p>
                    <ul>
                      <li>Gym booking site intendend for young athletes.</li>
                      <li>
                        Developed custom workflows for guest sign-up, member
                        accounts, and check-in.
                      </li>
                      <li>Rails 7 + Hotwire, integrated w/ Stripe, DocuSeal</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
