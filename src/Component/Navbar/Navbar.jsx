import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignup = () => {
    navigate("/signup");
  };
  const handleHome = () => {
    navigate("/home");
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Sukriti Social Private Limited</div>
      <ul className={styles.navLinks}>
        <li className={styles.navItem}>
          <a onClick={handleHome} className={styles.navLink}>
            Home
          </a>
        </li>
        <li className={styles.navItem}>
          <button onClick={handleSignup} className={styles.button}>
            Signup
          </button>
        </li>
        <li className={styles.navItem}>
          <button onClick={handleLogin} className={styles.button}>
            Login
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
