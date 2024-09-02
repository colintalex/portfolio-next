import React from 'react';
import styles from './layout.module.scss'
import Nav from "./nav";

export default function Layout({ children }) {
  return (
    <>
      {/* <Nav /> */}
      <main data-spy="scroll" data-target="#nav_menu" data-offset="50" className={styles.main}>
        {children}
      </main>
      {/* <Footer /> */}
    </>
  );
} 