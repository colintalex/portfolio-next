import React from 'react';
import styles from './layout.module.scss'
import Nav from "./nav";
import Branding from './branding';

export default function Layout({ children }) {
  return (
    <>
      <Branding />
      <Nav />
      <main data-spy="scroll" data-target="#nav_menu" data-offset="50" className={styles.main}>
        {children}
      </main>
      {/* <Footer /> */}
    </>
  );
} 