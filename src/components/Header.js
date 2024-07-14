import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css'; // Import the CSS module

function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}><Link className={styles.navLink} to="/">Home</Link></li>
          <li className={styles.navItem}><Link className={styles.navLink} to="/about">About</Link></li>
          <li className={styles.navItem}><Link className={styles.navLink} to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
