import styles from "./work_history.module.scss";

export default function WorkHistory() {
  const workHistory = [
    {
      company: "Sanborn",
      position: "Software Engineer II",
      startDate: "Sept 2022",
      endDate: "Present",
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
    <div className={styles.container}>
      <h2 className={styles.title}>work history</h2>
      {workHistory.map((job, index) => (
        <div key={index} className={styles.job}>
          <h3 className={styles.company}>{job.company}</h3>
          <p className={styles.position}>{job.position}</p>
          <p className={styles.date}>
            {job.startDate} - {job.endDate}
          </p>
          <ul className={styles.descriptionList}>
            {job.descriptions.map((description, i) => (
              <li key={i} className={styles.descriptionItem}>
                {description}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
