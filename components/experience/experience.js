import React from "react";
import Card from "../card";
import styles from "./experience.module.css";

export default function Experience(param) {
  const accomplishments = [
    {
      name: "Ruby on Rails",
      contents: [
        "Focus on client-facing apps, developed primarily for viewing and analyzing 2D/3D spatial data.",
        "Personally assigned as point of contact for dev/maintenance for 6 seperate applications.",
      ],
    },
    {
      name: "GeoServer (Java/Maven)",
      contents: [
        "Integrated with various LDAP/JDBC/OAuth/Token-based authentication.",
        "Modified source code using Eclipse and Maven to fine-tune integration. (BCrypt, etc)",
      ],
    },
    {
      name: "GIS Software",
      contents: [
        "ArcGIS Pro/Online/ImageServer - Windows-based GIS Data Server",
        "OpenGeo Consortium Map Services (WFS,WMS,WMTS)",
      ],
    },
    {
      name: "DevOps Exposure",
      contents: [
        "NginX configuration/modifications for Linux VM's (Server blocks, local network media mounts)"
      ],
    },
  ];

  return (
    <Card>
      <h2 className={styles.title}>Professional Experience</h2>
      <div className={styles.main}>
        <div className={styles.experience_role}>
          <h3>Software Engineer I</h3>
        </div>
        <div className={styles.experience_org}>
          <h4>Sanborn</h4>
        </div>
        <div className={styles.divider}>
          <hr></hr>
        </div>
        {accomplishments.map((element, i) => (
          <div key={element.name} className={styles.info_chunk}>
            <h5>{element.name}</h5>
            <ul>
              {element.contents.map((content, i) => (
                <li key={i}>{content}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Card>
  );
}
