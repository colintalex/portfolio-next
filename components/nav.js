import styles from "./nav.module.scss";
import Link from "next/link";
import { Button } from "react-bootstrap";
import { Offcanvas } from "react-bootstrap";
import { useState,useEffect } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";


export default function Nav() {
  const [show, setShow] = useState(false);``
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const currentRoute = usePathname();
  let colorClass = '';

  switch (currentRoute){
    case '/':
      colorClass = 'home_title'
      break; 
    case '/experience':
      colorClass = 'experience_title'
      break; 
    case '/about':
      colorClass = 'about_title'
      break; 
  }

  return (
    <>
    <div className={styles.nav_menu}>
      <Link
        href="/"
        className={
          currentRoute === "/"
            ? styles.active_class_name_home
            : styles.non_active_class_name
        }
      >
        <h1>home</h1>
      </Link>
      <Link
        href="/experience"
        className={
          currentRoute === "/experience"
            ? styles.active_class_name_experience
            : styles.non_active_class_name
        }
      >
        <h1>experience</h1>
      </Link>
      <Link
        href="/about"
        className={
          currentRoute === "/about"
            ? styles.active_class_name_about
            : styles.non_active_class_name
        }
      >
        <h1>about</h1>
      </Link>
    </div>
    <div className={styles.page_title}>
      <h1>
        <span className={colorClass}>|</span>
      </h1>
    </div>
    </>
  );
}
