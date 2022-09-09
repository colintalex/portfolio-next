import React from "react";
import Card from "../card";
import styles from "./experience.module.css";

export default function Experience(param) {
  return (
    <Card>
      <h2 className={styles.title}>Professional Experience</h2>
      <div className={styles.main}>
        <div className={styles.experience_role}>
          <h4>Software Engineer I</h4>
        </div>
        <div className={styles.experience_org}>
          <h4>Sanborn</h4>
        </div>
        <div className={styles.divider}>
          <hr></hr>
        </div>
        <div className={styles.info_chunk}>
          <ul>
            <h6>Ruby on Rails</h6>
            <li>
              Focus on client-facing apps, developed primarily for viewing and
              analyzing 2D/3D spatial data.
            </li>
            <li>
              Personally assigned as point of contact for dev/maintenance for 6
              seperate applications.
            </li>
          </ul>
        </div>
        <div className={styles.info_chunk}>
          <ul>
            <h6>GeoServer (Java/Maven)</h6>
            <li>
              Integrated with various LDAP/JDBC/OAuth/Token-based
              authentication.
            </li>
            <li>
              Modified source code using Eclipse and Maven to fine-tune
              integration. (BCrypt, etc)
            </li>
          </ul>
        </div>
        <div className={styles.info_chunk}>
          <ul>
            <h6>GIS Software</h6>
            <li>
              ArcGIS Pro/Online/ImageServer - Windows-based GIS Data Server
            </li>
            <li>OpenGeo Consortium Map Services (WFS,WMS,WMTS)</li>
          </ul>
        </div>
        <div className={styles.info_chunk}>
          <ul>
            <h6>DevOps Exposure</h6>
            <li>
              NginX configuration/modifications for Linux VM's (Server blocks,
              local network media mounts)
            </li>
          </ul>
        </div>
      </div>
    </Card>
  );
}


