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
    <nav
      className="navbar bg-dark navbar-expand-lg border-bottom border-body"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand text-secondary" href="#">
          <i className="bi bi-cloud-lightning text-info fs-1 ms-3 mb-0 pb-0"></i> 
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
          </ul>
          {/* <span className="navbar-text">Navbar text with an inline element</span>  */}
        </div>
      </div>
    </nav>
  );
}
