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

  return (
    <nav className="navbar bg-black navbar-expand-lg py-3 justify-content-center">
      <ul className="nav nav-pills" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${
              currentRoute === "/" ? "active" : ""
            } text-secondary px-4 mx-3`}
            id="pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-home"
            type="button"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            <a href="/">Home</a>
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${
              currentRoute === "/about" ? "active" : ""
            } text-secondary px-4 mx-3`}
            id="pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-home"
            type="button"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            <a href="/about">About Me</a>
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${
              currentRoute === "/projects" ? "active" : ""
            } text-secondary px-4 mx-3`}
            id="pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-home"
            type="button"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            <a href="/">Projects</a>
          </button>
        </li>
      </ul>
    </nav>
  );
}
