import React from "react";
import Card from "../card";
import styles from "./education.module.css";

export default function Education(param) {
  return (
    <Card>
      <h2 className={styles.title}>Education</h2>
      <div className={styles.main}>
        <p className="p_content">
          Non ullamco laboris ut qui. Exercitation in officia occaecat labore.
          Proident pariatur laboris magna non deserunt duis aute anim mollit
          irure amet. Consequat labore esse anim laboris laboris elit enim
          laborum velit. Non consequat dolore in officia irure aute tempor elit
          pariatur. Eu minim ipsum adipisicing aliqua mollit fugiat Lorem tempor
          mollit id. Pariatur commodo esse enim eu ipsum incididunt fugiat.
          Consectetur eu ea anim duis. Do pariatur adipisicing veniam commodo
          occaecat est. Nisi sunt nisi aute est fugiat irure eiusmod ut labore
          sint ut tempor esse nulla. Pariatur Lorem est ullamco veniam sunt ex
          cillum.
        </p>
      </div>
    </Card>
  );
}
