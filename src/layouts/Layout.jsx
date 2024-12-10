import React from "react";
import { children } from "react";
import styles from "./Layout.module.css";
function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Book App</h1>
        <p>
          <a href="https://botostart">Botostart</a> |React.js Full Course
        </p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by Fereshte with❤️</p>
      </footer>
    </>
  );
}

export default Layout;
