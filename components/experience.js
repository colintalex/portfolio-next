import Link from "next/link";
import styles from "./work_history.module.scss";

export default function Experience() {
  const workHistory = [
    {
      company: "Sanborn Geospatial",
      position: "Fullstack Engineer",
      startDate: "Sept 2023",
      endDate: "Present",
      descriptions: [
        "Products Team, works with Principal Architect to manage and maintain a Rails-based application suite, GIS-server deployments, and automated data pipelines.",
        "Team-developed a geospatial, public web-app in 5 weeks, providing a platform for spatial funding-analysis while bolstering over 1Tb of user downloads to date.",
        "Self-authored a role-based documentation platform on Rails, streamlining internal viewing/editing of client-facing documentation for 4 applications within the company suite.",
      ],
    },
    {
      company: "Sanborn Geospatial",
      position: "Software Engineer II",
      startDate: "Sept 2022",
      endDate: "Sept 2023",
      descriptions: [
        "Products Team, works with Principal Architect to manage and maintain a Rails-based application suite, GIS-server deployments, and automated data pipelines.",
        "Team-developed a geospatial, public web-app in 5 weeks, providing a platform for spatial funding-analysis while bolstering over 1Tb of user downloads to date.",
        "Self-authored a role-based documentation platform on Rails, streamlining internal viewing/editing of client-facing documentation for 4 applications within the company suite.",
      ],
    },
    {
      company: "Sanborn Geospatial",
      position: "Software Engineer I",
      startDate: "June 2021",
      endDate: "Sept 2022",
      descriptions: [
        "Assisted Lead Engineer with development/on-site deployment of  company software product suite, built using Rails.",
        "Regained control on technical debt by assisting with debugging deep-dives & developing strategies for new technology.",
        "Developed a plane tracking map interface by using aerial tracking API's for observing/recording/replaying of flight paths.",
      ],
    },
  ];

  return (
    <>
      <div className="border-bottom opacity-50">
        <p className="mb-0 fs-3 ps-2">experience</p>
      </div>
      <div id="carouselExampleIndicators" className="carousel slide h-100">
        <div className="carousel-inner h-100">
          {workHistory.map((job, index) => (
            <div
              key={index}
              className={`carousel-item experience h-100 ${index === 0 ? "active" : ""}`}
            >
              <div className="p-2 h-100">
                <div className="d-flex justify-content-between">
                  <div className="pb-2 pb-md-3">
                    <p className="fs-4 mb-0">{job.position}</p>
                    <Link
                      className="d-md-none opacity-75"
                      href="https://sanborn.com/"
                      passHref
                    >
                      {job.company} <i className="bi bi-link-45deg"></i>
                    </Link>
                    <p className="opacity-50 mb-1 mb-md-3 text-nowrap">
                      {job.startDate} - {job.endDate}
                    </p>
                  </div>
                  <div className="text-end opacity-75 d-none d-md-block">
                    <Link className="mb-1" href="https://sanborn.com/" passHref>
                      {job.company} <i className="bi bi-link-45deg"></i>
                    </Link>
                  </div>
                </div>
                <hr className="w-50 mx-auto mt-1"></hr>
                <div className="overflow-hidden">
                  <ul className={styles.descriptionList}>
                    {job.descriptions.map((description, i) => (
                      <li key={i} className={styles.descriptionItem}>
                        {description}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="carousel-indicators experience">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="">
          <button
            className="carousel-control-prev pb-3"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon opacity-75 experience"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next pb-3"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon opacity-75 experience"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}
