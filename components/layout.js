import React from 'react';
import styles from './layout.module.scss'
import Nav from "./nav";
// import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main data-spy="scroll" data-target="#nav_menu" data-offset="50">
        {children}
      </main>
      {/* <Footer /> */}
    </>
  );
} 