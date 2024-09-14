import styles from "./work_history.module.scss";

export default function Experience() {
  const workHistory = [
    {
      company: "Sanborn",
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
      company: "Sanborn",
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
      company: "Sanborn",
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
      <div class='border-bottom opacity-50'>
        <p className='mb-0 fs-3'>work experience</p>
      </div>
      <div id="carouselExampleIndicators" class="carousel slide h-100">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
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
        <div class="carousel-inner h-100">
          {workHistory.map((job, index) => (
            <div
              key={index}
              className={`carousel-item h-100 ${index === 0 ? "active" : ""}`}
            >
              <div className="p-2">
                <div className="d-flex justify-content-between">
                  <h3 className="">{job.company}</h3>
                  <div className="text-end">
                    <p className="mb-1">{job.position}</p>
                    <p className="">
                      {job.startDate} - {job.endDate}
                    </p>
                  </div>
                </div>
                <hr className="w-50 mx-auto mt-1"></hr>
                <ul className={styles.descriptionList}>
                  {job.descriptions.map((description, i) => (
                    <li key={i} className={styles.descriptionItem}>
                      {description}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
