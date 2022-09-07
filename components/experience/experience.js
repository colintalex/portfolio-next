import React from "react";
import Card from "../card";
import styles from "./experience.module.css";

export default function Experience(param) {
  return (
    <Card>
      <h2 className={styles.title}>Professional Experience</h2>
      <div className={styles.main}>
        <ul>
          <li>
            <h4 className="p_content">Sanborn</h4>
            <h5 className="p_content">Software Engineer</h5>
            <ul>
              <h6 className="p_content">
                Ruby on Rails
                <ul>
                  <li>Focus on client-facing apps, developed primarily for viewing and analyzing 2D/3D spatial data.</li>
                  <li>Personally assigned as point of contact for dev/maintenance for 6 seperate applications.</li>
                </ul>
              </h6>
              <h6 className="p_content">
                GeoServer (Java/Maven)
                <ul>
                  <li>Integrated with various LDAP/JDBC/OAuth/Token-based authentication.</li>
                  <li>Modified source code using Eclipse and Maven to fine-tune integration. (BCrypt, etc)</li>
                </ul>
              </h6>
              <h6 className="p_content">GIS Software
                <ul>
                  <li>ArcGIS Pro/Online/ImageServer - Windows-based GIS Data Server</li>
                  <li>OpenGeo Consortium Map Services (WFS,WMS,WMTS)</li>
                </ul>
              </h6>
              <h6 className="p_content">DevOps Exposure
                <ul>
                  <li>NginX configuration/modifications for Linux VM's (Server blocks, local network media mounts)</li>
                </ul>
              </h6>
              <li className="p_content"></li>
            </ul>
          </li>
        </ul>
      </div>
    </Card>
  );
}
