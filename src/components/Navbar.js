import { NavLink } from 'react-router-dom'; // If you're using React Router for navigation
import styles from '../styles/Navbar.module.css';
import profileIcon from '../assets/profile-icon.png';

function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <h1 className={styles.logo}>Bookstore CMS</h1>
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
        <img
          src={profileIcon}
          alt="profile icon"
          className={styles.profileIcon}
        />
      </div>
    </header>
  );
}

export default Navbar;
