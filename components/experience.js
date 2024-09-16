import Link from "next/link";
import styles from "./work_history.module.scss";

export default function Experience() {
  const workHistory = [
    {
      company: "Sanborn Geospatial",
      position: "Fullstack Engineer",
      startDate: "Sept 2023",
      endDate: "Present",
      skills: ["Rails", "GCP", "Docker", "Node.js", "Hotwire"],
      descriptions: [
        "Lead development and maintenance of multiple client-facing and internal Rails applications, enhancing functionality/ UX via new features and refactors.",
        "Deliver specialized support for legacy Rails and Node.js applications, ensuring stability and introducing modern enhancements in flagship products.",
        "Partner with Product Managers and Cloud Manager to devise and implement strategic solutions for complex projects, optimizing long-term success.",
        "Ensure consistent application of branding and design patterns across the product suite, strengthening the user interface and experience.",
      ],
    },
    {
      company: "Sanborn Geospatial",
      position: "Software Engineer II",
      startDate: "Sept 2022",
      endDate: "Sept 2023",
      skills: ["Rails", "LinuxOS", "jQuery", "Postgres"],
      descriptions: [
        "Managed and optimized a comprehensive Rails-based application suite, including GIS-server deployments and automated data pipelines, in collaboration with the Principal Architect.",
        "Developed a high-impact geospatial web application in just 5 weeks, facilitating spatial funding analysis and achieving over 1TB in user downloads.",
        "Designed and implemented a role-based documentation platform on Rails, streamlining access and management of client-facing documentation for many key applications.",
        "Developed on-server Python and Ruby scripts for automated reporting to clients across various server implementations."
      ],
    },
    {
      company: "Sanborn Geospatial",
      position: "Software Engineer I",
      startDate: "June 2021",
      endDate: "Sept 2022",
      skills: ["Rails", "jQuery", "Postgres", "Python"],
      descriptions: [
        "Supported the Lead Engineer in the development and deployment of a comprehensive software suite, leveraging Rails for robust application development.",
        "Addressed and mitigated technical debt through in-depth debugging and strategic planning for technology upgrades and enhancements.",
        "Engineered a dynamic plane tracking map interface using aerial tracking APIs, enabling real-time observation, recording, and replay of flight paths.",
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
              className={`carousel-item experience h-100 ${
                index === 0 ? "active" : ""
              }`}
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
                    <br className="d-md-none"></br>
                    {job.skills.map((skill, i) => (
                      <span key={i} className="badge bg-light text-dark bg-opacity-50 m-1">{skill}</span>
                    ))}
                  </div>
                  <div className="text-end opacity-75 d-none d-md-block">
                    <Link className="mb-1" href="https://sanborn.com/" passHref>
                      {job.company} <i className="bi bi-link-45deg"></i>
                    </Link>
                    <p className="opacity-50 mb-1 mb-md-3 text-nowrap">
                      {job.startDate} - {job.endDate}
                    </p>
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
