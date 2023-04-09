import React from "react";
import Card from "../card";
import styles from "./education.module.scss";

export default function Education(param) {
  return (
    <Card>
      <h2 className={styles.title}>Education</h2>
      <div className={styles.main}>
        <ul>
          <li>
            <h4>Turing</h4>
            <h5>Backend Engineer Program</h5>
            <ul>
              <li>Graduated 7-month bootcamp with Backend Software Certification from a non-profit school based in Denver, CO.</li>
              <li>Developed skills with Ruby, OOP and RubyOnRails Application/API development.</li>
            </ul>
          </li>
        </ul>
      </div>
    </Card>
  );
}
