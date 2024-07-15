import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src="https://d3csxsarc47q4y.cloudfront.net/pictures/Y.png" alt="Logo" className={styles.logo} />
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
