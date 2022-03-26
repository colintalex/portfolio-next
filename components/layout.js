import React from 'react';
import Background from './background';
import styles from './layout.module.css'
import Nav from "./nav";
// import Footer from "./footer";

export default function Layout({ children }) {
  return(
    <>
      {/* <Nav /> */}
        <main>
          {children}
        </main>
      {/* <Footer /> */}
    </>
  )
} 