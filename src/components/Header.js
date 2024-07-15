import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../content/pictures/Y.png'; // Adjust the path as necessary

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>
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
