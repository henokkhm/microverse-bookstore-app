import { NavLink } from 'react-router-dom'; // If you're using React Router for navigation
import styles from '../styles/Navbar.module.css';
import logo from '../assets/logo.png';

function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.branding}>
        <img className={styles.logo} src={logo} alt="Bookstore app logo" />
        <h1>Bookstore</h1>
      </div>
      <nav className={styles.mainNav}>
        <ul className={styles.navList}>
          <li>
            <NavLink to="/" className={styles.mainNavLink}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/authors" className={styles.mainNavLink}>
              Authors
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
