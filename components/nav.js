import styles from "./nav.module.scss";
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
    <>
    </>
  );
}
