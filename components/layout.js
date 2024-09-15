import React from 'react';
import styles from './layout.module.scss'

export default function Layout({ children }) {
  return (
    <>
      <main data-spy="scroll" data-target="#nav_menu" data-offset="50" className="p-2 p-md-3 mt-2">
        {children}
      </main>
      {/* <Footer /> */}
    </>
  );
} 