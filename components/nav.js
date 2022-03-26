import styles from "./nav.module.css";
import Link from "next/link";
import { Button } from "react-bootstrap";
import { Offcanvas } from "react-bootstrap";
import { useState } from "react";
import Image from "next/image";

export default function Nav() {
  const [show, setShow] = useState(false);``

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className={styles.nav_menu}>
      <div className={styles.round_nav}>
        <a className=" active" aria-current="page" href="#">
          Home
        </a>
      </div>

      <div className={styles.round_nav}>
        <a className=" active" aria-current="page" href="#">
          Resume
        </a>
      </div>

      <div className={styles.round_nav}>
        <a className=" active" aria-current="page" href="#">
          Projects
        </a>
      </div>
    </div>
  );
}
